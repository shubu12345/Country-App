import { useEffect, useState } from "react";
import CountryCards from "./CountryCards";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
const AllCountriesContainer = ({ query }) => {
  const [CountryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  return (
    <>
      {!CountryData.length ? (
        <CountryDetailsShimmer />
      ) : (
        <div className="countries-container">
          {CountryData.filter((country) =>
            country.name.common.toLowerCase().includes(query)
          ).map((country) => {
            return (
              <CountryCards
                key={country.name.common}
                name={country.name.common}
                svg={country.flags.svg}
                population={country.population.toLocaleString("en-IN")}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
export default AllCountriesContainer;
