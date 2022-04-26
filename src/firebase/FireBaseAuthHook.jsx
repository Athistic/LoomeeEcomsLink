import React, { useState } from "react";

import { createContext, useContext } from "react";

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInAnonymously, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { FIREBASE_FIRESTORE } from "./FirebaseConfig";
import { doc, collection, setDoc, query, where, getDocs, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const AuthContext = createContext({}); //Creator has the value
export const useAuth = () => useContext(AuthContext); //Provider

const PathString = "USERS";
const Ref = collection(FIREBASE_FIRESTORE, PathString);

export default function FirebaseAuthHookProvider({ children, ...props }) {
  const [CurrentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, async function (user) {
      let UserToUse = {};

      if (user != null) {
        const q = query(Ref, where("uid", "==", `${user.uid}`));
        const querySnapshot = await getDocs(q);
        // console.log("Q", q, "QS", querySnapshot.docs[0]);

        // console.log("DATA", querySnapshot.docs[0].data());
        if (querySnapshot.docs[0]) {
          const data = querySnapshot.docs[0].data();

          UserToUse = {
            cell: data.cell,
            displayName: data.displayName,
            email: data.email,
            profileurl: data.profileUrl,
            uid: data.uid,
            role: data.role,
            cart: data.cart
          };
        }
      }
      setCurrentUser(user !== null ? UserToUse : null);
    });
  }, []);

  useEffect(() => {}, [CurrentUser]);

  function RegisterEmailPass(email, password) {
    //Firebase call that handles auth of a new user signing up with our site.This call returns a Promise of type FirebaseUser
    return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
  }

  function LoginEmailPass(email, password) {
    // This is the firebase call that handles the auth of a user signing in to our site,this call returns a promise of type Firebase
    return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
  }

  function Logout() {
    return signOut(FIREBASE_AUTH);
  }

  function SignInWithGoogle() {
    //Is ther way we comms with Firebase to know how to log in
    const provider = new GoogleAuthProvider();
    // the firebase function that allows us to sign in with google via a pop up screen
    //it will return to us a promise of type Firebaseuser
    return signInWithPopup(FIREBASE_AUTH, provider);
  }
  function SignInAnon() {
    return signInAnonymously(FIREBASE_AUTH);
  }
  //Create a new user from a Sign Up

  async function CreateNewUser(uid, user) {
    //This is a reference to a single document in a collection because we have the base path as well as a sub path ie:Users/uid
    const docRef = doc(FIREBASE_FIRESTORE, PathString, uid);
    //Firebase Implementation begins

    //Checks that user does exist
    const isUser = user !== undefined && user !== null ? true : false;
    //Checks if user has a display name(Only Google with Auth does)
    const dn = isUser && user.displayName !== null ? user.displayName : "";

    //The new user object we want to create
    const payload = {
      displayName: dn.length > 0 ? `${user.displayName}` : "",
      email: isUser ? user.email : "",
      profileUrl: isUser && user.profileUrl ? user.profileUrl : "", //Google
      uid: uid,
      role: "user",
      cart: []
    };

    console.log(Ref, docRef, payload);

    //same structure as an SQL query. query(location type of query==where a==b)
    const q = query(Ref, where("uid", "==", `${uid}`));
    // if query matched an array of results from match
    const querySnapshot = await getDocs(q);
    console.log("Q", q, "qS", querySnapshot.docs.length);

    // Checked that user does not exit our db that way we do not have duplicate values for users this is very relevent when we add
    //this to our annon and Google auth Methods
    if (querySnapshot.docs.length == 0) {
      //create db user

      await setDoc(docRef, payload) //addDoc can also be used in place of setDoc
        .then((res) => {
          console.log("Created new user", res);
        })
        .catch((err) => {
          console.log("Error can not create new user in db", err);
        });
    }
  }
  //We will get our product from the single product page along with the user attempting to add it to their cart so we need to make sure
  //the function only executes once the user is signed in else our uid is going to be an empty
  //string that is going to cause problems so in order to prevent that we will not execute this if not logged in
  async function AddProductToCart(uid, order) {
    const docRef = doc(FIREBASE_FIRESTORE, `${PathString}/${uid}`);
    await updateDoc(docRef, { cart: order })
      .then((res) => {
        console.log("Added product to user cart", res);
      })
      .catch((err) => {
        console.log("ERROR cannot Add to user cart", err);
      });
  }
  //Delete , in my case prodId will be an Index
  async function RemoveProductFromCart(uid, prodId) {
    console.log(uid, prodId);
    const docRef = doc(FIREBASE_FIRESTORE, `${PathString}/${uid}`);
    const tempArr = CurrentUser !== null ? CurrentUser.cart : [];

    //Remove object from array
    //map=>return<></>explicit return must always return a value
    //forEach=>no return but rather iterate and do something for each entry in the array
    //filter=>Specific condition we want to check,Always return an array, the content of that array is determined by our condition

    // let arr = tempArr.filter((e, index) => e.id != prodId);
    tempArr.splice(prodId, 1);
    console.log("Arr", tempArr);
    //The same as let arr = tempArr.filter((e) => e.id != prodId);
    // let arr=[];
    // tempArr.forEach((e=>{
    //   if(e.id !==prodId){
    //     arr.push(e)
    //   }
    // }))
    await updateDoc(docRef, { cart: tempArr })
      .then(() => {
        console.log("Files array updated Successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log("Files array updated unSuccessful", err);
      });
  }
  //Access value we want to be able to use
  const value = {
    CurrentUser,
    RegisterEmailPass,
    LoginEmailPass,
    Logout,
    // forgotPassword,
    // resetPassword,
    SignInWithGoogle,
    SignInAnon,
    CreateNewUser,
    AddProductToCart,
    RemoveProductFromCart
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
