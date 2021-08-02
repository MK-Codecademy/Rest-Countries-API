import React, { useEffect, useState } from "react";
import styles from "./CountryCardList.module.css";
import CountryCard from "../CountryCard/CountryCard";
import Grid from "@material-ui/core/Grid";
import { fetchCountries} from "../../requests/Api"
import { useSelector } from "react-redux";
import removeAccents from "../../features/removeAccents"

export default function CountryCardList(props) {
  const search = useSelector(state => state.search);
  const filters = useSelector(state => state.filters);
  const [countries, setCountries] = useState([]);
  const [filteredCountriesArray, setFilteredCountriesArray] = useState([]);
  
  /* use effect on redux search and then filters to update filteredCountries array. 
  only apply the search paramaters and region filter if included, otherwise include all
  */
  useEffect(() => {
    // get number of region filters included
    let filterCount = 0;
    for (const region in filters) {
      if (filters[region]) {
        filterCount++;
      }
    }

    const includesRegion = country => filters[country.region.toLowerCase()];

    // if no search paramater included, display all countries
    let searchCountries = countries;
    if (search.value) {
      searchCountries = countries.filter(country => removeAccents(country.name.toLowerCase()).includes(search.value));
    }

    // if no region filter selected, include all regions
    if (filterCount === 0) {
      setFilteredCountriesArray(searchCountries);
    } else {
      const filteredCountries = searchCountries.filter(includesRegion);
      setFilteredCountriesArray(filteredCountries);
    }    
  },[filters, search])

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
