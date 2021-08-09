import React, { useState, useEffect } from "react";
import BorderTag from "./BorderTag";
import "./BorderTagList.css";


function BorderTagList({borders}) {
  
  return (
    <div className="borderTagList">
      <p><strong>Border Countries: </strong></p>
      {borders.map(country => <BorderTag borderCountry={country}/>)}
    </div>
  );
}

export default BorderTagList;
