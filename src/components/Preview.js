import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import CountryContext from "../CountryContext";
import { PreviewLoader } from "../loaders";

const Preview = () => {
  const countries = useContext(CountryContext);
  const params = useParams();

  const getCountry = (alpha3Code) => {
    return (
      countries &&
      countries.find((country) => country.alpha3Code === alpha3Code)
    );
  };
  const country = getCountry(params.countryCode);
  return country ? (
    <div className="py-10 px-4 ">
      <Link to="/" className="btn flex items-center max-w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="inline-block mr-2"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        Back
      </Link>
      <div className="mt-10 pb-10 md:grid md:grid-cols-[40%_1fr] md:gap-5">
        <img
          src={country && country.flags.svg}
          id="flag"
          className="w-full"
          alt="flag"
        />

        <div>
          <h1 id="name" className="font-bold text-2xl my-6 md:mt-0">
            {country && country.name}
          </h1>

          <div className="space-y-8 md:grid md:grid-cols-2">
            <div className="space-y-2">
              <h2 className="font-semibold">
                Native Name: {country && country.nativeName}
                <span id="native-name" className="font-thin"></span>
              </h2>
              <h2 className="font-semibold">
                Population: {country && country.population}
                <span id="population" className="font-thin"></span>
              </h2>
              <h2 className="font-semibold">
                Region: {country && country.region}
                <span id="region" className="font-thin"></span>
              </h2>
              <h2 className="font-semibold">
                Sub Region:{country && country.subregion}
                <span id="sub-region" className="font-thin"></span>
              </h2>
              <h2 className="font-semibold">
                Capital:{country && country.capital}
                <span id="capital" className="font-thin"></span>
              </h2>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold">
                Top Level Domain: {country && country.topLevelDomain}
                <span id="top-level-domain" className="font-thin"></span>
              </h2>
              <h2 className="font-semibold">
                Currencies:{" "}
                <span id="currencies" className="font-thin">
                  {country.currencies &&
                    country.currencies.map((currency, index) => {
                      return index === 0 ? currency.name : `, ${currency.name}`;
                    })}
                </span>
              </h2>
              <h2 className="font-semibold">
                Languages:{" "}
                <span id="languages" className="font-thin">
                  {country.languages &&
                    country.languages.map((language, index) => {
                      return index === 0 ? language.name : `, ${language.name}`;
                    })}
                </span>
              </h2>
            </div>
          </div>

          <h1 className="mt-10 mb-4 text-lg font-semibold inline-block w-full md:w-fit">
            Border countries:
          </h1>
          <div id="border-countries" className="text-sm flex gap-4 flex-wrap">
            {country.borders
              ? country.borders.map((border) => (
                  <Link
                    className="btn"
                    to={`/${border}`}
                    key={"border" + border}
                  >
                    {border}
                  </Link>
                ))
              : "No borders"}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <PreviewLoader />
  );
};

export default Preview;
