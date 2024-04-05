import React from "react";

const QuantityChanger = ({ title, setQuantity, quantity }) => {
  const decrease = () => {
    if (title === "Adults" && quantity === 1) setQuantity(1);
    else if (quantity === 0) setQuantity(0);
    else setQuantity((quantity) => quantity - 1);
  };

  const increase = () => {
    if (quantity === 9) setQuantity(9);
    else setQuantity((quantity) => quantity + 1);
  };

  return (
    <div className='flex justify-between text-2xl'>
      <div className='pr-6'>{title}</div>
      <div className='flex justify-between gap-2'>
        <button onClick={decrease}>-</button>
        <div className='w-10 text-center'>{quantity}</div>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default QuantityChanger;
