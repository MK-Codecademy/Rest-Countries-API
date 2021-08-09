import {Link} from 'react-router-dom'

function BorderTag({ borderCountry }) {
  
  return (
    <Link to={`/Rest-Countries-API/${borderCountry.alpha2Code}`}>
      <div className="borderTag dmElement corners">
        <p>{borderCountry.name}</p>
      </div>
    </Link>
  );
}

export default BorderTag;
