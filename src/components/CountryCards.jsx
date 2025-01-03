import { Link } from "react-router";

const CountryCards = ({ svg, name, population, region, capital, data }) => {
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
      <img src={svg} alt={name + "Flag"} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population:</b> {population}
        </p>
        <p>
          <b>Region:</b> {region}Antarctic
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCards;
