import useDebounce from "@/hooks/useDebounce";
import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../SearchingBar";
import { AIRPORTS } from "@/lib/airport";

const LocationInput = ({ title }) => {
  const { info, setInfo } = useContext(SearchContext);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState(AIRPORTS);
  const [showModal, setShowModel] = useState(false);

  const debouncedSearch = useDebounce(search);

  const handleOnFocus = () => {
    setShowModel(true);
  };

  const handleOnBlur = () => {
    setShowModel(false);
  };

  const handleLocation = (loc) => {
    if ((title = "Where from?")) {
      setInfo({ ...info, from: loc });
    } else {
      setInfo({ ...info, to: loc });
    }
    setShowModel(false);
  };

  useEffect(() => {
    // setIsLoading(true);
    // fetch("")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setLocations(data);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => console.log(error));
    // setLocations(AIRPORTS);
  }, [debouncedSearch]);

  return (
    <div className='relative'>
      <input
        onChange={(e) => setSearch(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={title}
        type='text'
        placeholder={title}
      />

      {showModal &&
        locations.map((location) => (
          <div
            key={location.id}
            className='text-sm text-black cursor-pointer hover:bg-gray-200 p-4'
            onClick={() => handleLocation(location.name)}
          >
            {location.name}
          </div>
        ))}
    </div>
  );
};

export default LocationInput;
