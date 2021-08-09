import "./Flags.css";

function Flags({ countryData }) {
  return (
    <div className="flagWrapper">
      <img
        className="flagImage"
        src={countryData.flag}
        alt={`${countryData.name} flag`}
      />
    </div>
  );
}

export default Flags;
