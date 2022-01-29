import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("filter") || "");

  const handleFilter = (region) => {
    setFilter(region);
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <FilterContext.Provider value={{ filter, handleFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
