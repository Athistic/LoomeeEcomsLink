import React, { useState } from "react";
import { useData } from "../../firebase/FirebaseDataHook";
import { image1 } from "../../assets/images/book1.jpg";
import CategoryView from "../CategoryView";
import NavBar from "../../routes/NavBar";

//Choice how to gather input from admin user to save to the db this is your assignment

// Reusable code if possible for create and update

//const mainCat=["male","female","kids"]//select.option
//const mainCat=["shoes","shirts","dresses"]//select.option

// 3x input fields ===name,desc,price,stockLevel
//1x image upload==button,input

// saftety check only allow access to this role if role=== "admin"
//use useDate to hook to access all of the crud information
export default function ProductUploads() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [stockLevel, setStockLevel] = useState(0);

  const mainArr = ["Hard-cover", "E-books", "Paperback"];
  const [mainCat, setMainCat] = useState("");

  const subArr = ["Novels", "Educational", "Kids"];
  const [subCat, setSubCat] = useState("");

  // const imagesArr = ["hercules", "warOfTwoQueens", "tangledInYou", "theStepChild", "javaInANutshell", "accountPrinciples", "theLawOfContract", "peterPan", "aladdin"];
  const [images, setImages] = useState([]);

  const InputName = (e) => {
    setName(e.target.value);
  };

  const InputDesc = (e) => {
    setDesc(e.target.value);
  };

  const InputPrice = (e) => {
    setPrice(e.target.value);
  };

  const InputStockLevel = (e) => {
    setStockLevel(e.target.value);
  };

  let myObj = { name: name, desc: desc, price: price, stockLevel: stockLevel, images: images, mainCat: mainCat, subCat: subCat };

  const InputMain = (e) => {
    setMainCat(e.target.value);
  };

  const InputSub = (e) => {
    setSubCat(e.target.value);
  };

  const InputImage = (e) => {
    setImages(e.target.value);
    // setImages(images.push(pic));
  };

  const { CreateProduct } = useData();
  return (
    <div className="mainProductUploadsContainer">
      <NavBar />
      <div className="UploadsMainDisplay">
        <h1 className="mainProductUploadsHeader">Upload Inventory</h1>
        <div className="productUploadsContainer">
          <br></br>
          <form className="uploadForm">
            <select onChange={InputMain} className="mainCat" required={true}>
              <option value="">--Select main category--</option>
              {mainArr.map((entry, index) => {
                return (
                  <option key={index} value={entry}>
                    {entry}
                  </option>
                );
              })}
            </select>
            <select onChange={InputSub} className="subCat" required={true}>
              <option value="">--Select sub category--</option>
              {subArr.map((entry, index) => {
                return (
                  <option key={index} value={entry}>
                    {entry}
                  </option>
                );
              })}
            </select>
            <br></br>

            <label>Name:</label>
            <input className="Inputname" type="text" onChange={InputName} required={true}></input>
            <br></br>
            <label>Description:</label>
            <input className="InputDescription" type="text" onChange={InputDesc} required={true}></input>
            <br></br>
            <label>Price:</label>
            <input className="Inputprice" type="text" onChange={InputPrice} required={true}></input>
            <br></br>
            <label>Stock Level:</label>

            <input className="InputstockLevel" type="text" onChange={InputStockLevel} required={true}></input>
            <br></br>
            <label>Picture Link</label>
            <input type="text" onChange={InputImage} className="images"></input>

            <br></br>

            <label>Upload to site</label>
            <button className="cart-btn" onClick={() => CreateProduct(myObj)}>
              ADD
            </button>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  );
}
