import React from "react";
import "./Place.css";

function Place({ Imagelink, Name, Price }) {
  return (
    <div>
      <p>Starting at Rs{Price} per person</p>
    </div>
  );
}

export default Place;
