
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png'
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Twelfth navbar example" style={{display: 'flex',   }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">
          <img  src={Logo} alt='' className='nav-link'  style={{marginRight: '160px'}} />
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ marginRight: '50px', color: 'black', letterSpacing: '' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ marginRight: '50px', color: 'black', letterSpacing: '' }}>About us</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" style={{ marginRight: '50px', color: 'black', letterSpacing: '' }}>Our Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ marginRight: '50px', color: 'black', letterSpacing: '' }}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" style={{ marginRight: '50px', color: 'black', letterSpacing: '' }}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link" style={{ marginLeft: '50px', color: '#000000', letterSpacing: '' }}>Start A Project</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
