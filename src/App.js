import React from "react";
import Nav from "./components/Nav";
import { CountryContextProvider } from "./CountryContext";
import { Link, Outlet } from "react-router-dom";
import { FilterProvider } from "./FilterContext";
const App = () => {
  return (
    <CountryContextProvider>
      <FilterProvider>
        <div>
          <Nav />
          <Outlet />
        </div>
      </FilterProvider>
    </CountryContextProvider>
  );
};

export default App;
