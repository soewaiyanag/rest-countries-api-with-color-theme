import React from "react";
import Nav from "./components/Nav";
import { CountryContextProvider } from "./CountryContext";
import { Outlet } from "react-router-dom";
import { FilterProvider } from "./FilterContext";
import { SearchProvider } from "./SearchContext";
const App = () => {
  return (
    <CountryContextProvider>
      <SearchProvider>
        <FilterProvider>
          <Nav />
          <Outlet />
        </FilterProvider>
      </SearchProvider>
    </CountryContextProvider>
  );
};

export default App;
