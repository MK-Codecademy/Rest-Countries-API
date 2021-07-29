import React from "react";
import styles from "./CountryCardList.module.css";
import Paper from '@material-ui/core/Paper';
import CountryCard from "../CountryCard/CountryCard";

// import test data - will be replaced when API call is functional
import { testCountries } from "../../test-data";

export default function CountryCardList(props) {
  return (
    <div className="wrapper ">
      <Paper elevation={3} className={styles.countyCardWarpper}>
        <h1>{testCountries.length > 0 ? 'Countries' : ''}</h1>
        {testCountries.map((country) => (
          <CountryCard country={country} />
        ))}
      </Paper>
    </div>
  );
}
