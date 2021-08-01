import React, { useEffect, useState } from "react";
import styles from "./CountryCardList.module.css";
import Paper from "@material-ui/core/Paper";
import CountryCard from "../CountryCard/CountryCard";
import Grid from "@material-ui/core/Grid";
import flag from "../../images/flag.jpg"
import { fetchCountries} from "../../requests/Api"

export default function CountryCardList(props) {

  const getRequest = async () => {
    const response = await fetchCountries("united kingdom")
    if(response.length > 0 ) {
      setCountries(response)
    }
    
  }

  const [countries, setCountries] = useState([])

  useEffect(() => {
    try{
      getRequest()
    } catch (error) {
      console.log(error)
    }
  
  console.log(`From useEffect ${countries}`)
  },[countries])

  return (
    <div className="wrapper body">
          <Grid container spacing={3}>
          {countries.map((country) => (
            <Grid item xs={3} className={styles.grid}>
              <CountryCard country={country} key={country.population} />
            </Grid>
          )) }
        </Grid>
    </div>
  );
}
