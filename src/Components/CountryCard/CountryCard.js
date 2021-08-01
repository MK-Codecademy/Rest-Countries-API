import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import styles from "./CountryCard.module.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { useSelector } from 'react-redux'



export default function CountryCard({ country }) {


  const dark = useSelector(state => state.darkMode.value)

  return (
    <Card className={styles.card} className="corners dmElement">
      <CardActionArea className={styles.cardActionArea}>
        <CardMedia 
            className={styles.flagSize}
            component="img"
            alt={`${country.name} flag`}
            height="160"
            image={country.flag} 
            title="Flag" 
        />
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {country.name}
          </Typography>
          <p>{dark ? 'Dark Mode' : 'Light Mode'}</p>
          <Typography variant="body2" color="white" component="p">
            {`Population: ${country.population}`}
          </Typography>
          <Typography variant="body2" color="white" component="p">
            {`Capital City: ${country.capital}`}
          </Typography>
          <Typography variant="body2" color="white" component="p">
            {`Region: ${country.region}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
