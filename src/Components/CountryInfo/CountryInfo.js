import "./CountryInfo.css";


function CountryInfo({countryData}) {
  const currencyArray = [];
  countryData.currencies.forEach(el => currencyArray.push(el.name + ' (' + el.symbol + ')'));

  const languageArray = [];
  countryData.languages.forEach(el => languageArray.push(el.name))

  return (
    <div className="countryInfo">
      <h1>{countryData.name}</h1>
      <div>
        <p><strong>Native Name</strong>: {countryData.nativeName}</p>
        <p><strong>Population</strong>: {countryData.population.toLocaleString()}</p>
        <p><strong>Region</strong>: {countryData.region}</p>
        <p><strong>Sub Region</strong>: {countryData.subregion}</p>
        <p><strong>Capital</strong>: {countryData.capital}</p>
      </div>
      <div>
        <p><strong>Top Level Domain</strong>: {countryData.topLevelDomain}</p>
        <p><strong>Currencies</strong>: {currencyArray.join(', ')}</p>
        <p><strong>Languages</strong>: {languageArray.join(', ')}</p>
      </div>
    </div>
  );
}

export default CountryInfo;
