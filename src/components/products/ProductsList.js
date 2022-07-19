import { useSelector, useDispatch } from "react-redux/es/exports";
import { openModal } from "../../features/modal/modalSlice";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (products.length === 0) {
    return (
      <section className="p-5">
        <h1 className="text-center text-lg">Your cart is empty!</h1>
      </section>
    );
  }
  return (
    <section className="wrapper space-y-5">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-5 md:grid-cols-1 md:gap-2">
        {products.map((item) => {
          return <ProductItem key={item.id} {...item} />;
        })}
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">Total</p>
        <p className="text-lg font-semibold">${total}</p>
      </div>
      <button
        className="block m-auto p-3 py-2 bg-red-500 text-light rounded-md transition ring ring-red-500 hover:bg-red-600 hover:ring-red-300 hover:ring-offset-2"
        onClick={() => dispatch(openModal())}
      >
        Clear Cart
      </button>
    </section>
  );
};

export default ProductsList;
