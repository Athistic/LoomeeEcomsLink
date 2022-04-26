import React from "react";
import masterCard from "../assets/images/masterCard.png";
import visa from "../assets/images/visa.webp";
import paypal from "../assets/images/paypal.png";

export default function ProductDescFooter() {
  return (
    <footer className="ProductFooter">
      <p className="ProductFooterPara">Supported payment methods</p>
      <div className="creditCards">
        <img src={masterCard} className="Mastercard" height="100px" width="150" style={{ marginLeft: "500px" }}></img>
        <img src={visa} height="100px" width="150" style={{ marginLeft: "10px" }}></img>
        <img src={paypal} height="100px" width="150" style={{ marginLeft: "10px" }}></img>
      </div>
    </footer>
  );
}
