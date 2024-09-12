import Location from "../../Assets/icons/Location.png";
import Copyright from "../../Assets/icons/copyright.png";
import { FaLinkedin, FaTiktok, FaPhone, FaWhatsapp, FaMastodon, FaFacebookF, FaInstagram, FaYoutube  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiRedPacketLine } from "react-icons/ri";
import { Link } from "react-router-dom";
export const ContactInfo = [
  {
    icon: <FaWhatsapp/>,
    info: "+254-727493854",
    page: "https://wa.me/254727493854",
  },
  {
    icon: <FaPhone/>,
    info: "+254-114395617",
    page: "tel:+254-114395617",
  },
  {
    icon: <RiRedPacketLine />,
    info: "info@celestialcrafters.co.ke",
    page: "mailto:info@celestialcrafters.co.ke",
  },
];
const social = [
  {
    icon: <FaLinkedin />,
    info: "Celestial Crafters",
    page: "https://www.linkedin.com/company/celestial-crafters/?viewAsMember=true",
  },
  {
    icon: <FaTiktok />,
    info: "Celestial crafters",
    page: " https://www.tiktok.com/@celestialcrafters8?lang=en",
  },
  {
    icon: <FaInstagram />,
    info: "Celestial crafters",
    page: "https://www.instagram.com/celestialcrafterstech.co/",
  },
  {
    icon: <BsTwitterX />,
    info: "Celestial Crafters",
    page: "https://x.com/celestialc24"
  },
  {
    icon: <FaFacebookF/>,
    info: "Celestial Crafters",
    page: "https://www.facebook.com/profile.php?id=61561725759744"
  },
  {
    icon: <FaYoutube/>,
    info: "Celestial Crafters",
    page: "https://www.youtube.com/channel/UCjAAe8r_pwGuEut7EO0_8Vg"
  },
  {
    icon: <FaMastodon/>,
    info: "Celestial Crafters",
    page: "https://mastodon.social/@celestialcrafters"
  },
  
];

const Footer = () => {
  return (
    <div className="bg-black px-4 sm:!px-10 !py-10 overflow-hidden">
      <div className="flex lg:justify-between pb-10 flex-wrap justify-start gap-7">
        <div className="text-white">
          <img
            className="w-20"
            src={`${process.env.PUBLIC_URL}/Assets/icons/logo.png`}
            alt="logo"
          />
          <div className="flex flex-col gap-1">
            {ContactInfo.map((item, index) => {
              return (
                <a
                  href={item.page}
                  className="flex gap-4 overflow-x-auto no-scrollbar"
                  target="_blank"
                  rel="noreferrer"
                  key={index + item.info}
                >
                  <div className="text-blue-700 text-2xl">{item.icon}</div>
                  <span className="text-white group-hover:text-accent duration-500">
                    {item.info}
                  </span>
                </a>
              );
            })}
            <div className="flex items-center gap-4">
              <img src={Location} alt="location" />
              <p className="location">Kenya</p>
            </div>
          </div>
        </div>
        <div className="text-white w-96">
          <Link className="text-xl font-[500] text-blue-700" to="/about">
            About Us
          </Link>
          <p className="pt-3">
            From developing cutting-edge solutions to inspiring the next
            generation of female leaders in STEM, we're committed to making a
            positive impact. Join us on our journey to bridge the gender gap in
            tech and create an equitable and vibrant future for all.
          </p>
        </div>
        <div className="text-white flex flex-col gap-2">
          <Link to="/services" className="text-xl font-[500] text-blue-700 ">
            Our Services
          </Link>
          <div className="flex flex-col gap-2">
            <Link
              to="/services"
              className="block hover:text-blue-700 hover:transition-all hover:duration-100"
            >
              Web Development
            </Link>
            <Link
              to="/services"
              className="block hover:text-blue-700 hover:transition-all hover:duration-100"
            >
              Mobile App Development
            </Link>
            <Link
              to="/services"
              className="block hover:text-blue-700 hover:transition-all hover:duration-100"
            >
              UI/UX Design
            </Link>
            <Link
              to="/services"
              className="block hover:text-blue-700 hover:transition-all hover:duration-100"
            >
              Artificial Intelligence
            </Link>
            <Link
              to="/services"
              className="block hover:text-blue-700 hover:transition-all hover:duration-100"
            >
              Blockchain
            </Link>
            <Link
              to="/services"
              className="block hover:text-blue-700 hover:transition-all hover:duration-100"
            >
              Consultation and Support
            </Link>
          </div>
        </div>
        <div className="text-white flex flex-col gap-3">
          <Link to="/work" className="text-xl font-[500] text-blue-700">
            Our works
          </Link>
          <div className="flex flex-col gap-2 ">
            <Link
              to="/work"
              className="block  hover:text-blue-700 hover:transition-all hover:duration-100"
            >
              AI Powered Healthcare Solution
            </Link>
            <Link
              to="/work"
              className="block  hover:text-blue-700 hover:transition-all hover:duration-100"
            >
              Virtual Assistant Integration
            </Link>
          </div>
        </div>
      </div>
      <hr className="bg-gradient-to-r from-blue-500 to-blue-200 my-10" />
      <div className="flex justify-center items-center flex-wrap gap-3">
        <div className="flex items-center">
          <img src={Copyright} alt="Copyright" />
          <p className="text-white ml-2">
            Celestial Crafters 2024 . All rights reserved
          </p>
        </div>
        <div>|</div>
        <div className="flex gap-4">
          {social.map((item, index) => {
            return (
              <a
                href={item.page}
                target="_blank"
                className="border !border-blue-700 rounded-full p-2"
                key={index + item.info}
                rel="noreferrer"
              >
                <div className="text-white text-2xl">{item.icon}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
