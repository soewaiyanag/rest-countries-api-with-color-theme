import React, { useContext } from "react";
import CountryContext from "../CountryContext";
import SearchContext from "../SearchContext";
import FilterContext from "../FilterContext";
import Header from "./Header";
import Card from "./Card";

const Main = () => {
  const countries = useContext(CountryContext);
  const { filter } = useContext(FilterContext);
  const { search } = useContext(SearchContext);

  return (
    <>
      <Header />
      <main className="p-8 grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countries &&
          countries
            .filter(
              (country) =>
                country.region.includes(filter) &&
                country.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((country) => {
              return <Card country={country} key={country.alpha3Code} />;
            })}
      </main>
    </>
  );
};

export default Main;
