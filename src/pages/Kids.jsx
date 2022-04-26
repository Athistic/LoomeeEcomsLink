import React, { useState } from "react";
import Description7 from "./Description7";
import Description8 from "./Description8";
import Description9 from "./Description9";
export default function Kids() {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);
  const SelectKids1 = () => {
    setShow(true);
    setNumber(7);
  };

  const SelectKids2 = () => {
    setShow(true);
    setNumber(8);
  };

  const SelectKids3 = () => {
    setShow(true);
    setNumber(9);
  };
  return (
    <div>
      <div className="kids-grid-container">
        {!show ? <button onClick={SelectKids1} className="book7"></button> : null}
        {!show ? <button onClick={SelectKids2} className="book8"></button> : null}
        {!show ? <button onClick={SelectKids3} className="book9"></button> : null}

        {show && number == 7 ? <Description7 /> : null}
        {show && number == 8 ? <Description8 /> : null}
        {show && number == 9 ? <Description9 /> : null}
      </div>
    </div>
  );
}
