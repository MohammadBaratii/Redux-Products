import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <section
      className="fixed grid place-content-center inset-0 w-full h-screen bg-black/70 z-10 backdrop-blur-md"
      onClick={() => dispatch(closeModal())}
    >
      <div
        className="modal w-fit space-y-5 p-4 bg-white rounded-md -translate-y-6 opacity-50"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold text-center">
          Are you sure <br />
          <span className="text-base font-normal">
            you want to clear your cart?
          </span>
        </h2>
        <div className="flex justify-between gap-4">
          <button
            className="flex-1 w-32 p-1 bg-neutral-500 text-light rounded-md transition hover:bg-neutral-600"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            CANCEL
          </button>
          <button
            className="flex-1 w-32 p-1 bg-red-500 text-light rounded-md transition hover:bg-red-600"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            CLEAR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
