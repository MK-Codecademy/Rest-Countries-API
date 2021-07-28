import React from 'react';
import './CountryCardList.css';

import CountryCard from '../CountryCard/CountryCard';

// import test data - will be replaced when API call is functional
import { testCountries } from '../../test-data';

export default function CountryCardList(props)   {
    return(
      <div className="wrapper border">
        <p>I would like to contain the list of all the country cards</p>
        {testCountries.map(country => <CountryCard />)}
      </div>
    )
    }