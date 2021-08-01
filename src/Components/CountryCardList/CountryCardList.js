import React, { useEffect, useState } from "react";
import styles from "./CountryCardList.module.css";
import Paper from "@material-ui/core/Paper";
import CountryCard from "../CountryCard/CountryCard";
import Grid from "@material-ui/core/Grid";
import flag from "../../images/flag.jpg"
import { fetchCountries} from "../../requests/Api"
import { testCountries } from "../../test-data";
import { useSelector } from "react-redux";




export default function CountryCardList(props) {

  const filters = useSelector(state => state.filters)
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    console.log(filters)
  },[])

  const getRequest = async () => {
    const response = await fetchCountries("united kingdom")
    if(response.length > 0 ) {
      setCountries(response)
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
          {countries.map((country) => (
            <Grid item xs={3} className={styles.grid}>
              <CountryCard country={country} key={country.population} />
            </Grid>
          )) }
        </Grid>
    </div>
  );
}
