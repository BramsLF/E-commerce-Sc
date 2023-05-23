import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="w-80 flex items-center border border-black rounded-md m-2">
      <div className="flex justify-between w-full">
        <p className="w-full flex flex-col justify-start px-6 py-2">
          <span className="font-raleway ">01/02/2023</span>
          <span className="font-raleway ">{totalProducts} Articulos</span>
        </p>
        <p className="w-full flex items-center justify-end px-6 py-2">
          <span className="font-novecento text-xl px-2">${totalPrice}</span>
          <ChevronDoubleRightIcon className="h-6 w-6 text-gray-950 cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
