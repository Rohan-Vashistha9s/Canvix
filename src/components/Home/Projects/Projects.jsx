import { Link } from "react-router-dom";
import rectangle01 from "../assests/Rectangle 20.png";
import rectangle02 from "../assests/Rectangle 21.png";
import rectangle03 from "../assests/Rectangle 22.png";
import rectangle04 from "../assests/Rectangle 23.png";
import button from "../assests/button.png";

const Projects = () => {
  return (
    <div>
      <div className="group63 relative left-12">
        <div>
          <h1 className="text-7xl  ">Recent showcase</h1>
        </div>
        <div className="trial relative inline-block">
          <img src={button} alt="" className="w-6 h-7 relative top-3 left-3" />
          <button>Start your Free Trial</button>
        </div>
        <div>
          <div className="frame131 relative top-36">
            <Link to="/projects">
              <img src={rectangle01} alt="" />
              <h2 className="font-bold text-2xl relative top-3">
                Web UI design
              </h2>
              <p className="top-4 relative text-sm">Creative UI design</p>
            </Link>
          </div>
          <div className="frame201 relative top-60">
            <Link to="/projects">
              <img src={rectangle03} alt="" />
              <h2 className="font-bold text-2xl relative top-3">UI Design</h2>
              <p className="top-4 relative text-sm">
                Creative Rebranding for logo
              </p>
            </Link>
          </div>
        </div>

        <div className="group63a">
          <div>
            <Link to="/projects">
              <img src={rectangle02} alt="" className="frame130" />
              <h2 className="font-bold text-2xl relative top-3">
                To design Digital Strategy
              </h2>
              <p className="top-4 relative text-sm">Social Media Marketing</p>
            </Link>
          </div>
          <div className="frame128">
            <Link to="/projects">
              <img src={rectangle04} alt="" className=" relative top-16" />
              <h2 className="font-bold text-2xl relative top-20">UI Design</h2>
              <p className=" relative text-sm">Creative Rebranding for logo</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
