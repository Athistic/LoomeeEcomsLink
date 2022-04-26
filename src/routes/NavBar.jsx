import React from "react";
import { NavLink } from "react-router-dom";
import { AllRoutes, RoutesObj } from "./AllRoutes";
// import { Logout } from "../firebase/FirebaseAuth";
import { useEffect, useState } from "react/cjs/react.development";
// import { GetAuthState } from "../firebase/FirebaseAuth";
import { useAuth } from "../firebase/FireBaseAuthHook";

export default function NavBar() {
  const [currUserLocal, setCurrUserLocal] = useState(null);
  const { Logout, CurrentUser } = useAuth();

  useEffect(() => {
    console.log("???", currUserLocal);
    if (CurrentUser !== null && CurrentUser !== undefined) {
      setCurrUserLocal({ displayName: CurrentUser?.displayName, email: CurrentUser?.email, profileUrl: CurrentUser?.profileUrl, uid: CurrentUser?.uid, role: CurrentUser?.role });
    } else {
      setCurrUserLocal(null);
    }
  }, [CurrentUser]);

  //lifecycle hook for functional classes

  // useEffect(() => {
  //   GetAuthState()
  //     .then((value) => {
  //       //value is the returnUser we create in our promise here we read that value if it is " " we know user not logged in value.uid

  //       if (value && value.uid && value.uid.length > 0) {
  //         console.log("User is signed in and valid, value");
  //         setCurUser(value);
  //       } else {
  //         console.log("User is signed out and no longer valid,", value);
  //         setCurUser({ displayName: "", email: "", profileUrl: "", uid: "", role: "" });
  //       }
  //     })
  //     .catch((err) => {});
  // }, [GetAuthState()]);

  function NavOnAuth() {
    return AllRoutes.map((entry, index) => {
      if (currUserLocal !== null) {
        return (
          <React.Fragment key={index}>
            {entry.name === RoutesObj.sign_in.name || entry.name === RoutesObj.sign_up.name || entry.name === RoutesObj.forgot_pass.name || entry.name === RoutesObj.reset_pass.name ? (
              <React.Fragment key={index}></React.Fragment>
            ) : (
              <NavLink className="navItem" key={index} to={entry.path}>
                {entry.name}
              </NavLink>
            )}
          </React.Fragment>
        );
      } else {
        return (
          <NavLink className="navItem " key={index} to={entry.path}>
            {entry.name}
          </NavLink>
        );
      }
    });
  }

  return (
    <div>
      <nav className="site-nav">
        <ul className="group">
          {/* {AllRoutes.map((entry, index) => {
          return (
            <li key={index}>
              <NavLink to={entry.path}>{entry.name}</NavLink>
            </li>
          );
        })} */}

          {NavOnAuth()}

          {currUserLocal !== null && (
            <button
              onClick={() => {
                Logout();
              }}>
              Sign out
            </button>
          )}
        </ul>
      </nav>
      <div className="menuContainer">
        <button className="menu-btn" hidden={true}>
          Menu
        </button>
      </div>
    </div>
  );
}
