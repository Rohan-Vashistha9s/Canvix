// images
import { Link } from "react-router-dom";
import logo from "../assests/logo.png"
import ornament from "../assests/Ornament.png";




const Navbar = () => {
    return (
        <div>
            <div>
                <img src={ornament} alt="ornament" className="bg-black absolute w-40 h-44 top-48" />
            </div>

            {/* NAVBAR START*/}
            <nav className="text-white cursor-pointer">
                <img src={logo} alt="logo" className="left-56 relative top-5 w-36 h-10" />
                <ul className="flex bottom-3 relative justify-center gap-9">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                </ul>
                <button className="w-32 h-10 bg-white text-black relative rounded-3xl px-4 py-2 get">Get in touch</button>
            </nav>
            {/* NAVBAR END */}
        </div>
    )
}

export default Navbar