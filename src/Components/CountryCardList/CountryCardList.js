import React from "react";
import styles from "./CountryCardList.module.css";
import Paper from "@material-ui/core/Paper";
import CountryCard from "../CountryCard/CountryCard";
import Grid from "@material-ui/core/Grid";

// import test data - will be replaced when API call is functional
import { testCountries } from "../../test-data";

export default function CountryCardList(props) {
  return (
    <div className="wrapper ">
      <Paper elevation={3} className={styles.countyCardWarpper}>
          {testCountries.length > 0 ? <h1>Countries</h1> : ""}
          <Grid container spacing={3}>
          {testCountries.map((country) => (
            <Grid item xs={3}>
              <CountryCard country={country} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}
