import React from "react";
import "./CountryDetailsShimmer.css";

export default function CountryDetailsShimmer() {
  return (
    <div className="country-details shimmer">
      <div className="flag"></div>
      <div className="details-text-container">
        <h1 className="title"></h1>
        <div className="">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
