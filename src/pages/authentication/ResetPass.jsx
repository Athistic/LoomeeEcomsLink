import React, { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../routes/NavBar";
import AuthForm from "../../reusable/AuthForm";
import SignIn from "./SignIn";
//email and password field
export default function ResetPass() {
  function SignIn(email, pass) {
    console.log("My email and password: ", email, pass);
  }
  return (
    <div className="ResetContainer">
      <NavBar />

      <h1 className="ResetMainHeading">Reset Password</h1>
      <AuthForm type="Sign Up" onFinalize={(email, pass) => SignIn(email, pass)} />
    </div>
  );
}
