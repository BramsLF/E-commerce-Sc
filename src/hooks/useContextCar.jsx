import { createContext, useState } from "react";

const useContextCar = createContext();

const ContextCarProvider = ({ children }) => {
  //Contador en el bolso de compras
  const [count, setCount] = useState(0);
  
  //Apertura del aside de la orden
  const [productOpen, setProductOpen] = useState(false);
  const openProductDitail = () => setProductOpen(true);
  const closeProductDitail = () => setProductOpen(false);

    //Apertura del aside de la orden
    const [ checkOutMenuOpen , setCheckOutMenuOpen] = useState(false);
    const openCheckOutMenu = () => setCheckOutMenuOpen(true);
    const closeCheckOutMenu = () => setCheckOutMenuOpen(false);

  //Muestra los detalles de los productos en el aside de orden, muestra el estado de uno 
  const [ productShow, setProductShow ] = useState({})

  //Acumula los produtos seleccioados en el aside de orden
  const [ carProducts, setCarProducts ] = useState([])

  return (
    <useContextCar.Provider
      value={{
        count,
        setCount,
        openProductDitail,
        closeProductDitail,
        productOpen,
        productShow,
        setProductShow,
        carProducts,
        setCarProducts,
        checkOutMenuOpen,
        setCheckOutMenuOpen
      }}
    >
      {children}
    </useContextCar.Provider>
  );
};

export { ContextCarProvider, useContextCar };
