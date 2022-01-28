import React from "react";

const PreviewLoader = () => {
  return (
    <div className="py-10 px-4 ">
      <button id="back" className="btn flex items-center">
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
      </button>
      <div className="mt-10 pb-10 md:grid md:grid-cols-[40%_1fr] md:gap-5">
        <div className="w-80 h-[200px] bg-gray-500 animate-pulse"></div>
        <div>
          <h1 id="name" className="font-bold text-2xl my-6 md:mt-0">
            loading...
          </h1>

          <div className="space-y-8 md:grid md:grid-cols-2">
            <div className="space-y-2">
              <h2 className="font-semibold">
                Native Name:
                <span id="native-name" className="font-thin"></span>
              </h2>
              <h2 className="font-semibold">
                Population: loading...
                <span id="population" className="font-thin"></span>
              </h2>
              <h2 className="font-semibold">
                Region: loading...
                <span id="region" className="font-thin"></span>
              </h2>
              <h2 className="font-semibold">
                Sub Region: loading...
                <span id="sub-region" className="font-thin"></span>
              </h2>
              <h2 className="font-semibold">
                Capital: loading...
                <span id="capital" className="font-thin"></span>
              </h2>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold">
                Top Level Domain: loading...
                <span id="top-level-domain" className="font-thin"></span>
              </h2>
              <h2 className="font-semibold">
                Currencies: loading...
                <span id="currencies" className="font-thin"></span>
              </h2>
              <h2 className="font-semibold">
                Languages: loading...
                <span id="languages" className="font-thin"></span>
              </h2>
            </div>
          </div>

          <h1 className="mt-10 mb-4 text-lg font-semibold inline-block w-full md:w-fit">
            Border countries:
          </h1>
          <div
            id="border-countries"
            className="text-sm flex gap-4 flex-wrap"
          ></div>
        </div>
      </div>
    </div>
  );
};

export { PreviewLoader };
