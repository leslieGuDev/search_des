"use client";

import React, { createContext, useState } from "react";
import TravelerDropdown from "./TravelerDropdown";
import ClassDropdown from "./ClassDropdown";

const searchingInfo = {
  travelers: {
    adults: 2,
    kids: 0,
    infants: 0,
  },
  tier: "Economy",
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
      <div className='flex flex-between p-4 gap-8'>
        <TravelerDropdown />
        <ClassDropdown />
      </div>
    </SearchContext.Provider>
  );
};

export default SearchingBar;
