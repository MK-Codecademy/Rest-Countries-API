import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./CountryDetailPage.css";

// import components

import { fetchData } from "../../requests/fetchData";
import BackButton from "../BackButton/BackButton";
import CountryInfo from "../CountryInfo/CountryInfo";

function CountryDetailPage() {
  const [countryData, setCountryData] = useState();
  const { country } = useParams(); // this is the alpha2Code property from the country data

  useEffect(() => {
    fetchData(`https://restcountries.eu/rest/v2/alpha/${country}`).then((res) =>
      setCountryData(res)
    );
  }, []);

  // as countryData is aquired async, we have to wait until it has finished fetching before we try to render the details. This is why we only render the <p> tag if countryData exists
  return (
    <div className="container">
      <BackButton />
      {countryData && <CountryInfo countryData={countryData} />}
    </div>
  );
}

export default CountryDetailPage;
