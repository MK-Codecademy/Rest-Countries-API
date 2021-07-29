import React from 'react';
import Card from '@material-ui/core/Card';
import styles from "./CountryCard.module.css"

export default function CountryCard({country})   {
    return  (

        <Card className={styles.card}>
            <h2 className='countryTitle'>{country.country}</h2>
            <p>{`Population: - ${country.population}`}</p>
            <p>{`Capital City ${country.capital}`}</p>
            <p>{`Region - ${country.region}`}</p>
        </Card>
    )
}