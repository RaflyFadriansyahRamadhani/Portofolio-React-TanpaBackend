import { Link } from "react-router-dom";
import logo from "../assets/logobgwhite.png";
import circlelogo from "../assets/circlelogo.png";
import fotodiri from "../assets/fotodiri.png";

export default function AppNavbar() {
  return (
    <nav className=" fixed top-0 left-0 w-full z-50 flex items-center p-4 backdrop-filter backdrop-blur-lg  bg-opacity-30 ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <Link to="/" aria-label="Home" className="text-2xl text-gray-900 font-semibold">
            <img src={circlelogo} alt="Logo" className="h-8" />
          </Link>
          

          {/* Menu */}
          <div className="flex items-center px-4 gap-6">
            <Link to="/" className="py-2 px-3 text-white hover:text-blue-500">
              Home
            </Link>
            <Link to="/porto" className="py-2 px-3 text-white hover:text-blue-500">
              Portfolio
            </Link>
            <Link to="/contact" className="py-2 px-3 text-white hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
