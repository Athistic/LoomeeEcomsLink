import React from "react";
import { useState, useEffect } from "react";
import AuthFormFooter from "../components/AuthFormFooter";

export default function AuthForm({ type, onFinalize }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isDis, setisDis] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const EmailInput = (entry) => {
    const userVal = entry.target.value;
    setEmail(userVal);
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)) {
      setErrorMsg("Invalid email");
      setisDis(true);
      console.log(errorMsg);
    } else {
      setisDis(false);
      console.log("Valid email");
    }
  };

  const passwordInput = (entry) => {
    const userPassword = entry.target.value;
    if (password != passwordConfirm) {
      setErrorMsg("Passwords don't match");
      setisDis(true);
      console.log(errorMsg);
    } else {
      setisDis(false);
    }

    if (password.length < 5) {
      setErrorMsg("Password length must be greater than 5");
      setisDis(true);
      console.log(errorMsg);
    } else {
      setisDis(false);
    }
    setPassword(userPassword);
    console.log(password);
  };

  const ConfirmInput = (entry) => {
    const userConfirm = entry.target.value;
    setPasswordConfirm(userConfirm);
    console.log(passwordConfirm);
  };
  console.log("isDis", isDis);
  return (
    <div>
      <form className="AuthForm">
        <label className="lblEmail">Email:</label>
        <input type="text" className="Email-el" onChange={EmailInput} value={email}></input>
        <br></br>
        <label className="lblPassword">Password:</label>
        <input type="password" className="password-el" onChange={passwordInput} value={password}></input>
        <br></br>
        <label className="lblConfirm">Confirm Password:</label>
        <input type="password" className="confirm-el" onChange={ConfirmInput} value={passwordConfirm}></input>
      </form>
      {/* <button className="btn-submit" onClick={() => checkPassword()}>
        {type}
      </button> */}
      <button disabled={isDis} className="SignUpSubmit" onClick={() => onFinalize(email, password)}>
        {type}
      </button>
      <AuthFormFooter />
    </div>
  );
}
