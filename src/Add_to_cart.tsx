import { useState } from "react";

function Button({ text }: { text: string }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  function handleClickDecrease() {
    if (count > 0) {
      setCount(count - 1)
    };
  }



  return (
    <button
      className={`w-40 h-11 absolute top-[68%] left-1/2 transform -translate-x-1/2 -translate-y-1/4  p-4 rounded flex justify-center items-center ${
        (count > 0) ? "bg-[#C83A10]" : "bg-white"
      } rounded-xl text-black`}

    >
      <div className="flex justify-between w-full ">

      <button onClick={handleClickDecrease}>
        <img src="\assets\images\icon-decrement-quantity.svg"/>
      </button>

      <img src="\assets\images\icon-add-to-cart.svg" />
      <p>{count ?  `${count}` : 'Add to Cart'}</p>

        
      <button onClick={handleClick}>
        <img src="\assets\images\icon-increment-quantity.svg" />

      </button>

</div>

    </button>
  );
}

export default Button;
