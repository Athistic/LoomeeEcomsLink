import React, { useState } from "react";
import NavBar from "../../routes/NavBar";
import AuthForm from "../../reusable/AuthForm";
import { useAuth } from "../../firebase/FireBaseAuthHook";
import { useNavigate } from "react-router-dom";
import { RoutesObj } from "../../routes/AllRoutes";

// import { LoginEmailPass, SignInWithGoogle, SignInAnon, GetAuthState } from "../../firebase/FirebaseAuth";
// import { CreateNewUser } from "../../firebase/FirebaseAuth";
// import googleImage from "../../assets/images/google.png";

//Google button
//Annonymous button
//form=>email and password

export default function SignIn() {
  const { CreateNewUser, LoginEmailPass, SignInAnon, SignInWithGoogle } = useAuth();
  // const { history } = useNavigate();
  let navigation = useNavigate();

  function SubmitSignIn(email, pass) {
    console.log("My email and password: ", email, pass);
    //do firebase auth call here for signup with email and password
    LoginEmailPass(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed in Successfully,", user);
        //Signed in
        CreateNewUser(user.uid, user).then(() => {
          // history.push(RoutesObj.home.path);
          navigation(RoutesObj.home.path, { replace: true });
        });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error occure:", errorCode, errorMessage);
      });
  }

  function googleBtn() {
    //Action Function we created containing the firebase call as a return value
    //result ftom action
    SignInWithGoogle()
      .then((result) => {
        //This gives you a Google access token. You can get it to access the Google API
        //Const credential=GoogleAuthProvider.credentialFromResult(result)
        //The signed in user info
        const user = result.user;
        console.log("SIGN IN/UP SUCCESS");
        //Check if user is saved if not save user
        CreateNewUser(user.uid, user).then(() => {
          // history.push(RoutesObj.home.path);
          navigation(RoutesObj.home.path, { replace: true });
        });
      })
      .catch((error) => {
        //Handle errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        //The email of the users account used
        //const email=error.email
      });
  }

  function annonBtn() {
    SignInAnon()
      .then((result) => {
        const user = result.user;
        console.log("SIGN IN/UP SUCCESS");
        //Check if user is saved if not save user
        CreateNewUser(user.uid, user).then(() => {
          // history.push(RoutesObj.home.path);
          navigation(RoutesObj.home.path, { replace: true });
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error", errorCode, errorMessage);
      });

    //Old code we had
    // .then(() => {
    //   // Signed in..
    //   console.log("Signed in/up Happy");
    //   GetAuthState()
    //     .then((value) => {
    //       console.log("Resolved at the end :", value);
    //     })
    //     .catch((err) => {
    //       console.log("Rejected at the end :", err);
    //     });
  }

  return (
    <div className="SignInContainer">
      <NavBar />
      <h1 className="SignInHeading" style={{ marginLeft: 650 }}>
        Sign In
      </h1>
      <div className="buttonContainer">
        <button className="Google-btn" onClick={googleBtn}></button>

        <button className="Annonymous-btn" onClick={annonBtn}></button>
      </div>

      <AuthForm type="Sign In" onFinalize={(email, pass) => SubmitSignIn(email, pass)} />
    </div>
  );
}
