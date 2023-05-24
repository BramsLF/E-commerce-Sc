import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { useContextCar } from "../hooks/useContextCar";
const ProductDitail = () => {
  const context = useContext(useContextCar);

  return (
    <aside
      className={`${context.productOpen ? "flex" : "hidden" } w-[24rem] h-screen-80px top-16 flex flex-col fixed right-0 border border-gray-300 rounded-lg backdrop-blur-md bg-white bg-opacity-70`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-novecento font-md font-bold">Detalles</h2>
        <XMarkIcon
          className="h-6 w-6 text-gray-950 cursor-pointer"
          onClick={() => context.closeProductDitail()}
        />
      </div>
      <figure className="px-6">
        <img className="h-full w-full object-contain rounded-md" src={context.productShow.images} alt={context.productShow.title} />
      </figure>
      <p className=" flex flex-col p-6">
        <span className="font-novecento font-xl font font-black mb-2">${context.productShow.price}</span>
        <span className="font-raleway font-lg font-semibold">{context.productShow.title}</span>
        <span className="font-raleway font-sm font-light">{context.productShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDitail;
