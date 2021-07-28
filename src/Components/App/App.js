import React from 'react';
import './App.css';

// import components 
import Header from '../Header/Header';
import SearchFilterWrapper from '../SearchFilterWrapper/SearchFilterWrapper';
import CountryCardList from '../CountryCardList/CountryCardList';


function App() {
  return (
    <div className="container">
      <h1>Codecademy MK Chapter</h1>
      <p>A lot of busy people chipping in to build a better future</p>
      <br />
      <Header />
      <SearchFilterWrapper />
      <CountryCardList />
    </div>
  );
}

export default App;
