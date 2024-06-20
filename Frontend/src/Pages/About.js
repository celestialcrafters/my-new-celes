import FirstImage from "../Assets/images/Rectangle18.png";
import secondImage from "../Assets/images/Rectangle1.png";
import ThirdImage from "../Assets/images/Rectangle40.png";
import checkMark from "../Assets/images/check.png";
import "../PagesStyles/about.css";
import { AboutData } from "../PagesData/AboutDataExp";
import { TeamData } from "../PagesData/TeamData";
import { listData } from "../PagesData/ListData";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="all">
      <div className="topDesign">
        <h2>About Us</h2>
        <hr />
      </div>

    {/*To update my about details  */}
      <div className="firstDiv">
        <div className="aboutUs">
          <p>
            Welcome to <strong>Celestial Crafters Tech Company</strong>, a
            dynamic force in the ever-evolving landscape of technology. With a
            global team of 60 professionals, we are united by our commitment to
            shaping the future of technology while championing diversity.
          </p>
          <div>
            <strong>Our Unique Culture</strong>
            <p>
              {" "}
              At the heart of Celestial Crafters is a unique culture that
              celebrates diversity and inclusion. Every individual's voice
              matters, fostering an environment where creativity flourishes, and
              innovation knows no bounds.
            </p>
          </div>
          <div>
            <strong> Beyond the Code</strong>
            <p>
              Success for us is measured beyond lines of code. We actively
              contribute to local economies, provide mentorship, and engage in
              philanthropy.
            </p>
          </div>
        </div>
        <img src={FirstImage} alt="sitting" />
      </div>
      <div className="secondDiv">
        <img src={secondImage} alt="" />
        <div className="VisonsMission">
          <div className="vision">
            <h2>Vision</h2>
            <p>
              To be the global beacon of innovation and excellence in [Your
              Industry], empowering businesses to transcend their potential and
              shape a sustainable, prosperous future.
            </p>
          </div>
          <div className="missions">
            <h2>Mission</h2>
            <p>
              Our mission is to equip businesses with cutting-edge solutions,
              unparalleled expertise, and unwavering support, fostering growth,
              efficiency, and success in an ever-evolving world.
            </p>
          </div>
        </div>
      </div>
      <div className="how">
        <div className="how-Long">
          <h4>How we Started</h4>
          <h1>Our Dream is to ignite transformative change.</h1>
          <p>Our story started from</p>
        </div>
        <div>
          <img className="thirdImage" src={ThirdImage} alt="" />
          <div className="all-about-data">
            {AboutData.map((item) => (
              <div className="experience">
                <h2 className="number">{item.number}</h2>
                <p className="work">{item.proof}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="allteamheads">
          {TeamData.map((item) => (
            <div className="team-profile">
              <img src={item.img} alt="" />
              <strong className="name">{item.name}</strong>
              <p className="role">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="choose">
        <h3>Why Choose Us?</h3>
        <p>
          When you partner with us, you are not just selecting a service
          provider; you're gaining a dedicated ally committed
          to your success. Here's why we stand out:
        </p>

        {listData.map((item) => (
          <div className="list">
            <img src={checkMark} alt="" />
            <div>
              <strong>{item.topic}</strong>
              <p>{item.explanation}</p>
            </div>

          </div>
        ))}
      </div>
      <div className="portfolio">
        <div>
          <h2>Explore Our Portfolio</h2>
          <p>Explore the excellent job and works </p>
        </div>
        <Link to="/portfolio"><button>Explore</button></Link>
      </div>
    </div>
  );
};
export default About;
