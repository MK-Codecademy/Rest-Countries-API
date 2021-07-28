import React from 'react';
import './App.css';

import Header from '../Header/Header';
import SearchFilterWrapper from '../SearchFilterWrapper/SearchFilterWrapper';
import CountryCard from '../CountryCard/CountryCard';




function App() {
  return (
  <div className="container">
    <h1>Codecademy MK Chapter</h1>
    <p>A lot of busy people chipping in to build a better future</p>
    <br />
    <Header />
    <SearchFilterWrapper />
    <CountryCard />
   </div>
  );
}

export default App;
