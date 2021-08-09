import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./CountryDetailPage.css";

// import components

import { fetchData } from "../../requests/fetchData";
import BackButton from "../BackButton/BackButton";
import CountryInfo from "../CountryInfo/CountryInfo";
import BorderTagList from "../BorderTags/BorderTagList";
import Flags from "../Flags/Flags";

function CountryDetailPage() {
  const [countryData, setCountryData] = useState();
  const { country } = useParams(); // this is the alpha2Code property from the country data
  const [borders, setBorders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchData(`https://restcountries.eu/rest/v2/alpha/${country}`).then((res) => {
      setCountryData(res);
      return res
    }).then(res => {
      fetchData(`https://restcountries.eu/rest/v2/alpha?codes=${res.borders.join(';')}`).then((res) => {
        if (res.ok) {
          setBorders(res);
        }
      })
    }).then(() => {
      setLoaded(true)
    })
  }, [country]);


  return (
    <div className="container">
      <BackButton />
      {loaded && 
          <Flags countryData={countryData} />
          <CountryInfo countryData={countryData} />
          <BorderTagList borders={borders} />
        </div>
      )}
    </div>
  );
}

export default CountryDetailPage;
