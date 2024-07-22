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
import rectangle01 from './assets/Rectangle 37.png'
import rectangle02 from './assets/Rectangle 38.png'
import rectangle03 from './assets/Rectangle 39.png'

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
        <div className='flex  w-[54rem] relative -top-12 left-80 gap-20  '>
          <div className='w-auto text-center h-16 bg-black text-white rounded-2xl  -top-11 -left-20 align-middle justify-center m-auto'>
            <h4>Category:</h4>
            <p className='text-sm text-center '>  Cloud solution</p>
          </div>
          <div className='w-auto h-16 text-center bg-black text-white rounded-2xl  -top-11 -left-20 align-middle justify-center m-auto'>
            <h4>Client:</h4>
            <p className='text-sm text-center '> BrightMedia Solutions</p>
          </div>
          <div className='w-auto h-16 text-center bg-black text-white rounded-2xl  -top-11 -left-20 align-middle justify-center m-auto'>
            <h4>Date:</h4>
            <p className='text-sm text-center '>August 23,2023</p>
          </div>
          <div className='w-auto h-16 text-center bg-black text-white rounded-2xl  -top-11 -left-20 align-middle justify-center m-auto'>
            <h4>Location:</h4>
            <p className='text-sm text-center '>489 Depot Road Midland</p>
          </div>
        </div>



        <div className=' top-20 w-[64rem] relative -left-4 justify-center align-middle m-auto'>
          <div>
            <h1 className='font-bold text-2xl relative'>01. The Challenge</h1>
            <p className='relative top-5'>When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
          </div>
          <div>
            <h1 className='font-bold text-2xl relative top-10'>02. The Solution</h1>
            <p className='relative top-12'>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            <span className='relative top-16 '>One who avoids a pain that produces no resultant pleasure.
              laborious physical exercise.
              One who avoids a pain that produces no resultant
              which of us ever undertakes laborious
              Avoids pleasure itself, because it is.</span>
          </div>
          <div>
            <h1 className='font-bold text-2xl relative top-24'>03. The Result</h1>
            <p className='relative top-32'>Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" </p>
            <span className='relative top-36'>When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.      </span>
          </div>

          <div className='flex relative top-60 w-[19rem] gap-12'>
            <img src={rectangle01} alt="" />
            <img src={rectangle02} alt="" />
            <img src={rectangle03} alt="" />
          </div>


          <div>
            <div className='relative top-[23rem] text-center font-bold text-4xl'>
              <h1>Recent Projects</h1>
            </div>
            <div className='flex gap-12 '>
              <div className='w-[19rem]  relative top-[30rem]'>
                <img className="object-cover  w-[20rem] h-[28rem] mb-4 rounded-2xl" src={image1} alt={project.title} />
                <h1 className='font-bold text-lg'>Web UI design</h1>
                <p>Creative UI design</p>
              </div>
              <div  className='w-[19rem]  relative top-[30rem]'>
                <img className="object-cover  w-[20rem] h-[28rem] mb-4 rounded-2xl" src={image3} alt={project.title} />
                <h1  className='font-bold text-lg'>To design Digital Strategy</h1>
                <p>Social Media Marketing</p>
              </div>
              <div  className='w-[19rem]  relative top-[30rem]'>
                <img className="object-cover  w-[20rem] h-[28rem] mb-4 rounded-2xl" src={image4} alt={project.title} />
                <h1  className='font-bold text-lg'>UI Design</h1>
                <p>Creative Rebranding for logo</p>
              </div>
            </div>
          </div>
        </div>

      </div>



    </>
  );
};

export default ProjectDetails;
