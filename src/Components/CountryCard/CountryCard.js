import React from "react";
import Card from "@material-ui/core/Card";
import styles from "./CountryCard.module.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function CountryCard({ country }) {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {country.country}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Population: - ${country.population}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Capital City - ${country.capital}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Region - ${country.region}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
