import React, { createContext, useState, useEffect } from "react";

const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let URLAll = "https://restcountries.com/v2/all";

    fetch(URLAll)
      .then((response) => response.json())
      .then((value) => {
        setCountries(value);
      });
  }, []);

  return (
    <CountryContext.Provider value={countries}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
