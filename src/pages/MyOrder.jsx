import LayOut from "../container/layout";

const MyOrder = () => {
  return (
    <LayOut>
      <div className="bg-gray-200 hover:bg-purple-500 transition-colors duration-700">
        <p className="text-black hover:text-white transition-colors duration-300">
          Texto de ejemplo
        </p>
      </div>
    </LayOut>
  );
};

export default MyOrder;
