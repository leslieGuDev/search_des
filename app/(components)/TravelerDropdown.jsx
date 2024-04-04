import React, { useContext, useState } from "react";
import { SearchContext } from "./SearchingBar";
import QuantityChanger from "./QuantityChanger";
import DropdownButton from "./DropdownButton";

const TravelerDropdown = () => {
  const { info, setInfo } = useContext(SearchContext);
  const [showModal, setShowModel] = useState(false);
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
      <DropdownButton
        handleDropdown={handleModal}
        title={`${travelerQuantity} travellers`}
      />
      {showModal && (
        <div className='bg-white absolute top-0 left-0 rounded-lg border-2 pt-10 pb-5 px-5 flex flex-col gap-8 text-lg z-10'>
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
