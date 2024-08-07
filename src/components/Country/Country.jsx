import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    setVisited(!visited);
    console.log(visited);
  };
  return (
    <div className="country-container">
      <h1> {name?.common}</h1>
      <img src={flags.png} alt="" />
      <p>population:{population}</p>
      <p>area:{area}</p>
      <button onClick={handleClick}>{visited ? "Visited" : "going"}</button>
      {visited ? "I have visited" : "I will visit"}
    </div>
  );
};

export default Country;
