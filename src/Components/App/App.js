import React, { useState, useEffect } from 'react';
import './App.css';

// import components 
import Header from '../Header/Header';
import SearchFilterWrapper from '../SearchFilterWrapper/SearchFilterWrapper';
import CountryCardList from '../CountryCardList/CountryCardList';

import {fetchData} from '../../requests/fetchData'

function App() {
  const [allCountries, setAllCountries] = useState(null);

  useEffect(() => {
    fetchData('https://restcountries.eu/rest/v2/all')
      .then(res => setAllCountries(res))
  },[])

  return (
    <div className="container">
      <h1>Codecademy MK Chapter</h1>
      <p>A lot of busy people chipping in to build a better future</p>
      <br />
      <Header />
      <SearchFilterWrapper />
      {allCountries && <CountryCardList allCountries={allCountries} />}
    </div>
  );
}

export default App;
