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

function About() {
  return (
    <>
    <section className="bg-black w-[1250px] h-[706px] mx-auto my-10 text-white rounded-lg">
  <div className="container mx-auto p-10 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2">
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
    <div className="md:w-1/2 mt-10 md:mt-0 relative">
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="relative">
        <img
          className="rounded-lg w-[326px] h-[449px] shadow-lg absolute top-0 left-0"
          src={Rectangle281}
          alt="Business meeting"
        />
        <img
          className="rounded-lg w-[326px] h-[449px] shadow-lg absolute top-6 left-6"
          src={Rectangle28}
          alt="Business meeting"
        />
        <img
          className="rounded-lg w-[326px] h-[449px] shadow-lg absolute top-12 left-12"
          src={Rectangle29}
          alt="Business meeting"
        />
      </div>
    </div>
  </div>
</section>
    <Service />
    <AboutUs />
    <TeamMember />
    <LetsTalk />
    </>
  );
}

function Service() {
    return (
      <section className="bg-white text-gray-900 py-20">
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
                <img src={tick}  alt="tick" />
                <p>Preference any astonished unreserved Mrs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col items-center relative">
          <div className="mb-8 relative">
            <img
              className="rounded-lg w-[326px] h-[449px] shadow-lg relative left-[-10px]"
              src={Ellipse32}
              alt="Team"
            />
            <div className="absolute w-[150px] top-[80px] left-[300px] bg-white text-black px-2 py-1 rounded-lg text-sm">
              <h1 className="text-center">Team members</h1>
              <div className="flex space-x-0 mt-1">
                <img className="h-6 w-6 rounded-full" src={Ellipse21} alt="Ellipse21" />
                <img className="h-6 w-6 rounded-full" src={Ellipse23} alt="Ellipse23" />
                <img className="h-6 w-6 rounded-full" src={Ellipse22} alt="Ellipse22" />
                <img className="h-6 w-6 rounded-full" src={Ellipse25} alt="Ellipse25" />
                <img className="h-6 w-6 rounded-full" src={Ellipse24} alt="Ellipse24" />
                <img className="h-6 w-6 rounded-full" src={Ellipse26} alt="Ellipse26" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-[150px] left-[-250px]">
              <div className="flex items-center mb-8">
                <div className="text-4xl font-bold">10k</div>
                <div className="ml-4">
                  <p>Great coversations per month.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-4xl font-bold">95+</div>
                <div className="ml-4">
                  <p>Project complete.</p>
                </div>
              </div>
            </div>
            <img
              className="rounded-lg shadow-lg relative right-[-10px]"
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
      <div className="w-[419px] h-[500px] p-4">
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
      <div className="relative w-[1250px] h-[209px] mx-auto my-8" style={{ backgroundImage: `url(${CallToAction})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '20px' }}>
        <div className="absolute inset-0 flex items-center justify-center rounded-[20px] bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Enough talk, let's get to work</h2>
            <button className="bg-white text-black px-6 py-2 rounded-full">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    );
  }

export default About;
