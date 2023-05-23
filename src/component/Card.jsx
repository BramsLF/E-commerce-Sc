import { useContext } from "react";
import { useContextCar } from "../hooks/useContextCar";

const Card = (product) => {
  const context = useContext(useContextCar);

  const showProduct = (productDetail) => {
    context.openProductDitail();
    context.setProductShow(productDetail);
    context.closeCheckOutMenu();
  };

  const addProductCar = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCarProducts([...context.carProducts, productData]);
    context.openCheckOutMenu();
    context.closeProductDitail();
  };

  const renderIcon = (id) => {
    const isInCar =
      context.carProducts.filter((product) => product.id === id).length > 0;

    return isInCar ? (
      <button className="bg-gray-500 text-white border border-gray-600 px-1 font-novecento text-center text-sm font-light rounded-md hover:bg-gray-300 duration-700">
        Agregado
      </button>
    ) : (
      <button className="border border-gray-500 px-1 font-novecento text-center text-sm font-light rounded-md hover:bg-gray-200 duration-700"
      onClick={(event)=> addProductCar(event, product.product)} >
        Agregar+
      </button>
    );
  };

  return (
    <div
      className="bg-white rounded-md cursor-pointer w-56 h-80 shadow-md"
      onClick={() => showProduct(product.product)}
    >
      <figure className="relative mb-2 m-auto h-56">
        <span className="absolute bottom-0 left-0 bg-white rounded-md px-3 py-0.5 text-xs font-novecento font-light opacity-70 m-1">
          {product.product.category.name}
        </span>
        <img
          className="w-full object-cover m-auto rounded-t-md"
          src={product.product.images}
          alt="product image"
        />
      </figure>
      <section className="mb-auto h-1/5">
        <p className="font-raleway px-2 text-base">
          <span>{product.product.title}</span>
        </p>
        <div className="flex justify-between p-2">
          <span className="font-novecento text-lg font-bold">
            ${product.product.price}
          </span>
          {renderIcon(product.product.id)}
        </div>
      </section>
    </div>
  );
};

export default Card;
