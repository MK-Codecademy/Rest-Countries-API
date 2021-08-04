import React, { useState, useEffect } from "react";
import "./App.css";

// import components
import Header from "../Header/Header";
import SearchFilterWrapper from "../SearchFilterWrapper/SearchFilterWrapper";
import CountryCardList from "../CountryCardList/CountryCardList";

import { fetchData } from "../../requests/fetchData";
import BackToTopButton from "../BackToTopButton/BackToTopButton";

function App() {
  const [allCountries, setAllCountries] = useState(null);

  useEffect(() => {
    fetchData("https://restcountries.eu/rest/v2/all").then((res) =>
      setAllCountries(res)
    );
  }, []);

  return (
    <div className="container">
      <Header />
      <BackToTopButton />
      <SearchFilterWrapper />
      {allCountries && <CountryCardList allCountries={allCountries} />}
    </div>
  );
}

export default App;
