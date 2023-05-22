import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { useContextCar } from "../hooks/useContextCar";
const CheckOutMenu = () => {
  const context = useContext(useContextCar);

  return (
    <aside
      className={`${
        context.checkOutMenuOpen ? "flex" : "hidden" } w-[24rem] h-screen-80px top-16 flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-novecento font-md font-bold">Mi Orden</h2>
        <XMarkIcon
          className="h-6 w-6 text-gray-950 cursor-pointer"
          onClick={() => context.closeCheckOutMenu()}
        />
      </div>
    </aside>
  );
};

export default CheckOutMenu;