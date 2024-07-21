// Project.js
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import CallToAction from "../About/assets/CallToAction.png";
import MainNavbar from '../MainNavbar/MainNavbar';

const projectItems = [
  { id: 1, title: 'Web UI design', category: 'Creative UI design', image: image1 },
  { id: 2, title: 'To design Digital Strategy', category: 'Social Media Marketing', image: image2 },
  { id: 3, title: 'Graphic design', category: 'Graphic design', image: image3 },
  { id: 4, title: 'UI Design', category: 'Creative rebranding for logo', image: image4 },
  { id: 5, title: 'Graphic design', category: 'Graphic design', image: image5 },
  { id: 6, title: 'UI Design', category: 'Creative rebranding for logo', image: image6 }
];

const Project = () => {
  return (
    <>
      <MainNavbar />
      <div className=" bg-black rounded-[20px] flex items-center justify-center w-full max-w-[1250px] h-[350px] mx-auto my-8">
        <div className="text-center px-4 sm:px-0">
          <h1 className="text-2xl sm:text-[60px] font-bold mb-4 text-white">Our Portfolio</h1>
        </div>
      </div>
      <div className="container h-[72rem] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[50px]">
          {projectItems.map((item) => (
            <Link to={`/project/${item.id}`} key={item.id}>
              <ProjectItem 
                title={item.title} 
                category={item.category} 
                image={item.image} 
              />
            </Link>
          ))}
        </div>
        <div className="relative w-full max-w-[1250px] h-[209px] mx-auto my-10" style={{ backgroundImage: `url(${CallToAction})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '20px' }}>
          <div className="absolute inset-0 flex items-center justify-center rounded-[20px] bg-gray-900 bg-opacity-50">
            <div className="text-center px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Enough talk, let's get to work</h2>
              <button className="border-2 text-white px-6 py-2 rounded-full">
                <Link to='/contact'>Get in touch</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectItem = ({ title, category, image }) => {
  return (
    <div className="bg-white">
      <img className="object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-[20px] font-bold">{title}</h2>
        <p className="text-gray-600">{category}</p>
      </div>
    </div>
  );
};

export default Project;
