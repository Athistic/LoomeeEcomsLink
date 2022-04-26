import { createUserWithEmailAndPassword, GoogleAuthProvider, signInAnonymously, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { FIREBASE_FIRESTORE } from "./FirebaseConfig";
import { doc, collection, setDoc, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const PathString = "USERS";
// // Sign up using email and password
// //

// //Checking auth state of a user after sign in/up
// export function GetAuthState() {
//   //create own new promise function type
//   return new Promise((resolve, reject) => {
//     //local variable that we init with "" values
//     let returnUser = {
//       displayName: "",
//       email: "",
//       profileUrl: "",
//       uid: "",
//       role: ""
//     };

//     //firebase function
//     return onAuthStateChanged(FIREBASE_AUTH, async function (user) {
//       console.log("Give us the onAuthStateChanged user: ", user?.uid, user); //Will be null or Firebase
//       //if logged in will not be null
//       if (user != null) {
//         const Ref = collection(FIREBASE_FIRESTORE, "USERS");
//         //Same structure as an aql query=>query(location type of query==where a==b)
//         const q = query(Ref, where("uid", "==", `${user.uid}`));
//         //if query matched an array of results from match will be returned to us
//         const querySnapshot = await getDocs(q);
//         console.log("qs", querySnapshot.docs.length);
//         //Checked that user does not exist in our db that way we do not have duplicate values for users this is very relevent
//         //when we add this to our anon and Google auth methods

//         if (querySnapshot.docs.length == 0) {
//           console.log("anon=>getAuth=>query=>return []=>we are here");
//           //User does not exist lets create user
//           CreateNewUser(user.uid, user)
//             .then(() => {
//               //create our return value
//               returnUser = {
//                 displayName: user.displayName && user.displayName.length > 0 ? user.displayName : "",
//                 email: user.email ? user.email : "",
//                 profileUrl: "", //Google
//                 uid: user.uid,
//                 role: "user"
//               };
//               console.log("Created user entry in our db and will now resolve our promise");
//               return resolve(returnUser);
//             })
//             .catch((err) => {
//               //error some where
//               reject(`Error occurred here: ${err}`);
//             });
//         } else {
//           //Where we return our users value
//           console.log("annon=>getAuth=>query=>return does not exist entry=>We are here to fill local variable");
//           returnUser = {
//             displayName: user.displayName && user.displayName.length > 0 ? user.displayName : "",
//             email: user.email ? user.email : "",
//             profileUrl: "", //Google
//             uid: user.uid,
//             role: "user"
//           };
//           console.log("No resolving promise");
//           return resolve(returnUser);
//         }
//       }
//     });
//   });
// }
