import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import styles from "./CountryCard.module.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import flag from "../../images/flag.jpg"

export default function CountryCard({ country }) {
  return (
    <Card className={styles.card}>
      <CardActionArea className={styles.cardActionArea}>
        <CardMedia 
            component="img"
            alt="Flag"
            height="160"
            image={flag} 
            title="Flag" 
        />
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {country.country}
          </Typography>
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
