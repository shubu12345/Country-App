import { useEffect, useState } from "react";
import "./Country.css";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import { Link, useLocation, useParams } from "react-router";

const Country = () => {
  const params = useParams();
  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [NotFound, setNotFound] = useState(false);

  const { state } = useLocation();

  function UpdateCountryDetails(data) {
    fetch(`https:restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          native: Object.values(data.name.nativeName)[0].common,
          img: data.flags.svg,
          languages: Object.values(data.languages).join(", "),
          currencies: Object.values(data.currencies)
            .map((currencies) => currencies.name)
            .join(", "),
          borders: [],
          // fetch(`https://restcountries.com/v3.1/alpha/${borders}`)
        });
      });
    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((borders) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${borders}`)
          .then((res) => res.json())
          .then(([data]) => data.name.common);
      })
    ).then((borders) => {
      // console.log(borders);
      setTimeout(() =>
        setCountryData((previousState) => ({ ...previousState, borders }))
      );
    });
  }

  useEffect(() => {
    // other code
    if (state) {
      UpdateCountryDetails(state);
      return;
    }

    fetch(`https:restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        UpdateCountryDetails(data);
      })
      .catch((error) => {
        setNotFound(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (NotFound) {
    return <div>Incorrect Country</div>;
  }

  return countryData === null ? (
    <CountryDetailsShimmer />
  ) : (
    <>
      <main>
        <div className="country-details-container">
          <span className="back-button" onClick={() => window.history.back()}>
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          {countryData === null ? (
            <CountryDetailsShimmer />
          ) : (
            <div className="country-details">
              <img src={countryData.img} alt={`${countryData.name} flag`} />
              <div className="details-text-container">
                <h1>{countryData.name}</h1>
                <div className="details-text">
                  <p>
                    <b>Native Name: {countryData.native}</b>
                    <span className="native-name"></span>
                  </p>
                  <p>
                    <b>
                      Population:{" "}
                      {countryData.population
                        ? countryData.population.toLocaleString("en-IN")
                        : countryData.population}
                    </b>
                    <span className="population"></span>
                  </p>
                  <p>
                    <b>Region: {countryData.region}</b>
                    <span className="region"></span>
                  </p>
                  <p>
                    <b>Sub Region: {countryData.subregion}</b>
                    <span className="sub-region"></span>
                  </p>
                  <p>
                    <b>Capital: {countryData.capital?.join(", ")}</b>
                    <span className="capital"></span>
                  </p>
                  <p>
                    <b>Top Level Domain: {countryData.tld}</b>
                    <span className="top-level-domain"></span>
                  </p>
                  <p>
                    <b>Currencies: {countryData.currencies}</b>
                    <span className="currencies"></span>
                  </p>
                  <p>
                    <b>Languages: {countryData.languages}</b>
                    <span className="languages"></span>
                  </p>
                </div>
                {countryData.borders.length !== 0 && (
                  <div className="border-countries">
                    <b>Border Countries: </b>&nbsp;
                    {countryData.borders.map((border) => (
                      <Link key={border} to={`/${border}`}>
                        {border}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Country;
