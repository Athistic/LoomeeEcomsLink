import React, { useState } from "react";
import { useEffect } from "react";
import { useData } from "../firebase/FirebaseDataHook";
import ProductUploads from "./admin/ProductUploads";
import myImage from "../assets/images/book2.jpg";
import Aladdin from "../assets/images/book8.jpg";
import NavBar from "../routes/NavBar";
import { useNavigate } from "react-router-dom";
import { RoutesObj } from "../routes/AllRoutes";
import { useAuth } from "../firebase/FireBaseAuthHook";
import ProductDescFooter from "../components/ProductDescFooter";

export default function ProductDescription() {
  const { Products } = useData();
  const { AddProductToCart, CurrentUser } = useAuth();
  const [count, setCount] = useState(0);
  const [FinalProduct, setFinalProduct] = useState(null);
  const nav = useNavigate();
  const myArr = [];
  const [items, setItems] = useState("");

  // const handleItems = () => {
  //   myArr.push(FinalProduct);
  //   console.log(myArr);///Remove this section
  // };

  useEffect(() => {
    setUp();
  }, []);

  useEffect(() => {
    console.log("???", CurrentUser);
  }, [CurrentUser]);

  useEffect(() => {
    setUp();
  }, [window.location.pathname]);

  function setUp() {
    //  use the url to backtrack all of the info http://localhost:3000/prod/Hard%20copies/Educational/0
    //http://localhost:3000/prod/e-books/Educational/0

    let path = window.location.pathname;
    let pathSplitted = path.split("/");
    let cat = pathSplitted[pathSplitted.length - 3].replace("%20", " ");
    let subcat = pathSplitted[pathSplitted.length - 2].replace("%20", " ");
    let prod = pathSplitted[pathSplitted.length - 1].replace("%20", " ");
    let semifinal = Products[cat][subcat];
    let final = Object.values(semifinal?.products)[prod];

    console.log("Single item name ", final.name, final);
    if (final !== undefined || final !== null) {
      final.id = prod;
      setFinalProduct(final);

      console.log(path, pathSplitted, cat, subcat, prod, semifinal, final);
    }
  }

  function AddToCart() {
    if (CurrentUser !== null && CurrentUser !== undefined) {
      console.log("Adding to cart here", CurrentUser);
      //Old cart values from our db connected to this user
      let old = CurrentUser.cart;
      console.log("OLD", old);

      let newOrder = {
        main: FinalProduct.mainCat,
        sub: FinalProduct.subCat,
        id: FinalProduct.id,
        quantity: 1 //hard code or get value from user input think about counter lesson 1
      };

      //User has an existing cart and it does possibly contain other products
      if (old !== null && old !== undefined) {
        old.push(newOrder);
        console.log("old Added", old);
        //Firebase function
        AddProductToCart(CurrentUser.uid, old)
          .then((res) => {
            console.log("YAY");
            window.alert("Added to cart");
          })
          .catch((err) => {});

        //User has an empty cart or cleared out existing cart either way no info is contained in the cart of the user
      } else {
        //Mo cart yet so make one

        let cart = [];
        cart.push(newOrder);
        console.log("new added", cart);

        // ..Firebase update call
        AddProductToCart(CurrentUser.uid, cart)
          .then((res) => {
            console.log("YAY");
            window.alert("Added to cart");
          })
          .catch((err) => {
            console.log("Error", err);
          });
      }
    } else {
      // to let user redirect self
      window.alert("Please log in to add to cart");

      //redirect programmatically
      let con = window.confirm("Please log in to add to cart");
      if (con) {
        nav(RoutesObj.sign_in.path);
      }
    }
  }

  return (
    <div className="prod-mainContainer">
      <NavBar />
      <div className="prod-description-title" style={{ textAlign: "center" }}>
        <i>{FinalProduct !== null ? FinalProduct.name : "SORRY"}</i>
      </div>

      {/* <div className="book1-description-container"></div> */}
      {/* <div></div> */}
      {/* Div Responsible for changing image */}
      <div className="prodDisplay">
        <div className="prod-description-paragraph-container">
          <p className="prod-description-paragraph">
            Price:{FinalProduct !== null ? "R" + FinalProduct.price : "SORRY"}
            <br></br>
            Description:{FinalProduct !== null ? FinalProduct.desc : "SORRY"}
            <br />
            Stock Level:{FinalProduct !== null ? FinalProduct.stockLevel : "SORRY"}
            <br></br>
            <div style={{ marginLeft: "-52%", marginTop: "-10%" }}>{FinalProduct !== null ? <img src={FinalProduct.images} height="300px" width="300px"></img> : "SORRY"}</div>
          </p>
        </div>
        <button
          className="prod-cart"
          onClick={() => {
            AddToCart();
          }}>
          Add to cart
        </button>
      </div>
      <ProductDescFooter />
    </div>
  );
}
