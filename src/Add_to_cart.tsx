import { useState } from "react";

function AddToCartButton() {
  const [count, setCount] = useState(0);

  function handleClickIncrease() {
    setCount(count + 1);
  }

  function handleClickDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return count < 1 ? (
    <button
      className={`w-40 h-11 absolute top-[68%] left-1/2 transform -translate-x-1/2 -translate-y-1/4  p-4  flex justify-center items-center bg-white
      rounded-3xl text-black border border-black`}
      onClick={handleClickIncrease}
    >
      <img src="\assets\images\icon-add-to-cart.svg" />
      <p>Add To Cart</p>
    </button>
  ) : (
    <ActiveButton
      count={count}
      handleClickDecrease={handleClickDecrease}
      handleClickIncrease={handleClickIncrease}
    />
  );
}

export default AddToCartButton;

interface ActiveButtonProps {
  count: number;
  handleClickDecrease: () => void;
  handleClickIncrease: () => void;
}

export const ActiveButton = ({
  count,
  handleClickDecrease,
  handleClickIncrease,
}: ActiveButtonProps) => {
  return (
    <div className="w-40 h-11 absolute top-[68%] left-1/2 transform -translate-x-1/2 -translate-y-1/4  p-4  flex justify-center items-center bg-[#C83A10] rounded-3xl">
      <div className="flex justify-between w-full ">
        <button onClick={handleClickDecrease}>
          <img src="\assets\images\icon-decrement-quantity.svg" />
        </button>
        <p>{count}</p>
        <button onClick={handleClickIncrease}>
          <img src="\assets\images\icon-increment-quantity.svg" />
        </button>
      </div>
    </div>
  );
};
