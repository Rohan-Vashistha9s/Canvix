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
import Navbar from "./Navbar";

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


      {/* OUR SERVICE SECTION START */}
      <div className="container">
        <div className="Ourservices">
          <div>
            <h4 className="justify-center text-center relative top-12 m-auto font-bold our ">Our Services</h4>
          </div>
          <h1 className="justify-center text-center relative top-12 m-auto service font-bold">High-impact services for your business</h1>
        </div>

        <div className="flex gap-16 boxes">

          <div className="frame37">
            <div>
              <img src="" alt="content marketing" />
            </div>
            <div className="frame37a gap-4">
              <div>
                <p className="font-bold -bottom-20 relative text-2xl">Content Marketing</p>
              </div>
              <div>
                <p className=" -bottom-24 relative ">Our team creates engaging and shareable content that resonates with your audience, drives organic traffic.</p>
              </div>
            </div>

          </div>

          <div className="frame56">
            <div>
              <img src="" alt="Graphic design" />
            </div>
            <div>
              <div className="frame56a">
                <p className="font-bold -bottom-20 relative text-2xl">Graphic Design</p>
              </div>
              <div>
                <p className=" -bottom-24 relative">Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.</p>
              </div>
            </div>

          </div>

          <div className="frame38">
            <div>
              <img src="" alt="Digital marketing" />
            </div>
            <div className="frame38a">
              <div>
                <p className="font-bold -bottom-20 relative text-2xl">Digital Marketing</p>
              </div>
              <div>
                <p className=" -bottom-24 relative">Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* OUR SERVICE SECTION END */}

    </div>
  );
};

export default HeroSection;
