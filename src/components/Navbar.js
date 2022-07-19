import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav className="bg-amber-300">
      <ul className="wrapper flex justify-between items-center">
        <li>
          <h1 className="text-3xl">ReduxCart</h1>
        </li>
        <li className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="absolute grid place-content-center -top-2 -right-2 min-w-[1.5rem] h-6 p-1 bg-dark text-light rounded-full">
            {amount}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
