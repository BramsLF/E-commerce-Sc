import Navbar from "../component/Navbar";
const LayOut = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center mt-20">{children}</section>
    </>
  );
};

export default LayOut;
