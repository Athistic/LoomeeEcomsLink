import React from "react";

export default function backButton({ showElements }) {
  return (
    <div>
      <button className="back-btn" onClick={() => showElements()}>
        back
      </button>
    </div>
  );
}
