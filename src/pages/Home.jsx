import { useContext } from "react";
import { useContextCar } from "../hooks/useContextCar";
import Card from "../component/Card";
import ProductDitail from "../component/ProductDetail";
import LayOut from "../container/LayOut";

const Home = () => {
  const context = useContext(useContextCar);

  const renderView = () => {
    if (context.filterProducts?.length > 0) {
      return context.filterProducts?.map((product) => (
        <Card key={product.id} product={product} />
      ));
    } else {
      return <div>Articulo no encontrado</div>;
    }
  }; 
  return (
    <LayOut>
      <div className="flex items-center justify-center w-80 mb-2">
        <h1 className="font-novecento font-bold text-lg">Articulos</h1>
      </div>
      <input
        type="text"
        placeholder="Busca tu Producto"
        className="rounded-md border border-black w-80 p-3 mb-3"
        onChange={(event) => context.setSearchValue(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDitail />
    </LayOut>
  );
};

export default Home;
