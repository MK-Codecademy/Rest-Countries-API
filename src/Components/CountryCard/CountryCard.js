import React from 'react';
import './CountryCard.css';
import Card from '@material-ui/core/Card';

export default function CountryCard({country})   {
    return  (

        <Card className="card border">
            <h2 className='countryTitle'>{country.country}</h2>
            <p>{`Population: - ${country.population}`}</p>
            <p>{`Capital City ${country.capital}`}</p>
            <p>{`Region - ${country.region}`}</p>
        </Card>
    )
}