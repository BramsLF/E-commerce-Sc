import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {
  const { title, imageURL, price } = props;
    return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img src={ imageURL } alt={ title } className="w-full h-full rounded-md object-cover"/>
        </figure>
        <p className="text-sm font-raleway font-light "></p>
      </div>
      <div>
        <p className="font-novecento text-lg font-black ">{price}</p>
          <XMarkIcon
            className="h-6 w-6 text-gray-950 cursor-pointer"
          />
      </div>
    </div>
  );
};

export default OrderCard;