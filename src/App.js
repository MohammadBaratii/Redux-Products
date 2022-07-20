import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import ProductsList from "./components/products/ProductsList";
import { calculateTotals, fetchProducts } from "./features/cart/cartSlice";

const App = () => {
  const { products, isLoading } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products, dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {isModalOpen && <Modal />}
      <Navbar />
      <ProductsList />
    </>
  );
};

export default App;
