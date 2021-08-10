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
              {country.name}
            </Typography>
            <Typography variant="body2" color="white" component="p">
              Population: <span>{(country.population).toLocaleString()}</span>
            </Typography>
            <Typography variant="body2" color="white" component="p">
              Region: <span>{country.region}</span>
            </Typography>
            <Typography variant="body2" color="white" component="p">
              Capital: <span>{country.capital}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
