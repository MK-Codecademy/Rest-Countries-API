import React, { useEffect, useState } from "react";
import styles from "./CountryCardList.module.css";
import CountryCard from "../CountryCard/CountryCard";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import removeAccents from "../../features/removeAccents"

export default function CountryCardList({allCountries}) {
  const search = useSelector(state => state.search);
  const filters = useSelector(state => state.filters);
  const [filteredCountriesArray, setFilteredCountriesArray] = useState(allCountries);
  
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

    // only filter by region if a region is selected
    let displayCountries = allCountries;
    if (filterCount !== 0) {
      displayCountries = displayCountries.filter(includesRegion);
    }    

    // only filter by search input if an input is present
    if (search.value) {
      displayCountries = displayCountries.filter(country => removeAccents(country.name.toLowerCase()).includes(search.value));
    }

    setFilteredCountriesArray(displayCountries)
  },[filters, search])



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
