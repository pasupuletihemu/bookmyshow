import React from "react";

function Bookmyshow(myshow) {
  return (
    <div className="align" style={{ display: "inline-block" }}>
      <img src={myshow.Imagelink} alt=""></img>
      <h3>{myshow.Moviename}</h3>
      <p>{myshow.Type}</p>
    </div>
  );
}

export default Bookmyshow;
