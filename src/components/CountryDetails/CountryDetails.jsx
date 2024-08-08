import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
  return (
    <div>
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetails;
