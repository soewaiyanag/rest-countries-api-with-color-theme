import React from "react";
import { Link } from "react-router-dom";

const Card = ({ country }) => {
  return (
    <div className="bg-white shadow rounded-md overflow-hidden dark:bg-dark-blue-100">
      <Link to={country.alpha3Code}>
        <img
          src={country.flags.svg}
          alt="flag img"
          className="w-full aspect-video object-cover object-center cursor-pointer"
        />
      </Link>
      <div className="p-5 pb-10 space-y-0.5">
        <h1 className="font-bold text-xl mb-3">{country.name}</h1>
        <h2 className="font-semibold">
          Population:
          <span className="font-medium ml-2">
            {country.population ?? "unknown"}
          </span>
        </h2>
        <h2 className="font-semibold">
          Region:
          <span className="font-medium ml-2">
            {country.region ?? "unknown"}
          </span>
        </h2>
        <h2 className="font-semibold">
          Capital:
          <span className="font-medium ml-2">
            {country.capital ?? "unknown"}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Card;
