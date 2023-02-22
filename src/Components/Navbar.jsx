import Logo from "/Logo.svg";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";

export default function Navbar() {
  return (
    <nav className="w-full bg-brown flex items-center justify-between md:px-20">
      <Link to="/" className="w-4/12">
        <div className="w-full">
          <img src={Logo} className="md:w-4/12 w-full"></img>
        </div>
      </Link>
      <div className="md:hidden">
        <MenuButton />
      </div>
      <div className=" hidden md:mr-4 md:lato md:text-gray-50 md:font-semibold md:flex md:items-center md:justify-between md:text-sm">
        <Link to="/blog">
          <button className="border-2 border-gray-50 bg-gray-100 bg-opacity-0 hover:bg-opacity-40 px-2 text-gray-50 rounded-lg py-1">
            Viziteaza Blogul
          </button>
        </Link>
      </div>
    </nav>
  );
}
