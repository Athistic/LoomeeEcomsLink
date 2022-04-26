import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useData } from "../firebase/FirebaseDataHook";
import Description1 from "./Description1";
import Description2 from "./Description2";
import Description3 from "./Description3";

// Sub Cat display

export default function Novels({ cat }) {
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

  // const SelectNovel1 = () => {
  //   setShow(true);
  //   setNumber(1);
  // };

  // const SelectNovel2 = () => {
  //   setShow(true);
  //   setNumber(2);
  // };

  // const SelectNovel3 = () => {
  //   setShow(true);
  //   setNumber(3);
  // };

  return (
    <div className="novel-grid-container">
      {/* {!show ? <button onClick={SelectNovel1} className="book1"></button> : null}
      {!show ? <button onClick={SelectNovel2} className="book2"></button> : null}
      {!show ? <button onClick={SelectNovel3} className="book3"></button> : null} */}

      {/* SUBCAT VIEW  */}
      {!show && subCats
        ? subCats.map((stringSubCat) => (
            <button
              onClick={() => {
                handleChange(stringSubCat);
              }}
              className="book1">
              {stringSubCat}
            </button>
          ))
        : null}

      {/* PRODUCTS IN SUBCAT */}
      {show && prods
        ? prods.map((prod, index) => (
            <button
              onClick={() => {
                console.log("prod", prod);
                // navigate to a product info page
                navigation(`prod/${cat}/${subcat}/${index}`);
              }}
              className="book1">
              {prod.name}
            </button>
          ))
        : null}

      {/* {show && number == 1 ? <Description1 /> : null}
      {show && number == 2 ? <Description2 /> : null}
      {show && number == 3 ? <Description3 /> : null} */}

      {/* {show && number == 8 ? <Description8 /> : null}
      {show && number == 9 ? <Description9 /> : null} */}
    </div>
  );
}
