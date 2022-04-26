import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useData } from "../firebase/FirebaseDataHook";
import ProductDescription from "./ProductDescription";
import Description1 from "./Description1";
import Description2 from "./Description2";
import Description3 from "./Description3";

// Sub Cat display

export default function CategoryView({ cat }) {
  const { Products } = useData();
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);

  const [subCats, setsubCats] = useState([]);
  const [subcat, setsubcat] = useState(null);

  const [prods, setprods] = useState([]); // products <  subcat < cat

  let navigation = useNavigate();

  useEffect(() => {
    setUp();
  }, []);

  // Sub cat setup
  function setUp() {
    console.log("subcats", cat, Products[cat]);
    setsubCats(Object.keys(Products[cat]));
  }

  // Products object set up
  function setUp2(sub) {
    console.log("products ", cat, subcat, Products[cat][sub]?.products);
    setprods(Object.values(Products[cat][sub].products));
  }

  function handleChange(stringSub) {
    setShow(true);
    console.log(cat, "subcat", stringSub);
    setsubcat(stringSub);
    setUp2(stringSub);
  }

  return (
    <div className="catergoryDisplay">
      {/* SUBCAT VIEW  */}
      {!show && subCats
        ? subCats.map((stringSubCat) => (
            <button
              onClick={() => {
                handleChange(stringSubCat);
              }}
              className={stringSubCat}>
              {stringSubCat}
            </button>
          ))
        : null}

      {/* PRODUCTS IN SUBCAT */}
      {show && prods
        ? prods.map((prod, index) => (
            <button
              className="sub-btn"
              onClick={() => {
                console.log("prod", prod);
                // navigate to a product info page
                navigation(`prod/${cat}/${subcat}/${index}`);
              }}>
              <img src={prod.images} width="300" height="300" style={{ position: "relative", marginLeft: "-6px", top: "-2px" }}></img>

              <br></br>

              <br></br>
            </button>
          ))
        : null}
    </div>
  );
}
