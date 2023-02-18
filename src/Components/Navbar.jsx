import Logo from "/Logo.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="w-full bg-brown flex justify-between items-center">
      <Link to="/" className="w-4/12">
        <div className="w-full">
          <img src={Logo} className="4/12"></img>
        </div>
      </Link>
      <div className="grid columns-1 gap-2 items-center w-1/8 mr-4">
        <div className="bg-orange-200 py-0.5 w-10 rounded-3xl"></div>
        <div className="bg-orange-200 py-0.5 w-10 rounded-3xl"></div>
        <div className="bg-orange-200 py-0.5 w-10 rounded-3xl"></div>
      </div>
    </nav>
  );
}
