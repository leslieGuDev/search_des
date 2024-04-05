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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFocus = () => {
    setShowModel(true);
    setSearch("");
  };

  const handleBlur = () => {
    setShowModel(false);
    setSearch(title === "Where from?" ? info.from : info.to);
  };

  const handleLocation = (loc) => {
    if (title === "Where from?") {
      setInfo({ ...info, from: loc });
    } else {
      setInfo({ ...info, to: loc });
    }
    setShowModel(false);
  };

  useEffect(() => {
    setIsLoading(true);
    debouncedSearch.length === 1
      ? setLocations([])
      : fetch(`http://localhost:5555/destinations/${debouncedSearch}`)
          .then((res) => res.json())
          .then((data) => {
            Array.isArray(data)
              ? setLocations(data.slice(0, 4))
              : setLocations(data.destinations.slice(0, 4));
            setIsLoading(false);
          })
          .catch((error) => console.log(error));
  }, [debouncedSearch]);

  return (
    <div className='relative max-w-48'>
      <input
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={title}
        type='text'
        placeholder={title}
        value={search}
      />
      {!isLoading &&
        showModal &&
        locations.map((location) => (
          <div
            key={location.id}
            className=' text-sm text-black cursor-pointer hover:bg-gray-200 p-4'
            onMouseDown={() => handleLocation(location.name)}
          >
            {location.name}-{location.continent}
          </div>
        ))}
    </div>
  );
};

export default LocationInput;
