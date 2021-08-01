import React from "react";
import styles from "./CountryCardList.module.css";
import Paper from "@material-ui/core/Paper";
import CountryCard from "../CountryCard/CountryCard";
import Grid from "@material-ui/core/Grid";
import flag from "../../images/flag.jpg"

// import test data - will be replaced when API call is functional
import { testCountries } from "../../test-data";

export default function CountryCardList({countries}) {
  return (
    <div className="wrapper ">
          <Grid container spacing={3}>
          {countries.map((country) => (
            <Grid item xs={3} className={styles.grid}>
              <CountryCard country={country} key={country.population} />
            </Grid>
          ))}
        </Grid>
    </div>
  );
}
