import React from 'react';
import Ellipse9 from '../Assets/Ellipse9.png';
import '../cele.css';
import '../Contactstyle.css';

const PortoPage = () => {
  return (
    <> 
    <div className="container">
      <div className="image-container">
        <img src={Ellipse9} alt="" className="image" />
        <div className="overlay1"></div>
        <div className="text-container">
          <div style={{ textAlign: 'left' }}>
            <h1 className="center-text2" style={{ color: '#CD9BFF', marginBottom: '5px', marginLeft: '20px',display: 'flex', }}>Portfolio</h1>
            <p  style={{ color: '#ffffff', fontFamily: 'Arial', fontSize: '18px', maxWidth: '100%', margin: '0 auto', marginLeft: '20px',marginTop: '1px' }}>
              Welcome to our portfolio, where innovation meets purpose.
              Explore our diverse  <br />
              range of projects and witness the transformative impact of technology in <br />
              action.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PortoPage;


