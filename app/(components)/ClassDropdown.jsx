import React, { useContext, useState } from "react";
import { SearchContext } from "./SearchingBar";
import QuantityChanger from "./QuantityChanger";
import DropdownButton from "./DropdownButton";

const ClassDropdown = () => {
  const { info, setInfo } = useContext(SearchContext);
  const Tiers = ["Economy", "Premium Economy", "Business Class", "First Class"];
  const [showModal, setShowModel] = useState(false);

  const handleModal = () => {
    setShowModel((showModal) => !showModal);
  };

  const handleClick = (tier) => {
    setInfo({ ...info, tier });
    setShowModel(!showModal);
  };

  return (
    <>
      <div className='relative '>
        <DropdownButton handleDropdown={handleModal} title={`${info.tier}`} />
        {showModal && (
          <div
            className={`bg-white absolute top-0 left-0 rounded-lg border-2 flex flex-col z-10 `}
          >
            {Tiers.map((tier) => {
              return (
                <button
                  key={tier}
                  className={`hover:bg-gray-300 hover:text-black py-5 px-12 text-left  ${
                    tier === info.tier ? "bg-gray-400 text-white w-200" : ""
                  }`}
                  onClick={() => handleClick(tier)}
                >
                  {tier}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ClassDropdown;
