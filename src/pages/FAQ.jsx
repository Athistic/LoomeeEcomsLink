import React from "react";
import MoreInfo from "../components/MoreInfo";

import NavBar from "../routes/NavBar";

export default function FAQ() {
  return (
    <div className="FAQMainContainer">
      <NavBar />

      <div className="FAQDisplay">
        <h1 style={{ color: "black", marginLeft: "50px" }}>FAQs</h1>
        <div className="FAQContainer">
          <h3>What is Athistic Golden Services?</h3>
          <p>
            Athistic Golden Services is is an online bookstore with a mission to financially support local, independent bookstores. We believe that bookstores are essential to a healthy
            culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.
            <h3>Is Athistic Golden Services a physical bookstore?</h3>
            Athistic Golden Services itself is not a physical store and does not purchase, print, publish, or warehouse books. Athistic Golden Services acts as a purveyor of new books
            (distributed solely through Ingram) by linking online shoppers with their favorite local vendors in order to traffic book profits toward indie booksellers with their preservation
            in mind.
            <h3>Do you sell audiobooks?</h3>
            At this present moment in time we don't sell Audio books,however we are looking to expand
          </p>
        </div>
      </div>
      <MoreInfo />
    </div>
  );
}
