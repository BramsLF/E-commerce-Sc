import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {
  const { id, title, imageURL, price, handleDelete } = props;

    return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img src={ imageURL } alt={ title } className="w-full h-full rounded-md object-cover"/>
        </figure>
        <p className="text-sm font-raleway font-light ">{title}</p>
      </div>
      <div className="flex items-center">
        <p className="font-novecento text-lg font-black p-2">{price}</p>
          <XMarkIcon
            className="h-6 w-6 text-gray-950 cursor-pointer"
            onClick={()=>handleDelete(id)}
          />
      </div>
    </div>
  );
};

export default OrderCard;