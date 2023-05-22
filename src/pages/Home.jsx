import Card from "../component/Card";
import ProductDitail from "../component/ProductDetail";
import LayOut from "../container/layout";
import useGetProducts from "../hooks/useGetProducts";

const Home = () => {
  const API = "https://api.escuelajs.co/api/v1/products";
 
  const products = useGetProducts(API);
 
  return (
    <LayOut>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products?.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <ProductDitail/>
    </LayOut>
  );
};

export default Home;
