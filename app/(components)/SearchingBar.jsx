"use client";

import React, { createContext, useState } from "react";
import TravelerDropdown from "./TravelerDropdown";

const searchingInfo = {
  travelers: {
    adults: 2,
    kids: 0,
    infants: 0,
  },
  class: "Economy",
  from: "",
  to: "",
  start: "",
  end: "",
};

export const SearchContext = createContext(null);

const SearchingBar = () => {
  const [info, setInfo] = useState(searchingInfo);

  return (
    <SearchContext.Provider value={{ info, setInfo }}>
      <div className='flex flex-start p-4'>
        <TravelerDropdown />
      </div>
    </SearchContext.Provider>
  );
};

export default SearchingBar;
