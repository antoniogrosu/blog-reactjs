import Logo from "/Logo.svg";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";

export default function Navbar() {
  return (
    <nav className="w-full bg-brown flex items-center justify-between md:px-20">
      <Link to="/" className="w-4/12">
        <div className="w-full">
          <img src={Logo} className="4/12"></img>
        </div>
      </Link>
      <div className="md:hidden">
        <MenuButton />
      </div>
      <div className=" hidden md:mr-4 md:lato md:text-orange-200 md:font-semibold md:flex md:items-center md:justify-between md:text-lg">
        <Link to="/blog">Blogul TeenPsychology</Link>
      </div>
    </nav>
  );
}
