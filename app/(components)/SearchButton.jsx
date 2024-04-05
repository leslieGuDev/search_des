import React, { useState } from "react";

const AlterModal = ({ info, onClick }) => {
  const { from, to, start } = info;

  const ToastMessage = () => {
    if (from === "") return "Please select your departure airport";
    else if (to === "") return "Please select your destination";
    else if (to === from)
      return "Please check your search as the departure and destination points must be in different locations";
    else if (start === "") return "Please select your travel dates";
  };

  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 w-80 h-60  shadow rounded-lg '>
      <div className='h-2/3 flex justify-center text-center items-center text-lg w-full'>
        {ToastMessage()}
      </div>
      <hr />
      <button
        onClick={onClick}
        className='h-1/3 flex justify-center items-center text-lg w-full'
      >
        ok
      </button>
    </div>
  );
};

const SearchButton = ({ info }) => {
  const { from, to, start } = info;
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (from === "" || to === "" || start === "") {
      setShowModal(true);
    } else {
      fetch(`http://localhost:5555/searching`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      }).then((res) => {
        return res.json();
      });
    }
  };

  const handleDismiss = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-24 rounded max-h-10'
        onClick={handleClick}
      >
        Search
      </button>
      {showModal && <AlterModal onClick={handleDismiss} info={info} />}
    </div>
  );
};

export default SearchButton;
