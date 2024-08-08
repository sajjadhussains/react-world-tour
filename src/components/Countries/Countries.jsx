import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitCountries = (country) => {
    if (visitedCountries.find((c) => c.cca3 === country.cca3)) {
      alert("already visited");
    } else {
      const newCountry = [...visitedCountries, country];
      setVisitedCountries(newCountry);
    }
  };
  return (
    <div>
      <h1>Total Countries:{countries.length}</h1>
      <div>
        <h1>Visited Countries:{visitedCountries.length}</h1>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitCountries={handleVisitCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
