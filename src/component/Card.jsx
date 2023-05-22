import { useContext } from "react";
import { useContextCar } from "../hooks/useContextCar";

const Card = (product) => {
  const context = useContext(useContextCar);

  const showProduct = (productDetail) => {
    context.openProductDitail()
    context.setProductShow(productDetail)
  }

  const addProductCar = (productData) =>{
    context.setCount(context.count +1)
    context.setCarProducts([...context.carProducts, productData])
  }

  return (
    <div className="bg-white rounded-md cursor-pointer w-56 h-72 shadow-md"
    onClick={()=>showProduct(product.product)}>
      <figure className="relative mb-2 m-auto mt-2 h-48">
        <span className="absolute bottom-0 left-0 bg-white rounded-md px-3 py-0.5 text-xs font-novecento font-light opacity-70 m-1">
          {product.product.category.name}
        </span>
        <img
          className="h-full w-full object-contain m-auto rounded-t-md"
          src={product.product.images}
          alt="product image"
        />
      </figure>
      <section className="mb-auto h-1/5">
        <p className="font-raleway pt-1 px-2 text-lg">
          <span>{product.product.title}</span>
        </p>
        <div className="flex justify-between p-2">
          <span className="font-novecento text-lg font-bold">${product.product.price}</span>
          <button className="border border-gray-500 px-1 font-novecento text-center text-sm font-light rounded-md hover:bg-gray-200 duration-700"
          onClick={() => addProductCar(product.product) }>
            Agregar+
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card;
