import React from "react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../firebase/FireBaseAuthHook";
import { useData } from "../firebase/FirebaseDataHook";
import NavBar from "../routes/NavBar";

export default function UserProfile() {
  const { RemoveProductFromCart, CurrentUser } = useAuth();
  const { Products } = useData();
  const [CART, setCART] = useState([]);

  useEffect(() => {
    console.log("curr:", CurrentUser);
    if (CurrentUser != null && CurrentUser.cart !== undefined && CurrentUser.cart !== null && CurrentUser.cart.length > 0) {
      setCART(CurrentUser.cart);
    }
    if (CurrentUser !== null && CurrentUser.cart !== undefined && CurrentUser.cart !== null && CurrentUser.cart.length !== CART.length) {
      console.log("Something changed lets show it");
    }
  }, [CurrentUser]);

  useEffect(() => {
    // console.log("prods:", Products, CurrentUser);
    let arr = [];

    if (CurrentUser !== null) {
      if (CurrentUser.cart !== null && CurrentUser.cart !== undefined) {
        if (Products !== null && Products !== undefined) {
          // console.log("Ok we have info lets go on with setup", CurrentUser);
          CurrentUser.cart.map((entry, index) => {
            // console.log("ENTRY", entry);
            if (Products[entry.main]) {
              if (Products[entry.main][entry.sub]) {
                if (Products[entry.main][entry.sub].products) {
                  //For those using index please do the following:
                  let prods = Object.values(Products[entry.main][entry.sub].products);
                  // prods[entry.id];
                  console.log("PRODS", entry, prods[entry.id], prods);
                  if (prods[entry.id]) {
                    console.log("???", prods[entry.id]);
                    arr.push({
                      prod: prods[entry.id],
                      cart: entry,
                      index
                    });
                  }
                }
              }
            }
          });
          console.log("ARR", arr);
          setCART(arr);
        }
      }
    }
  }, [Products]);

  function RunRemove(entry) {
    console.log("???Remove??", entry);
    //Firebase function
    // prods[entry.id];
    // console.log(CurrentUser.uid, entry.prod.id);
    RemoveProductFromCart(CurrentUser.uid, entry.index);
  }

  function DisplayCart() {
    if (CurrentUser && Products && CART && CART.length > 0) {
      return (
        <table className="dashBoard">
          {CART.map((entry, index) => {
            return (
              <tr key={index}>
                <td>
                  <img style={{ width: "100px", height: "100px" }} src={entry?.prod?.images ? entry.prod.images : ""} alt="broken"></img>
                </td>
                <td>{entry?.prod?.name}</td>
                <td>{entry?.prod?.desc}</td>
                <td>{entry?.prod?.price}</td>
                <td>{entry?.cart?.quantity}</td>
                <td></td>
                <td>
                  <button
                    onClick={() => {
                      RunRemove(entry);
                    }}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      );
    }
  }
  return (
    <div className="UserProfileContainer">
      <NavBar />
      <h1 className="UserProfileHeader">Dashboard</h1>
      {DisplayCart()}
    </div>
  );
}
