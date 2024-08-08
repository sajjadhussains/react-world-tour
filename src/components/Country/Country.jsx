import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitCountries }) => {
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
      <button onClick={handleClick}>{visited ? "Visited" : "going"}</button>
      {visited ? "I have visited" : "I will visit"}
    </div>
  );
};

export default Country;
