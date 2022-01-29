import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = (e) => {
    let search = e.target.value;
    setSearch(search);
    if (search) {
      setSearchParams({ search });
    } else {
      setSearchParams({});
    }
  };

  return (
    <SearchContext.Provider value={{ search, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
