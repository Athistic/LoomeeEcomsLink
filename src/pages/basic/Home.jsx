import React, { useState } from "react";
import NavBar from "../../routes/NavBar";
import graduate from "../../assets/images/graduates.jpg";
import Description1 from "../Description1";
import Novels from "../Novels";
import Educational from "../Educational";
import Kids from "../Kids";
import best from "../../assets/images/best.png";
import BackgroundButton from "../../reusable/BackButton";
import HomeFooter from "../../components/HomeFooter";
import { useEffect } from "react/cjs/react.development";
import { useData } from "../../firebase/FirebaseDataHook";
import CategoryView from "../CategoryView";
import image1 from "../../assets/images/book1.jpg";
import image2 from "../../assets/images/book2.jpg";
import image3 from "../../assets/images/book4.jpg";
import image4 from "../../assets/images/book9.jpg";

import image5 from "../../assets/images/book3.jpg";
import image6 from "../../assets/images/book5.jpg";
import image7 from "../../assets/images/book1.webp";
import image8 from "../../assets/images/book7.jpg";
import logo from "../../assets//images/yinyang.jpg";
import logo2 from "../../assets//images/logo.png";
import masterCard from "../../assets//images/masterCard.png";
import paypal from "../../assets//images/paypal.png";
import visa from "../../assets//images/visa.png";

import hachette from "../../assets//images/hachette.png";
import penguin from "../../assets//images/penguin.png";
import thomson from "../../assets//images/thomson.jpg";

import { NavLink } from "react-router-dom";
import { RoutesObj } from "../../routes/AllRoutes";
import MenuBar from "../../components/MenuBar";

//Main category display page and consuming of data

export default function Home(props) {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);

  const { Products } = useData();
  const [allInventory, setAllInventory] = useState([]);
  const [Mains, setMains] = useState([]);
  const [mainCatString, setmainCatString] = useState(null);
  // const [time, setTime] = useState(0);
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    SetUp();
  }, []);

  useEffect(() => {
    SetUp();
  }, [Products]);

  function SetUp() {
    if (Products) {
      let main = Object.keys(Products);
      console.log("???", main);
      setAllInventory(main);

      //Creating buttons for the main categories and attaching strings(StringCat) to the respective buttons of the same name
      let arr = [];
      main.forEach((stringCat) => {
        arr.push(
          <button onClick={() => handleClick(stringCat)} style={{ position: "relative" }} className={stringCat}>
            <span style={{ position: "absolute", top: 1, left: 30, backgroundColor: "black", fontSize: "22px", fontFamily: "monospace", color: "white" }}>{stringCat}</span>
          </button>
        );
      });
      setMains(arr);
    }
  }

  function handleClick(stringCat) {
    console.log("??", stringCat);
    setShow(true);
    setmainCatString(stringCat);
  }

  let x = setInterval(function () {
    let countDownDate = new Date("April 10, 2022 10:00:00");
    let now = new Date();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setCountDown(days + " days: " + hours + " hours " + minutes + " mins " + seconds + " secs");
    // console.log(countDown);

    if (distance < 0) {
      clearInterval(x);
      setCountDown("EXPIRED");
    }
  }, 1000);

  const BackTrack = () => {
    setShow(false);
  };
  return (
    <div className="HomeContainer">
      <NavBar />

      <div className="HomeContentContainer">
        <img src={logo} height="50" width="50" style={{ borderRadius: "50%", position: "absolute", top: 15, left: 100 }}></img>
        {!show ? (
          <div className="best">
            <img style={{ marginTop: 30 }} src={best} width={250} height={250}></img>
            <div className="best-sellers "></div>
            <div className="best1"></div>
            <div className="best2"></div>
            <div className="best3"></div>
            <br></br>
          </div>
        ) : null}

        <div className="grid-container ">
          {!show ? (
            <div className="side-bar">
              <p className="specials-para">
                HURRY and <span style={{ color: "black" }}>BEAT</span> THE CLOCK!,Buy any<span style={{ color: "black" }}>3</span>
                <span style={{ color: "black" }}>For</span> R400!
              </p>
              <div className="countDown">
                <div style={{ marginTop: 30 }}> {countDown}</div>
              </div>
              <div className="specials">
                <img src={image1} width="150" height="150" style={{ marginRight: 20 }}></img>
                <img src={image2} width="150" height="150"></img>
                <br></br>
                <img src={image3} width="150" height="150" style={{ marginRight: 20 }}></img>
                <img src={image4} width="150" height="150"></img>

                <img src={image5} width="150" height="150" style={{ marginRight: 20 }}></img>
                <img src={image6} width="150" height="150"></img>
                <br></br>
                <img src={image7} width="150" height="150" style={{ marginRight: 20 }}></img>
                <img src={image8} width="150" height="150"></img>
                <br></br>
                <img src={logo2} width="320" height="150" className="logo2"></img>
              </div>
            </div>
          ) : null}
          {!show ? (
            <div className="mainDisplay">
              <p className="companyName">
                <i>Athistic Golden Services</i>
              </p>
              <div className="">
                <div className="myButtons">
                  <div className="hands"></div>
                  {Mains.map((btn, index) => (
                    <React.Fragment key={index}>{btn}</React.Fragment>
                  ))}
                </div>
                <div className="commingSoon">
                  <p className="partners">Our associated partners</p>
                  <img src={hachette} className="hachette" width="200" height="100"></img>&nbsp; &nbsp;&nbsp; &nbsp;
                  <img src={penguin} width="200" className="pengiun" height="100"></img>&nbsp; &nbsp;
                  <img src={thomson} width="200" className="thomson" height="100"></img>&nbsp;
                </div>
                <p className="motto" style={{ marginLeft: "100px", marginTop: "500px", color: "yellow", fontSize: "20px" }}>
                  <em>
                    Athistic Golden Services,serving you with the
                    <br></br> best book services since 2007
                  </em>
                </p>
              </div>
            </div>
          ) : null}
        </div>
        {show ? (
          <BackgroundButton
            showElements={() => {
              BackTrack();
            }}
          />
        ) : null}

        <div>{show && mainCatString ? <CategoryView cat={mainCatString} /> : null}</div>
        <div className="moreInfoMain">
          <div className="moreInfo">
            <div className="moreInfoSub">
              <p style={{ color: "orange" }}>For more information about us please click on the following links:</p>

              <NavLink to={RoutesObj.FAQ.path}>Frequently Asked Question</NavLink>
              <br></br>
              <br></br>
              <NavLink to={RoutesObj.About.path}>Learn more about us</NavLink>
              <br></br>

              <NavLink to={RoutesObj.Contact.path}>How to contact us</NavLink>
              <br></br>
              <br></br>
              <p style={{ color: "white" }}>
                <i>Athistic Golden Services pty ltd</i>
              </p>
              <img src={masterCard} width="100px" height="100px"></img>
              <img src={visa} width="100px" height="100px"></img>
              <img src={paypal} width="100px" height="100px"></img>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}
/*{allInventory && allInventory.map((cat,index)=>{
  let path=RoutesObj.catsLanding.path;//Using hard coded value
  let pathCleaned=path.replace(":type",cat);
  console.log("PATHS:",cat,path,pathCleaned);

  return(
    <button key={index}className="Card" onclick={()=>navigate(`${pathCleaned}`)}>
    <img src="https://picsum.photos/seed/picsum/200/300" alt='broken'/>
    <h1>{cat}</h1>
    <button>
  );
})} */
