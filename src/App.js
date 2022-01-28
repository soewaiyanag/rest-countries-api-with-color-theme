import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { CountryContextProvider } from "./CountryContext";
import { Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <CountryContextProvider>
      <div>
        <Nav />
        <Outlet />
      </div>
    </CountryContextProvider>
  );
};

export default App;
