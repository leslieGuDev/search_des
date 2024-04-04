import React, { useContext, useState } from "react";
import { SearchContext } from "./SearchingBar";
import QuantityChanger from "./QuantityChanger";

const TravelerDropdown = () => {
  const { info, setInfo } = useContext(SearchContext);
  const [showModal, setShowModel] = useState(false);
  const [travelers, setTravelers] = useState(info.travelers);
  const [adults, setAdults] = useState(info.travelers.adults);
  const [kids, setKids] = useState(info.travelers.kids);
  const [infants, setInfants] = useState(info.travelers.infants);

  let travelerQuantity = Object.values(info.travelers).reduce(
    (acc, cur) => acc + cur
  );

  const handleModal = () => {
    setShowModel((showModal) => !showModal);
  };

  const handleClear = () => {
    setAdults(info.travelers.adults);
    setKids(info.travelers.kids);
    setInfants(info.travelers.infants);
  };

  const handleDone = () => {
    setInfo({ ...info, travelers: { adults, kids, infants } });
    setShowModel(!showModal);
  };

  return (
    <div className='relative'>
      <button
        className='rounded-lg p-2 hover:bg-gray-300 flex content-center '
        onClick={handleModal}
      >
        <div>{travelerQuantity} travellers</div>
        <div className='flex justify-center content-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </button>
      {showModal && (
        <div className='bg-white absolute top-0 left-0 rounded-lg border-2 pt-10 pb-5 px-5 flex flex-col gap-5 text-lg '>
          <QuantityChanger
            title='Adults'
            setQuantity={setAdults}
            quantity={adults}
          />
          <QuantityChanger
            title='Children'
            setQuantity={setKids}
            quantity={kids}
          />
          <QuantityChanger
            title='Infants'
            setQuantity={setInfants}
            quantity={infants}
          />
          <hr />
          <div className='flex gap-2 justify-between'>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={handleDone}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelerDropdown;
