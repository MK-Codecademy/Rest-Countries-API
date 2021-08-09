import BorderTag from "./BorderTag";
import "./BorderTagList.css";


function BorderTagList({borders}) {

  return (
    <div className="borderTagContainer">
      <p className="title">Border Countries: </p>
      <div className="borderTagList">
        {borders.map(country => <BorderTag borderCountry={country} key={country.alpha2Code} />)}
      </div>
    </div>
  );
}

export default BorderTagList;
