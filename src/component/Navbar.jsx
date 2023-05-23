import { ShoppingBagIcon } from "@heroicons/react/24/solid"; 
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useContextCar } from "../hooks/useContextCar";
import sircraft from "../assets/logo/Sir-Craft.png";

const Navbar = () => {

  const context =useContext(useContextCar);
  const activeStyle = "underline underline-offset-4 py-2 px-3 font-novecento font-semibold";
  const defaultStyle ="py-2 px-3 hover:bg-white transition-colors duration-500 font-novecento font-ligth hover:text-gray-900 transition-colors duration-500";

  return (
    <nav className="fixed z-10 bg-blend-color-burn top-0 flex justify-between items-center w-full h-16 py-5 px-8 text-sm font-light backdrop-filter backdrop-blur-md backdrop-saturate-80 bg-white bg-opacity-70">
      <ul className="flex items-center h-full">
        <li>
          <NavLink to="/">
            <img src={sircraft} alt="SirCraft" className="w-16 object-contain" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? defaultStyle : isActive ? activeStyle : defaultStyle
            }
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ropa"
            className={({ isActive, isPending }) =>
              isPending ? defaultStyle : isActive ? activeStyle : defaultStyle
            }
          >
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/muebles"
            className={({ isActive, isPending }) =>
              isPending ? defaultStyle : isActive ? activeStyle : defaultStyle
            }
          >
            Muebles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/juguetes"
            className={({ isActive, isPending }) =>
              isPending ? defaultStyle : isActive ? activeStyle : defaultStyle
            }
          >
            Juguetes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/otros"
            className={({ isActive, isPending }) =>
              isPending ? defaultStyle : isActive ? activeStyle : defaultStyle
            }
          >
            Otros
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center">
        <li className="py-2 px-3 font-raleway">bramslf@sircraft.com</li>
        <li>
          <NavLink
            to="/my-order"
            className={({ isActive, isPending }) =>
              isPending ? defaultStyle : isActive ? activeStyle : defaultStyle
            }
          >
            Mi orden
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive, isPending }) =>
              isPending ? defaultStyle : isActive ? activeStyle : defaultStyle
            }
          >
            Mi Cuenta
          </NavLink>
        </li>
        <li className="flex justify-center items-center">
          <ShoppingBagIcon className="h-6 w-6 text-gray-950 m-1" />{context.count}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
