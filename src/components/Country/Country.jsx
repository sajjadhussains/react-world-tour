import { useState } from "react";
import "./Country.css";
import CountryDetails from "../CountryDetails/CountryDetails";
const Country = (props) => {
  const { country, handleVisitCountries } = props;
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    setVisited(!visited);
    console.log(visited);
  };
  console.log(handleVisitCountries);
  return (
    <div className={`country-container ${visited ? "visited" : "non-visited"}`}>
      <h1> {name?.common}</h1>
      <img src={flags.png} alt="" />
      <p>population:{population}</p>
      <p>area:{area}</p>
      <button onClick={() => handleVisitCountries(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={handleClick}>{visited ? "Visited" : "going"}</button>
      {visited ? "I have visited" : "I will visit"}
      <hr />
      <CountryDetails {...props}></CountryDetails>
    </div>
  );
};

export default Country;
