"use client";

import React, { createContext, useState } from "react";
import TravelerDropdown from "./dropdowns/TravelerDropdown";
import ClassDropdown from "./dropdowns/ClassDropdown";
import LocationInput from "./locations/LocationInput";

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
      <div className='flex justify-between'>
        <LocationInput title='Where from?' />
        <LocationInput title='Where to?' />
      </div>
    </SearchContext.Provider>
  );
};

export default SearchingBar;
