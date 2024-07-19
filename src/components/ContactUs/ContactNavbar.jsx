
// images
import { Link } from "react-router-dom";
import logo  from '../About/assets/Group 9.png';





const ContactNavbar = () => {
    return (
        <div className=""> 
            {/* NAVBAR START*/}
            <nav className="text-white Contactnavbar  cursor-pointer">
                <img src={logo} alt="logo" className="left-56 relative top-5 w-36 h-10" />
                <ul className="flex bottom-3 text-black relative justify-center gap-9">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to='/contact'>Contact Us</Link>
                </ul>
                <button className="contactbutton">Get in touch</button>
            </nav>
            {/* NAVBAR END */}
        </div>
    )
}

export default ContactNavbar