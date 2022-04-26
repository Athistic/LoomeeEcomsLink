import React from "react";
import mail from "../assets/images/envelope.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import location from "../assets/images/location.png";
import NavBar from "../routes/NavBar";
import MoreInfo from "../components/MoreInfo";

export default function Contact() {
  return (
    <div className="contactContainer">
      <NavBar />
      <h1 className="contactMainHead">Contact Us</h1>
      <div className="contactsDisplay">
        <img src={mail} width="200" height="200" className="mail"></img>
        <label className="myLabel" style={{ position: "relative", left: 20, bottom: 110, fontSize: "50px" }}>
          athisticgoldenservices.co.za
        </label>
        <br></br>
        <img src={twitter} width="200" height="200" className="twitter"></img>
        <label style={{ position: "relative", left: 20, bottom: 110, fontSize: "50px" }}>@athisticgoldenservices</label>
        <br></br>
        <img src={instagram} width="200" height="200" className="instagram"></img>
        <label style={{ position: "relative", left: 20, bottom: 110, fontSize: "50px" }}>@athisticgoldenservices</label>
        <br></br>
        <img src={facebook} width="200" height="200" className="facebook"></img>
        <label style={{ position: "relative", left: 20, bottom: 110, fontSize: "50px" }}>athisticgoldenservices</label>
        <br></br>
        <img src={location} width="200" height="200" className="location"></img>
        <label style={{ position: "relative", left: 20, bottom: 110, fontSize: "50px" }}>1 New Street Daleview King William's Town</label>
        <br></br>
      </div>

      <MoreInfo />
    </div>
  );
}
