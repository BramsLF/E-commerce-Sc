import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { useContextCar } from "../hooks/useContextCar";
import { Link } from "react-router-dom";
import OrderCard from "../component/OrderCard";
import totalPrice from "../utils";
const CheckOutMenu = () => {
  const context = useContext(useContextCar);

  const handleDelete = (id) => {
    const filteredProduct = context.carProducts.filter(
      (product) => product.id != id
    );
    context.setCarProducts(filteredProduct);
  };

  const handleCheckout = () => {
    const orderAdd = {
      date: "01/02/2023",
      products: context.carProducts,
      totalProducts: context.carProducts.length,
      totalPrice: totalPrice(context.carProducts),
    };

    context.setOrder([...context.order, orderAdd]);
    context.setCarProducts([]);
  };

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
      <div className="px-6 overflow-y-scroll flex-1">
        {context.carProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageURL={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center">
          <span className="font-novecento font-light text-lg">Total:</span>
          <span className="font-novecento font-black text-lg">
            ${totalPrice(context.carProducts)}
          </span>
        </p>
        <Link to={"/my-order/last"}>
          <button
            className="w-full bg-slate-900 text-white rounded-md font-novecento p-4 my-2 hover:bg-slate-800"
            onClick={() => handleCheckout()}
          >
            Mi Compra
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckOutMenu;
