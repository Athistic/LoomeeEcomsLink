import React from "react";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.webp";

export default function HomeFooter() {
  return (
    <footer className="Homefooter">
      <div className="FooterParaContainer">
        <p className="footerPara">
          <i>Athistic Golden Services &trade;</i>
          <br></br>
          <a href="https://www.facebook.com/athenkosiathisic.mamfengu">
            <img src={facebook} width="30px" height="30px"></img>
          </a>
          &nbsp;
          <a href="https://www.instagram.com/athenkosimamfengu/">
            <img src={instagram} width="30px" height="30px" style={{ borderRadius: 50 }}></img>
          </a>
          &nbsp;
          <a href="https://twitter.com/AthenkosiMamfe1">
            <img src={twitter} width="30px" height="30px" style={{ borderRadius: 50 }}></img>
          </a>
        </p>
      </div>
    </footer>
  );
}
