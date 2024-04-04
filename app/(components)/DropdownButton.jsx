import React from "react";

const DropdownButton = ({ title, handleDropdown }) => {
  return (
    <button
      className='rounded-lg p-2 hover:bg-gray-300 flex content-center '
      onClick={handleDropdown}
    >
      <div>{title}</div>
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
  );
};

export default DropdownButton;
