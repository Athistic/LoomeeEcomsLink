import { onAuthStateChanged } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

export default function test() {
  const AuthContext = createContext({});

  export const useAuth = () => useContext(AuthContext);

  const Pathstring = "USERS";

  const Ref = collection(FIREBASE_FIRESTORE, Pathstring);

  export default function FireBaseAuthHookProvider({children,...props}){
const [currentUser,setCurrentUser]=useState({})

    useEffect(()=>{
      onAuthStateChanged(FIREBASE_AUTH,async function (user){

        let UserToUse={};

        if (user!==null){
          const q=query(Ref,where("uid","==",`${user.uid}`))
          const querySnapshot=await getDocs(q);

          if(querySnapshot.docs[0]){
            const data=querySnapshot.getDocs[0].data();

            UserToUse={
              cell:data.cell,
              displayName:data.displayName,
              email:data.email,
              profileUrl:data.profileUrl,
              role:data.role,
              uid:data.uid,
              cart:data.cart
            }
          }
        }
        setCurrentUser(user!==null?UserToUse:null)
      });
    },[])
    
    useEffect(()=>{},[currentUser])

  }

  return <div>test</div>;
}
