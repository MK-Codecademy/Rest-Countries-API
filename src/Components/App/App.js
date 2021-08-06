import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";

// import components
import Header from "../Header/Header";
import SearchFilterWrapper from "../SearchFilterWrapper/SearchFilterWrapper";
import CountryCardList from "../CountryCardList/CountryCardList";

import { fetchData } from "../../requests/fetchData";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import CountryDetailPage from "../CountryDetailPage/CountryDetailPage";
import Example from "../../Examples/example"

function App() {
  const [allCountries, setAllCountries] = useState(null);

  useEffect(() => {
    fetchData("https://restcountries.eu/rest/v2/all").then((res) =>
      setAllCountries(res)
    );
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <div>
              <BackToTopButton />
              <SearchFilterWrapper />
              {allCountries && <CountryCardList allCountries={allCountries} />}
            </div>
          </Route>
          <Route exact path="/:country">
            <CountryDetailPage /> 
          </Route>
          <Route exact path="/example/example">
            <Example /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
