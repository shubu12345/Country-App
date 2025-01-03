import React from "react";
import "./CountryDetailsShimmer.css";

export default function CountryDetailsShimmer() {
  return (
    <div className="country-details shimmer">
      <div className="flag"></div>
      <div className="details-text-container">
        <h1 className="title"> </h1>
        <div className="dd">
          <p className="dd"></p>
          <p className="dd"></p>
          <p className="dd"></p>
          <p className="dd"></p>
        </div>
      </div>
    </div>
  );
}
