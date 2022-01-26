import React, { useContext, useState, useEffect } from "react";
import CountryContext from "../CountryContext";
import Card from "./Card";

const Main = () => {
  const countries = useContext(CountryContext);
  return (
    <main className="p-8 grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {countries &&
        countries.map((country) => {
          return <Card country={country} key={country.alpha3Code} />;
        })}
    </main>
  );
};

export default Main;
