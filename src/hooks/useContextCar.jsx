import { createContext, useState, useEffect } from "react";

const useContextCar = createContext();

const ContextCarProvider = ({ children }) => {
  //Contador en el bolso de compras
  const [count, setCount] = useState(0);

  //Apertura del aside de la orden
  const [productOpen, setProductOpen] = useState(false);
  const openProductDitail = () => setProductOpen(true);
  const closeProductDitail = () => setProductOpen(false);

  //Apertura de la orden
  const [checkOutMenuOpen, setCheckOutMenuOpen] = useState(false);
  const openCheckOutMenu = () => setCheckOutMenuOpen(true);
  const closeCheckOutMenu = () => setCheckOutMenuOpen(false);

  //Muestra los detalles de los productos en el aside de orden, muestra el estado de uno
  const [productShow, setProductShow] = useState({});

  //Acumula los produtos seleccioados en el aside de orden
  const [carProducts, setCarProducts] = useState([]);

  //Orden del carrito
  const [order, setOrder] = useState([]);

  //Buscador
  const [searchValue, setSearchValue] = useState(null);

  //Get Products
  const [products, setProducts] = useState([]);

  //Get Products
  const [filterProducts, setFilterProducts] = useState([]);

  const API = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

   //Buscador por categorias
   const [ searchByCategory, setSearchByCategory ] = useState(null);

  const filterItemsByCategory = (products, searchByCategory) => {
    return products?.filter((product) =>
      product.category.id === searchByCategory
    );
  };
  
  const filterItemsHome = (products, searchValue) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const filterBy =(searchType, products, searchValue, searchByCategory)=>{
      if(searchType === "BY_TITLE") {
       return filterItemsHome(products, searchValue)
      }

      if(searchType === "BY_CATEGORY") {
        return filterItemsByCategory(products, searchByCategory)
       }

       if(searchType === "BY_TITLE_AND_CATEGORY") {
        return filterItemsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
       }

       if(!searchType) {
        return products
       }
  }

  useEffect(() => {
    if (searchValue && !searchByCategory) setFilterProducts(filterBy("BY_TITLE", products, searchValue, searchByCategory));
    if (!searchValue && searchByCategory) setFilterProducts(filterBy("BY_CATEGORY", products, searchValue, searchByCategory));
    if (searchValue && searchByCategory) setFilterProducts(filterBy("BY_TITLE_AND_CATEGORY", products, searchValue, searchByCategory));
    if (!searchValue && !searchByCategory) setFilterProducts(filterBy(null, products, searchValue, searchByCategory));
  }, [products, searchValue, searchByCategory]);

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
        openCheckOutMenu,
        closeCheckOutMenu,
        order,
        setOrder,
        products,
        setProducts,
        searchValue,
        setSearchValue,
        filterProducts,
        setSearchByCategory,
        searchByCategory
      }}
    >
      {children}
    </useContextCar.Provider>
  );
};

export { ContextCarProvider, useContextCar };
