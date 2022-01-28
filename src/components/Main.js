import React, { useContext, useState, useEffect } from "react";
import CountryContext from "../CountryContext";
import Header from "./Header";
import Card from "./Card";

const Main = () => {
  const countries = useContext(CountryContext);
  return (
    <React.Fragment>
      <Header />
      <main className="p-8 grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countries &&
          countries.map((country) => {
            return <Card country={country} key={country.alpha3Code} />;
          })}
      </main>
    </React.Fragment>
  );
};

export default Main;
