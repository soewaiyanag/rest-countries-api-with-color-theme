import React, { useContext, useState, useEffect } from "react";
import CountryContext from "../CountryContext";
import Card from "./Card";

const Main = () => {
  const countries = useContext(CountryContext);
  return (
    <main>
      {countries &&
        countries.map((country) => {
          return <Card country={country} />;
        })}
    </main>
  );
};

export default Main;
