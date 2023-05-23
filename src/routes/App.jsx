import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import { ContextCarProvider } from "../hooks/useContextCar";
import Home from "../pages/Home";
import MyAccount from "../pages/MyAccount";
import MyOrder from "../pages/MyOrder";
import MyOrders from "../pages/MyOrders";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
const App = () => {
  return (
    <ContextCarProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/my-account" element={<MyAccount />} />
          <Route exact path="/my-order" element={<MyOrder />} />
          <Route exact path="/my-order/last" element={<MyOrder />} />
          <Route exact path="/my-orders/:id" element={<MyOrder />} />
          <Route exact path="/my-orders" element={<MyOrders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextCarProvider>
      
  );
};

export default App;
