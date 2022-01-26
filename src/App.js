import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import { CountryContextProvider } from "./CountryContext";
const App = () => {
  return (
    <CountryContextProvider>
      <div
        className="
      font-nunito
      bg-neutral-50
      dark:bg-dark-blue-200
      text-dark-blue-300
      dark:text-white
    "
      >
        <Nav />
        <Header />
        <Main />
      </div>
    </CountryContextProvider>
  );
};

export default App;
