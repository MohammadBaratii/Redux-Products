import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import ProductsList from "./components/products/ProductsList";
import { calculateTotals } from "./features/cart/cartSlice";

const App = () => {
  const { products } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products, dispatch]);
  return (
    <>
      {isModalOpen && <Modal />}
      <Navbar />
      <ProductsList />
    </>
  );
};

export default App;
