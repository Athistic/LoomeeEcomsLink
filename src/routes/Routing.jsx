import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./AllRoutes";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        {/* .map() ensures we always have a returned value*/}
        {AllRoutes.map((entry, index) => {
          return <Route key={index} exact={entry.ex} path={entry.path} element={entry.comp} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
