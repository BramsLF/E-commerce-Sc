import Navbar from "../component/Navbar";
import CheckOutMenu from "./CheckOutMenu";
const LayOut = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center mt-20">{children}</section>
      <CheckOutMenu />
    </>
  );
};

export default LayOut;
