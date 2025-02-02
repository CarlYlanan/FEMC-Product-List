export const ShoppingCart = ({
  itemName,
  quantity,
  single_price,
  total_price,
}: {
  itemName: string;
  quantity: number;
  single_price: number;
  total_price: number;
}) => {
  if (!itemName || quantity === 0) {
    return (
      <div className="flex flex-col bg-white w-96">
        <h6 className="font-redhattext font-extrabold text-2xl mb-5 text-[#C13C18] p-5">
          Your Cart
        </h6>
        <img
          src="assets\images\illustration-empty-cart.svg"
          className="w-60 h-60 rounded-md mx-auto"
        />
        <p className="text-gray-500 ">Your added items will appear here</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <h6 className="font-redhattext font-extrabold text-2xl mb-5">
        Your Cart
      </h6>
      <div>
        <p className="mt-5">{itemName}</p>
        <div className="flex items-center gap-2">
          <p className="text-[#C9755B]">{quantity}x</p>
          <p className="mt-5">@${single_price.toFixed(2)}</p>
          <p className="mt-5 font-bold">${total_price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
