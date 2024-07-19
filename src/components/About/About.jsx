import React from 'react';
import star from "./assets/star.png";
import TeamMember1 from "./assets/TeamMember-1.png";
import TeamMember2 from "./assets/TeamMember-2.png";
import TeamMember3 from "./assets/TeamMember-3.png";
import CallToAction from "./assets/CallToAction.png";
import Ellipse21 from "./assets/Ellipse 21.png";
import Ellipse23 from "./assets/Ellipse 23.png";
import Ellipse22 from "./assets/Ellipse 22.png";
import Ellipse25 from "./assets/Ellipse 25.png";
import Ellipse24 from "./assets/Ellipse 24.png";
import Ellipse26 from "./assets/Ellipse 26.png";
import Ellipse20 from "./assets/Ellipse 20.png";
import Ellipse32 from "./assets/Rectangle 32.png";
import Rectangle34 from "./assets/Rectangle 34.png";
import tick from "./assets/tick.png";
import Rectangle28 from "./assets/Rectangle 28.png";
import Rectangle29 from "./assets/Rectangle 29.png";
import Rectangle281 from "./assets/Rectangle 28 (1).png";
import facebook from "./assets/Frame 141.png";
import instagram from "./assets/Frame 142.png";
import linkedin from "./assets/Frame 143.png";



import './About.css';
import MainNavbar from '../MainNavbar/MainNavbar';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <MainNavbar />
      <section className="bg-black w-full max-w-[1250px] min-h-[600px] mx-auto my-10 text-white rounded-lg">
        <div className="container mx-auto p-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-6 py-4 w-full">
            <p className="text-sm mb-2">Pleasure and so read the van hope.</p>
            <h1 className="text-5xl font-bold mb-4">
              Ready to take <span className="text-teal-400">your business</span> to the next level?
            </h1>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, et ut massa lobera egestas maecenas viverra gravida libero cursus nulla leo pulvinar.
            </p>
            <div className="flex items-center">
              <img className="w-[70px] h-[70px] rounded-full mr-4" src={Ellipse20} alt="Avatar" />
              <div>
                <p className="text-base">Rated 4.9/5 stars</p>
                <div className="flex">
                  <img src={star} alt="star1" />
                  <img src={star} alt="star2" />
                  <img src={star} alt="star3" />
                  <img src={star} alt="star4" />
                  <img src={star} alt="star5" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full mt-10 md:mt-[-235px] md:right-[-127px] relative">
            <div className="relative">
              <img
                className="rounded-lg w-full max-w-[450px] h-auto shadow-lg absolute top-[-1rem] left-0"
                src={Rectangle281}
                alt="Business meeting"
              />
              <img
                className="rounded-lg w-full max-w-[450px] h-auto shadow-lg absolute top-4 left-6"
                src={Rectangle28}
                alt="Business meeting"
              />
              <img
                className="rounded-lg w-full max-w-[450px] h-auto shadow-lg absolute top-8 left-12"
                src={Rectangle29}
                alt="Business meeting"
              />
            </div>
          </div>
        </div>
      </section>

        <Service />
        <AboutUs />
      <div className='Talkheight'>
        <TeamMember />
        <LetsTalk />
      </div>

    </>  
     
  );
}

function Service() {
  return (
    <section className="bg-white h-96 mt-[300px] md:mt-[20px] text-gray-900 py-20">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-around">
          <Feature title="200+" description="We're a family" details="Speedily say has suitable disposal and boy. On forth doubt miles of child. Exercise joy man children rejoiced." />
          <Feature title="99%" description="Graphic Design" details="Presented remarkably continual existence may instantly by we. Do talking entrance examined and up. Drawings me opinions returned." />
          <Feature title="1.5M+" description="Digital Marketing" details="Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh." />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, description, details }) {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className=" rounded-lg p-6 text-center">
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="text-xl font-semibold mb-2">{description}</p>
        <p>{details}</p>
      </div>
    </div>
  );
}


function AboutUs() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-teal-400 text-lg font-bold mb-2">Our Mission</h2>
          <h1 className="text-5xl font-bold mb-4">
            Boost your with your business.
          </h1>
          <p className="text-lg mb-8">
            He moonlights difficult engrossed it, sportsmen. Interested has all devonshire difficulty get assistance joy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="space-y-2 w-[300px]">
              <div className="flex items-center gap-2">
                <img src={tick} alt="tick" />
                <p>Moonlight newspaper up its enjoyment.</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={tick} alt="tick" />
                <p>She new course gets living.</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={tick} alt="tick" />
                <p>She new course gets living.</p>
              </div>
            </div>
            <div className="space-y-2 w-[230px]">
              <div className="flex items-center gap-2">
                <img src={tick} alt="tick" />
                <p>Rooms oh fully taken by worse.</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={tick} alt="tick" />
                <p>Percieved end certainly day.</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={tick} alt="tick" />
                <p>Preference any astonished unreserved Mrs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col items-center relative">
          <div className="mb-8 relative">
            <img
              className="rounded-lg w-[326px] h-[449px] shadow-lg relative left-[-100px]"
              src={Ellipse32}
              alt="Team"
            />
            <div className="absolute w-[180px] top-[80px] left-[200px] bg-white text-black p-4 rounded-lg text-sm">
              <h1 className="text-center text-[18px] font-bold">Team members</h1>
              <div className="flex space-x-[-10px] mt-1">
                <img className="h-8 w-8 rounded-full" src={Ellipse21} alt="Ellipse21" />
                <img className="h-8 w-8 rounded-full" src={Ellipse23} alt="Ellipse23" />
                <img className="h-8 w-8 rounded-full" src={Ellipse22} alt="Ellipse22" />
                <img className="h-8 w-8 rounded-full" src={Ellipse25} alt="Ellipse25" />
                <img className="h-8 w-8 rounded-full" src={Ellipse24} alt="Ellipse24" />
                <img className="h-8 w-8 rounded-full" src={Ellipse26} alt="Ellipse26" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-[50px] left-[-150px] flex items-center">
              <div className="flex flex-col mt-[-40px] items-center">
                <div className="text-4xl font-bold">10k</div>
                <div>
                  <p className='w-[150px]'>Great conversations per month.</p>
                </div>
              </div>
              <div className="mx-4 border-r border-gray-500 h-[80px]"></div>
              <div className="flex flex-col mt-12 items-center">
                <div className="text-4xl font-bold">95+</div>
                <div>
                  <p>Project complete.</p>
                </div>
              </div>
            </div>
            <img
              className="rounded-lg shadow-lg relative right-[-180px] mt-8 md:mt-0"
              src={Rectangle34}
              alt="Project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



function TeamMember() {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our team</h2>
        <div className="flex flex-wrap justify-center">
          <Team
            name="Esther Howards"
            title="Founder & CEO"
            image={TeamMember1}
            socialLinks={[facebook, instagram, linkedin]}
          />
          <Team
            name="Cameron Williamson"
            title="Marketing Head"
            image={TeamMember2}
            socialLinks={[facebook, instagram, linkedin]}
          />
          <Team
            name="Liam Cooper"
            title="Marketing Head"
            image={TeamMember3}
            socialLinks={[facebook, instagram, linkedin]}
          />
        </div>
      </div>
    </section>
  );
}

function Team({ name, title, image, socialLinks }) {
  return (
    <div className="w-[419px] mb-10 h-[500px] p-4">
      <div className="rounded-lg overflow-hidden relative text-center">
        <div className="relative">
          <img className="w-full h-full object-cover" src={image} alt={name} />
          <div className="absolute top-4 right-4 flex space-x-2">
            {socialLinks.map((link, index) => (
              <a href={link} key={index} target="_blank" rel="noopener noreferrer">
                <img src={link} alt={`social-icon-${index}`} className="w-10 h-10" />
              </a>
            ))}
          </div>
        </div>
        <div className="text-left p-3">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
}

function LetsTalk() {
  return (
    <div className='Talkheight'>
      <div className="relative  w-full max-w-[1250px] h-[209px] mx-auto my-8" style={{ backgroundImage: `url(${CallToAction})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '20px' }}>
        <div className="absolute inset-0 flex items-center justify-center rounded-[20px] bg-gray-900 bg-opacity-50">
          <div className="text-center px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Enough talk, let's get to work</h2>
            <button className="bg-white text-black px-6 py-2 rounded-full">
              <Link to='/contact'>Get in touch</Link>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}


export default About;
