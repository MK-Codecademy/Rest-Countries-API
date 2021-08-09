import React, { useState, useEffect } from "react";
import BorderTag from "./BorderTag";
import "./BorderTagList.css";


function BorderTagList({borders}) {

  return (
    <div className="borderTagContainer">
      <p className="title">Border Countries: </p>
      <div className="borderTagList">
        {borders !== undefined && borders.map(country => <BorderTag borderCountry={country} />)}
      </div>
    </div>
  );
}

export default BorderTagList;
