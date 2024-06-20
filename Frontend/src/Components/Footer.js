import React from "react";
import logo from "../Assets/images/Logo.png";
import Tele from "../Assets/images/phoneLogo.png";
import Email from "../Assets/images/EmailLogo.png";
import Location from "../Assets/images/LocationLogo.png";
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedn from "../images/Linkedn.png"
import x from "../images/twitter.png"
import "../PagesStyles/Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="all-footer">
      <div className="footer">
        <div className="firstdivs">
          <img className="Logo" src={logo} alt="" />
          <div>
            <img src={Tele} alt="telephone" />
            <p className="tele">+254-7-27-493-854</p>
          </div>
          <div>
            <img src={Email} alt="mail" />
            <p className="mail">
              inquirecelestialcrafters@gmail.com
            </p>
          </div>
          <div>
            <img src={Location} alt="location" />
            <p className="location">Kenya</p>
          </div>
        </div>
        <div className="seconddivs">
          <Link className="first" to="/about">
            About Us
          </Link>
          <p>
            Welcome to Celestial Crafters Tech Company, a dynamic force in the
            ever-evolving landscape of technology. With a global team of 60
            professionals, we are united by our commitment to shaping the future
            of technology while championing diversity
          </p>
        </div>
        <div className="thirddivs">
          <Link className="first " to="/services">Our Services</Link>
          <p >Web Development</p>
          <p >Project Management</p>
          <p>Data Analytics</p>
          <p >UI/UX Design</p>
          <p >Performance Optimization</p>
          <p >Consultation and Support</p>
        </div>
        <div className="fourthdiv">
          <Link to="/portfolio" className="first">
            Portfolio
          </Link>
          <Link to="">Project 1</Link>
          <Link to="">Project 2</Link>
        </div>
        <div className="fourthdiv">
          <Link to="quickie" className="first">
            Quick links
          </Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/blog">Our Blogs</Link>
        </div>

      </div>
      <div className="lastdivs">
        <p className="copyright">Copy right reserved. Celestial  Crafters @2024</p>
        <div className="social">
          <p>Follow Us</p>
          <div className="logos">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61556365443348&sfnsn=scwspwa&mibextid=RUbZ1f"> <img src={facebook} alt="" /></a>
            <a target="blank" rel="roreferrer" href="https://www.instagram.com/celestialcrafters_tech?igsh=Zjk1eXBkMXgwNjRh"><img src={instagram} alt="" /></a>
            <a href=""><img src={linkedn} alt="" /></a>
            <a href=""> <img src={x} alt="" /></a>



          </div>
        </div>
      </div>
    </div>

  );
}
