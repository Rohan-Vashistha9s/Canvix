// images
import slidebutton from "../Home/assests/slideButton.png";
import ellipse9 from "../Home/assests/Ellipse 9.png";
import ellipse10 from "../Home/assests/Ellipse 10.png";
import ellipse11 from "../Home/assests/Ellipse 11.png";
import ellipse12 from "../Home/assests/Ellipse 12.png";
import client1 from "../Home/assests/client-1.png";
import client2 from "../Home/assests/client-2.png";
import client3 from "../Home/assests/client-3.png";
import client4 from "../Home/assests/client-4.png";





// component
import './Home.css';

import Services from "./Services";
import Navbar from "../Navbar/Navbar";
import About from "./About/About";
import Process from "./Process/Process";
import Projects from "./Projects/Projects";
import Testimonial from "./Testimonial/Testimonial";
// import Footer from "./Footer/Footer";


const HeroSection = () => {
  return (
    <div>


      {/* HEROSECTION START */}

      <div className="home">
        <Navbar />

        {/* FRAME53 START */}
        <div className="text-white">
          <h1 className="frame53a">Ready to take your <span>Business Growth</span> <br />to the next level?</h1>
          <div>
            <p className="frame53b relative">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi molestias ullam quidem, maxime nihil dicta assumenda pariatur consectetur.</p>
          </div>
          <div>
            <img src={slidebutton} alt="" className="frame53c" />
            <button className="frame53d">Start your Free Trial</button>
          </div>
        </div>
        {/* FRAME53 END */}

        {/* IMAGE ELLIPSE START */}
        <div className="ellipse">
          <img className="ellipse12 " src={ellipse12} alt="" />
          <img src={ellipse11} alt="" className="ellipse11" />
          <img src={ellipse10} alt="" className="ellipse10" />
          <img src={ellipse9} alt="" className="ellipse9" />
        </div>
        {/* IMAGE ELLIPSE END */}

        {/* LEADING BRAND START FRAME161*/}
        <div className="frame161">
          <p className="text-white font-bold">Trusted by Leading Brands</p>
          <div className="flex client">
            <img src={client4} alt="" />
            <img src={client3} alt="" />
            <img src={client2} alt="" />
            <img src={client1} alt="" />
          </div>
        </div>
        {/* LEADING BRAND END */}
      </div>
      {/* HEROSECTION END */}

      <div>
        <Services />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Process/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
      <Testimonial/>
      </div>
      {/* <div>
        <Footer/>
      </div> */}
    </div>
  );
};

export default HeroSection;
