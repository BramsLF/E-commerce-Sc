import { useContextCar } from "../hooks/useContextCar";
import { useContext } from "react";
import OrdersCard from "../component/OrdersCard";
import LayOut from "../container/layout";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const context = useContext(useContextCar);
    
  console.log(context.order)

  return (
    <LayOut>
      <h1 className="font font-novecento font-bold m-2">Mis Ordenes</h1>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </LayOut>
  );
};

export default MyOrders;
