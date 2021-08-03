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
      <Header />
      <SearchFilterWrapper />
      {allCountries && <CountryCardList allCountries={allCountries} />}
    </div>
  );
}

export default App;
