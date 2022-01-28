import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { CountryContextProvider } from "./CountryContext";
import { Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <CountryContextProvider>
      <div
        className="
        font-nunito bg-neutral-50 dark:bg-dark-blue-200
      text-dark-blue-300 dark:text-white h-full
    "
      >
        <Nav />
        <Outlet />
      </div>
    </CountryContextProvider>
  );
};

export default App;
