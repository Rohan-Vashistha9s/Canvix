import { Link } from "react-router-dom";
import logo from "../About/assets/Group 9.png";


const Navbar = () => {
    return (
        <nav className="bg-white text-black p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-36 h-10 mr-8" />
          <ul className="flex space-x-9 text-lg">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <li className="cursor-pointer hover:text-gray-600">Contact Us</li>
          </ul>
        </div>
        <button className="bg-black text-white rounded-3xl px-6 py-2 hover:bg-gray-800 transition duration-300">
          Get in touch
        </button>
      </nav>
    )
}

export default Navbar;