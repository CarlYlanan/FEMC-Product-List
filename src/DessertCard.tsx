import Button from "./Add_to_cart";
import { AddToCart } from "./Shopping_Cart";

export const DessertCard = ({
  image,
  title,
  itemName,
  price,
}: {
  image: string;
  title: string;
  itemName: string;
  price: number;
} & AddToCart) => {
  return (
    <div className="flex flex-col relative">
      <img src={image} className="w-60 h-60 rounded-md" />
      <p className="mt-5">{title}</p>
      <p className="font-bold">{itemName}</p>
      <p className="text-[#D88462]">${price}</p>
      <Button />
    </div>
  );
};
