const CountryData = (props) => {
  const { country } = props;
  const { name, flags, population, area } = country;

  return (
    <div>
      <p1>{name.common}</p1>
    </div>
  );
};

export default CountryData;
