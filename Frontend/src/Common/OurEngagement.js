
import React from 'react';
import { Link } from 'react-router-dom';
import Rec26 from '../Assets/Rec26.png';
import lorem from '../Assets/lorem.png';
import '../Engagement.css';

const OurEngagement = () => {
  return (
    <div className='container'>
      <h2 className='title'>Our Recent Engagement</h2>
      <div className='row'>
        <div className='col-lg-4'>
          <img src={Rec26} alt='' className='image' />
          <div className='content'>
            <img src={lorem} alt='' className='icon' />
            <Link to="/about us">
              <button className='button'>READ MORE</button>
            </Link>
          </div>
        </div>
       
        <div className='col-lg-4'>
        <img src={Rec26} alt='' className='image' />
        <div className='content'>
          <img src={lorem} alt='' className='icon' />
          <Link to="/about us">
            <button className='button'>READ MORE</button>
          </Link>
        </div>
      </div>

      <div className='col-lg-4'>
      <img src={Rec26} alt='' className='image' />
      <div className='content'>
        <img src={lorem} alt='' className='icon' />
        <Link to="/about us">
          <button className='button'>READ MORE</button>
        </Link>
      </div>
    </div>

      </div>
    </div>
  );
};

export default OurEngagement;
