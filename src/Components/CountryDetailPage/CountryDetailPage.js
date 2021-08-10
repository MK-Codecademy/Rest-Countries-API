import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./CountryDetailPage.css";
import { useDispatch } from 'react-redux'
import { updateSearch } from '../../features/searchSlice';

// import components

import { fetchData } from "../../requests/fetchData";
import BackButton from "../BackButton/BackButton";
import CountryInfo from "../CountryInfo/CountryInfo";
import BorderTagList from "../BorderTags/BorderTagList";
import Flags from "../Flags/Flags";

function CountryDetailPage() {
  const dispatch = useDispatch();
  const [countryData, setCountryData] = useState();
  const { country } = useParams(); // this is the alpha2Code property from the country data
  const [borders, setBorders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // reset search state so when user goes back, they get all countries
    dispatch(updateSearch(''));

    fetchData(`https://restcountries.eu/rest/v2/alpha/${country}`).then((res) => {
      setCountryData(res);
      return res.borders
    }).then(borders => {
      if (borders.length > 0) {
        fetchData(`https://restcountries.eu/rest/v2/alpha?codes=${borders.join(';')}`).then((res) => {
          setBorders(res);
      })
      }
    }).then(() => {
      setLoaded(true)
    })
  }, [country]);


  return (
    <div className="container">
      <BackButton />
      {loaded && 
        <div className="countryDetailWrapper">  
          <Flags countryData={countryData} />
          <div className="infoAndBorderWrapper">
            <CountryInfo countryData={countryData} />
            <BorderTagList borders={borders} />
          </div>
        </div>
      }
    </div>
  );
}

export default CountryDetailPage;
