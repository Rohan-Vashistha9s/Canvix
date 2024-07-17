import React from 'react';
import facebook from "../About/assets/Frame 141.png";
import instagram from "../About/assets/Frame 142.png";
import linkedin from "../About/assets/Frame 143.png";
import logo from "../Home/assests/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img src={logo} alt="" />
          <p>
            We are a team of creatively diverse, driven, and innovative individuals working in various locations
            around the world. Our passion for creativity and joyful user experiences drives us to deliver exceptional work.
          </p>
        </div>
        
        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-between">
          <div>
            <h3 className="font-bold mb-2">Pages</h3>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Home 2</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Portfolio Single</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Utility Pages</h3>
            <ul>
              <li><a href="#" className="hover:underline">Style Guide</a></li>
              <li><a href="#" className="hover:underline">Instruction</a></li>
              <li><a href="#" className="hover:underline">License</a></li>
              <li><a href="#" className="hover:underline">Changelog</a></li>
              <li><a href="#" className="hover:underline">Error 404</a></li>
              <li><a href="#" className="hover:underline">Password Protected</a></li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-1/3">
          <h3 className="font-bold mb-2">Subscribe</h3>
          <form className="flex mb-6">
            <input
              type="email"
              placeholder="Enter your email here"
              className="px-4 py-2 rounded-[20px] text-black w-full"
            />
            <button
              type="submit"
              className="bg-black px-4 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <p>Copyright By:</p>
          <p>Designed by Iconstica.com</p>
        </div>
        <div className="md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <p>Contact Us:</p>
          <p>+ 0 12 457 4578</p>
        </div>
        <div className="md:w-1/3 text-center md:text-left">
          <p>Address:</p>
          <p>119 Tanglewood Lane Gulfport, MS 39503</p>
        </div>
        <div className="md:1/3 flex text-center md:text-left">
           <img src={facebook} className='' alt="facebook" />
           <img src={instagram} alt="instagram" />
           <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
