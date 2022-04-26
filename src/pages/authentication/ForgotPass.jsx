import React, { useState } from "react";
import NavBar from "../../routes/NavBar";
import forgotPic from "../../assets/images/forgotpassword.png";
import ForgotPasswordFooter from "../../components/ForgotPasswordFooter";
// import padlock from "../../assets/images/padlock.webp";
//input for email and button reset
export default function ForgotPass() {
  const [email, setEmail] = useState("");

  const EmailInput = (entry) => {
    const userVal = entry.target.value;
    setEmail(userVal);
    console.log(email);
  };

  const handleReset = () => {
    setEmail(email);
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)) {
      console.log("Incorrect email");
      setEmail("");
    } else {
      console.log("Valid email");
    }
  };

  return (
    <div className="MainContainer">
      <NavBar />
      <h1 className="ForgotMain">Forgot password?</h1>

      <img src={forgotPic} width={100} height={100} style={{ marginLeft: 600, position: "absolute", left: 250, top: 330 }}></img>
      <form className="ForgotContainer">
        <b>Forgot password..?</b>
        <br></br>
        <br></br>
        <label className="lblEmail">Email:</label>
        <input type="text" className="ForgotEmail" onChange={EmailInput}></input>
        <br></br>
      </form>
      <input type="submit" value="Reset Password" name="submit" className="ForgotSubmit" onClick={handleReset}></input>
      <ForgotPasswordFooter />
    </div>
  );
}
