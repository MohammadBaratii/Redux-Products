import { useDispatch } from "react-redux";
import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "../../features/cart/cartSlice";

const ProductItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="card flex w-full max-w-lg m-auto p-3 md:max-w-lg">
      <div className="flex flex-1 items-center">
        <img src={img} alt={title} className="w-16 h-16" />
        <div>
          <h1>{title}</h1>
          <p>${price}</p>
          <button
            className="text-red-500 text-sm hover:text-red-400"
            onClick={() => dispatch(removeProduct(id))}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <button
          className="bg-amber-300/50 rounded hover:bg-amber-300 transition-all active:scale-[.85]"
          onClick={() => dispatch(increaseProduct(id))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <p>{amount}</p>
        <button
          className="bg-amber-300/50 rounded hover:bg-amber-300 transition-all active:scale-[.85]"
          onClick={() => dispatch(decreaseProduct(id))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
