import React from "react";
import MoreInfo from "../components/MoreInfo";
import NavBar from "../routes/NavBar";

export default function About() {
  return (
    <div className="About-mainContainer">
      <NavBar />
      <h1 className="AboutMainHead">About us</h1>
      <div className="About-container">
        <h2>Welcome to Athistic Golden Services &trade; !</h2>
        <p className="about-para">
          Athistic Golden Services &trade; is an online bookstore with a mission to financially support local, independent bookstores. We believe that bookstores are essential to a healthy
          culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime. They’re also
          anchors for our downtowns and communities. As more and more people buy their books online, we wanted to create an easy, convenient way for you to get your books and support
          bookstores at the same time.
        </p>
      </div>
      <MoreInfo />
    </div>
  );
}
