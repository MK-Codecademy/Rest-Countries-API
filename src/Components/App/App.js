import React, { useState, useEffect } from 'react';
import './App.css';

// import components 
import Header from '../Header/Header';
import SearchFilterWrapper from '../SearchFilterWrapper/SearchFilterWrapper';
import CountryCardList from '../CountryCardList/CountryCardList';


function App() {
  const [allCountries, setAllCountries] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setAllCountries(data))
  })

  return (
    <div className="container">
      <h1>Codecademy MK Chapter</h1>
      <p>A lot of busy people chipping in to build a better future</p>
      <br />
      <Header />
      <SearchFilterWrapper />
      {allCountries && <CountryCardList countries={allCountries} />}
    </div>
  );
}

export default App;
