import { useState } from "react";

function Button({ text }: { text: string }) {
  const [isHovered, setHovered] = useState(false);
  const handleMouse = () => setHovered(!isHovered);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      onClick={handleClick}
      className={`w-40 h-11 absolute top-[68%] left-1/2 transform -translate-x-1/2 -translate-y-1/4  p-4 rounded flex justify-center items-center ${
        isHovered ? "bg-[#C83A10]" : "bg-white"
      } rounded-xl text-black`}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
      <img src="\assets\images\icon-add-to-cart.svg" />
      {count}
    </button>
  );
}

export default Button;
