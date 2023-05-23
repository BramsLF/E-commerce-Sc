import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { useContextCar } from "../hooks/useContextCar";
import { Link, useParams } from "react-router-dom";
import LayOut from "../container/layout";
import OrderCard from "../component/OrderCard";
const MyOrder = () => {
  const context = useContext(useContextCar);

  const params = useParams();
  const indexOrderPath = Number(params.id);

  return (
    <LayOut>
      <div className="flex w-80 items-center relative justify-center mb-4">
        <Link to={"/my-orders"} className="absolute left-0">
          <ChevronDoubleLeftIcon className="h-6 w-6 text-gray-950 cursor-pointer" />
        </Link>
        <h1 className="font-novecento font-bold">Mi Orden</h1>
      </div>
      <div className="flex flex-col w-80">
        {!isNaN(indexOrderPath) &&
          context.order?.[indexOrderPath].products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageURL={product.images[0]}
              price={product.price}
            />
          ))}
        {isNaN(indexOrderPath) &&
          context.order
            .slice(-1)[0]
            ?.products?.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageURL={product.images[0]}
                price={product.price}
              />
            ))}
      </div>
    </LayOut>
  );
};

export default MyOrder;
