import React, { useState } from "react";
import Description4 from "./Description4";
import Description5 from "./Description5";
import Description6 from "./Description6";
export default function Educational() {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);

  const SelectEducational1 = () => {
    setShow(true);
    setNumber(4);
  };
  const SelectEducational2 = () => {
    setShow(true);
    setNumber(5);
  };
  const SelectEducational3 = () => {
    setShow(true);
    setNumber(6);
  };
  return (
    <div>
      <div className="educational-grid-container">
        {!show ? <button onClick={SelectEducational1} className="book4"></button> : null}
        {!show ? <button onClick={SelectEducational2} className="book5"></button> : null}
        {!show ? <button onClick={SelectEducational3} className="book6"></button> : null}

        {show && number == 4 ? <Description4 /> : null}
        {show && number == 5 ? <Description5 /> : null}
        {show && number == 6 ? <Description6 /> : null}
      </div>
    </div>
  );
}
