import React, { useEffect, useState } from "react";
import styles from "./CountryCardList.module.css";
import CountryCard from "../CountryCard/CountryCard";
import Grid from "@material-ui/core/Grid";
import { fetchCountries} from "../../requests/Api"
import { useSelector } from "react-redux";

export default function CountryCardList(props) {

  const filters = useSelector(state => state.filters)
  const [countries, setCountries] = useState([])
  const [filteredCountriesArray, setFilteredCountriesArray] = useState([])
  
  /* use effect on redux filters, update filteredCountries array. if array is empty, set filtered countries to all countries.
  use filter to return if filtered country is selected true or false. if true it returns the country to the new 
  filteredCountriesArray.
  */
  useEffect(() => {
    const includesRegion = (region) => {
      return filters[region.region.toLowerCase()] 
    }
    const filteredCountries = countries.filter(includesRegion)
    if (filteredCountries.length > 0) {
      setFilteredCountriesArray(filteredCountries)
    } else {
      setFilteredCountriesArray(countries)
    }

  },[filters])

  const getRequest = async () => {
    const response = await fetchCountries()
    if(response.length > 0 ) {
      setCountries(response)
      setFilteredCountriesArray(response)
    }
  }

  useEffect(() => {
    try{
      getRequest()
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <div className="wrapper body">
          <Grid container spacing={3}>
          {filteredCountriesArray.map((country) => (
            <Grid item xs={3} className={styles.grid}>
              <CountryCard country={country} key={country.population} />
            </Grid>
          )) }
        </Grid>
    </div>
  );
}
