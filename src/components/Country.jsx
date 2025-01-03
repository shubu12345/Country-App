import { useEffect, useState } from "react";
import "./Country.css";
const Country = () => {
  const countryName = new URLSearchParams(window.location.search).get("name");
  // console.log(countryName);
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
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
          svg: data.flags.svg,
          languages: Object.values(data.languages).join(", "),
          currencies: Object.values(data.currencies)
            .map((currencies) => currencies.name)
            .join(", "),
          border: [],
        });
        if (!data.borders) {
          data.borders = [];
        }
      });
  }, []);

  return (
    <>
      <main>
        <div className="country-details-container">
          <span className="back-button">
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          <div className="country-details">
            <img src={countryData.svg} alt={countryData.name} />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: </b>
                  <span className="native-name">{countryData.native}</span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">{countryData.population}</span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">{countryData.region}</span>
                </p>
                <p>
                  <b>Sub Region: </b>
                  <span className="sub-region">{countryData.subregion}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="capital">{countryData.capital}</span>
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  <span className="top-level-domain"></span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span className="currencies">{countryData.currencies}</span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span className="languages">{countryData.languages}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Country;
