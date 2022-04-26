import React from "react";
import { useData } from "../firebase/FirebaseDataHook";

export default function Description1() {
  const { Products } = useData();

  //  use the url to backtrack all of the info http://localhost:3000/prod/Hard%20copies/Educational/0
  let path = window.location.pathname;
  let pathSplitted = path.split("/");
  let cat = pathSplitted[pathSplitted.length - 3].replace("%20", " ");
  let subcat = pathSplitted[pathSplitted.length - 2].replace("%20", " ");
  let prod = pathSplitted[pathSplitted.length - 1].replace("%20", " ");
  let semifinal = Products[cat][subcat];
  let final = Object.values(semifinal?.products)[prod];

  console.log(path, pathSplitted, cat, subcat, prod, semifinal, final);

  return (
    <div className="book1-mainContainer">
      <div className="book1-description-title">
        <i>THE WAR OF TWO QUEENS</i>
      </div>
      <div className="book1-description-container"></div>
      <div className="book1-description-paragraph-container">
        <p className="book1-description-paragraph">
          Price:R500
          <br />
          <i>
            Publisher ‏ : ‎ Blue Box Press (March 15, 2022) Language ‏ : ‎ English Paperback ‏ : ‎ 600 pages ISBN-10 ‏ : ‎ 1952457734 ISBN-13 ‏ : ‎ 978-1952457739 Item Weight ‏ : ‎ 1.72
            pounds Dimensions ‏ : ‎ 5.25 x 1.64 x 8 inches
          </i>
        </p>
      </div>
    </div>
  );
}
