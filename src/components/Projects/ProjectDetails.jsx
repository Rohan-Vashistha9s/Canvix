// ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import MainNavbar from '../MainNavbar/MainNavbar';
import image1 from './assets/image1.png'
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";

const projectItems = [
  { id: 1, title: 'Web UI design', category: 'Creative UI design', image: image1 },
  { id: 2, title: 'To design Digital Strategy', category: 'Social Media Marketing', image: image2 },
  { id: 3, title: 'Graphic design', category: 'Graphic design', image: image3 },
  { id: 4, title: 'UI Design', category: 'Creative rebranding for logo', image: image4 },
  { id: 5, title: 'Graphic design', category: 'Graphic design', image: image5 },
  { id: 6, title: 'UI Design', category: 'Creative rebranding for logo', image: image6 }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectItems.find(item => item.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <MainNavbar />
      <div>
        <div className='w-[64rem]  relative -left-4 justify-center align-middle m-auto '>
          <img className="object-cover  w-full h-[28rem] mb-4 rounded-2xl" src={project.image} alt={project.title} />
        </div>
        <div className='w-[10rem] h-[5rem] bg-black text-white rounded-2xl'>
          <div>
            <h4>Category:</h4>
            <p>Cloud solution</p>
          </div>
          <div>
            <h4>Client:</h4>
            <p>BrightMedia Solutions</p>
            <div>
              <h4>Date:</h4>
              <p>August 23,2023</p>
            </div>
            <div>
              <h4>Location:</h4>
              <p>489 Depot Road Midland</p>
            </div>
          </div>

        </div>

      </div>



    </>
  );
};

export default ProjectDetails;
