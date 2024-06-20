import React from 'react'
import Hero from '../Assets/Hero.png'
import '../cele.css';
import "../Contactstyle.css"
import { Link } from 'react-router-dom'


const Request = () => {
  return (
    <>
    <div className="container">
      <div className="image-container">
        <img src={Hero} alt="" className="hero-image" style={{}} />
        <div className="overlay1"></div>
        <div className="text-container">
          <div style={{ textAlign: 'left' }}>
            <h1 className="center-text2" style={{ color: '#2C585F', fontWeight: 'bold', marginBottom: '30px', marginLeft: '40px',display: 'flex',fontSize: '60px',marginTop: '60px' }}>Celestial Crafters</h1>
            <div className='row' style={{position: 'relative'}}>
            <div className="col-lg-4" style={{marginLeft: '20px',display: 'flex',}}>
            <Link to="/contact">
            <button className='' style={{ backgroundColor: '#10A4F5', borderRadius: 5,width: '220px', height: '60px',marginBottom: 10, marginLeft: '20px', borderBlockColor: '#10A4F5', border: '#10A4F5'}}>Request a Demo</button>
            </Link>
            </div>
           <div  className="col-lg-4" style={{marginLeft: '20px', marginTop: '0px'}}>
           <Link to="/about">
          
            <button className="" style={{ backgroundColor: '#D9D9D9', borderRadius: 5,width: '230px', height: '60px', color: '#000000',marginBottom: 10,marginLeft: '50px'}}>Learn More</button>
            </Link>
           </div>
           </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Request
