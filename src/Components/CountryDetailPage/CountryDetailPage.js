import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./CountryDetailPage.css";

// import components

import { fetchData } from "../../requests/fetchData";
import BackButton from "../BackButton/BackButton";
import CountryInfo from "../CountryInfo/CountryInfo";
import BorderTagList from "../BorderTags/BorderTagList";


function CountryDetailPage() {
  const [countryData, setCountryData] = useState();
  const { country } = useParams(); // this is the alpha2Code property from the country data
  const [borders, setBorders] = useState();


  useEffect(() => {
    fetchData(`https://restcountries.eu/rest/v2/alpha/${country}`).then((res) => {
      setCountryData(res);

      if (res.borders.length > 0) {
        fetchData(`https://restcountries.eu/rest/v2/alpha?codes=${res.borders.join(';')}`).then((res) => {
          setBorders(res);
        })
      }
    });
  }, [country]);


  // as countryData is aquired async, we have to wait until it has finished fetching before we try to render the details. This is why we only render the <p> tag if countryData exists
  return (
    <div className="container">
      <BackButton />
      {borders && 
        <div> 
          <CountryInfo countryData={countryData} />
          <BorderTagList borders={borders} />
        </div>
      }
    </div>
  );
}

export default CountryDetailPage;
