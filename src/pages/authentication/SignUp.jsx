import React, { useState } from "react";
import NavBar from "../../routes/NavBar";
import AuthForm from "../../reusable/AuthForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/FireBaseAuthHook";
import { RoutesObj } from "../../routes/AllRoutes";
// import { RegisterEmailPass, CreateNewUser } from "../../firebase/FirebaseAuth";

//form=>
//email & password input field X 2
//Bonus ensure add confimr password field
//Stop user from using sign in if passwords do not match

export default function SignUp() {
  const { RegisterEmailPass, CreateNewUser } = useAuth();
  // const { history } = useNavigate();
  let navigation = useNavigate();
  function submitSignUp(email, password) {
    console.log("My email and password: ", email, password);
    //do firebase auth call here for signup with email and password

    RegisterEmailPass(email, password)
      //do something once the promise is resolved
      .then((userCredential) => {
        const user = userCredential.user;
        //signed in
        console.log("SIGN UP a success, we recieved:", user);
        //save user to firebase db in order to access that users info
        const payload = {
          displayName: user.displayName,
          email: user.email ? user.email : "",
          profileUrl: user.ProfileUrl ? user.profileUrl : "", //Google
          uid: user.uid
        };

        console.log("???", user.uid, payload);
        CreateNewUser(user.uid, payload)
          .then(() => {
            console.log("SAVED USER TO DB");
            // history.push("/");
            navigation(RoutesObj.home.path, { replace: true });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("An error occurred, ", errorCode, errorMessage);
          });
      });
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log("An error occurred, ", errorCode, errorMessage);
    // });
  }

  return (
    <div className="SignUpContainer">
      <NavBar />
      <h1 className="SignUpHeading" style={{ marginLeft: 650 }}>
        Sign Up
      </h1>
      <AuthForm type="Sign Up" onFinalize={(email, pass) => submitSignUp(email, pass)} />
    </div>
  );
}
