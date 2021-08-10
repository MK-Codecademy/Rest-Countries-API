import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import styles from "./CountryCard.module.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

export default function CountryCard({ country }) {

  return (
    <Link to={`/Rest-Countries-API/${country.alpha2Code}`}>
      <Card className={styles.card} key={country.name} className="corners dmElement">
        <CardActionArea className={styles.cardActionArea}>
          <div className={styles.flagDiv}>
            <CardMedia
              component="img"
              alt={`${country.name} flag`}
              height="150"
              src={country.flag}
              title="Flag"
            />
          </div>
          <CardContent key={country.population} className={styles.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              <strong>{country.name}</strong>
            </Typography>
            <Typography variant="body2" color="white" component="p">
              <strong>Population</strong>: {(country.population).toLocaleString()}
            </Typography>
            <Typography variant="body2" color="white" component="p">
              <strong>Region</strong>: {country.region}
            </Typography>
            <Typography variant="body2" color="white" component="p">
              <strong>Capital</strong>: {country.capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
