import { DessertCard } from "./DessertCard";
import { ShoppingCart } from "./Cart";

import desserts from "./assets/data.json";

function App() {
  return (
    <div className="bg-[#FCF8F5] flex justify-center gap-10 p-10 w-screen h-screen">
      <div className="flex flex-col  items-start ml-15">
        <div>
          <h6 className="p-5 font-redhattext font-extrabold text-4xl">
            Desserts
          </h6>
        </div>
        <div className="grid grid-cols-3 ml-5 gap-5">
          {desserts.map((dessert, index) => (
            <DessertCard
              key={index}
              image={dessert.image.desktop}
              title={dessert.category}
              itemName={dessert.name}
              price={dessert.price}
            />
          ))}
        </div>
      </div>

      <div className="w-[25%]">
        <ShoppingCart
          itemName=""
          quantity={0}
          single_price={0}
          total_price={0}
        />
      </div>
    </div>
  );
}

export default App;
