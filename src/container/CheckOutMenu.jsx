import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { useContextCar } from "../hooks/useContextCar";
import OrderCard from "../component/OrderCard";
const CheckOutMenu = () => {
  const context = useContext(useContextCar);

  const handleDelete = (id) => {
    const filteredProduct = context.carProducts.filter(product => product.id != id)
    context.setCarProducts(filteredProduct)
  }

  return (
    <aside
      className={`${
        context.checkOutMenuOpen ? "flex" : "hidden"
      } w-[24rem] h-screen-80px top-16 flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-novecento font-md font-bold">Mi Orden</h2>
        <XMarkIcon
          className="h-6 w-6 text-gray-950 cursor-pointer"
          onClick={() => context.closeCheckOutMenu()}
        />
      </div>
      <div className="px-6 overflow-y-scroll">
        {context.carProducts.map((product) => (
        <OrderCard
          kye={product.id}
          id={product.id}
          title={product.title}
          imageURL={product.images}
          price={product.price}
          handleDelete={handleDelete}
        />
      ))}
      </div>
      
    </aside>
  );
};

export default CheckOutMenu;
