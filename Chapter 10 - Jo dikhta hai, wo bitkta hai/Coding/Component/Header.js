import { Link } from "react-router-dom";

const Header = ({ logo }) => {
  return (
    <div className="px-4 flex justify-between">
      <img className="h-24 w-auto" src={logo} />
      <div className="flex items-center">
        <ul className="flex">
          <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
            <Link to={"/groceryshop"}>Grocery Shop</Link>
          </li>
          <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
            <Link to={"/signin"}>Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
