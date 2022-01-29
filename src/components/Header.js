import React, { useState, useContext, useRef } from "react";
import FilterContext from "../FilterContext";
import SearchContext from "../SearchContext";
import useClickOutside from "../hooks/onClickOutsite";

const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

const Filter = () => {
  const { handleFilter } = useContext(FilterContext);
  return (
    <ul
      className="top-16 absolute rounded-md shadow active:shadow-none
               dark:bg-dark-blue-100 w-56 py-2 animate-fadeIn"
    >
      {regions.map((region, index) => {
        return (
          <li
            className="px-6 py-1 transition-colors cursor-pointer bg-white hover:bg-gray-300 dark:hover:bg-dark-blue-200 dark:bg-dark-blue-100"
            key={"region" + index}
            onClick={() => {
              handleFilter(region === "All" ? "" : region);
            }}
          >
            {region}
          </li>
        );
      })}
    </ul>
  );
};

const Header = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { filter } = useContext(FilterContext);
  const { search, handleSearch } = useContext(SearchContext);
  const filterRef = useRef(null);

  useClickOutside(filterRef, () => {
    setShowFilter(false);
  });

  return (
    <React.Fragment>
      <aside className="mt-10 mb-5 md:flex md:justify-between">
        <div className="md:flex-1 md:max-w-lg transition-[outline] outline-1 focus-within:outline px-2 py-4 mx-8 rounded-md shadow dark:bg-dark-blue-100 flex gap-1 items-center">
          <label htmlFor="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="min-w-[2rem]"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </label>
          <input
            value={search}
            onChange={handleSearch}
            className="w-full font-medium outline-none bg-transparent text-dark-blue-300 dark:text-white placeholder:text-dark-blue-300 dark:placeholder:text-white"
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <div className="relative mx-8 mt-10 md:mt-0" ref={filterRef}>
          <button
            className="rounded-md shadow active:shadow-none dark:bg-dark-blue-100 w-56 
                      px-6 py-4
                      flex gap-2 items-center justify-between"
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            <span className="font-medium">
              {filter ? filter : "Filter by Region"}{" "}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="inline-block w-3 transition-transform"
              style={{
                transform: showFilter ? "rotate(180deg)" : "rotate(0deg)",
              }}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
          {showFilter ? <Filter /> : null}
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Header;
