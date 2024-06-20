
import React from 'react';
import Rec18 from '../Assets/Rec18.png';
import '../OurWork.css'; 

const OurWork = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className='mwh' style={{ fontSize: 22, textAlign: 'left', marginBottom: 30, fontStyle: 'normal',marginLeft:'100px' }}>Our Work</h2>
          <p className='lead' style={{marginLeft: '100px',textAlign: 'left',fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
            uptate velit esse cillum dolore eu fugiat nulla pariatuLorem ipsum <br />
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br />
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />
            aliquip ex ea commodo consequat. Duis aute irure dolor in <br />
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br />
            pariatur. r.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img src={Rec18} alt='' className='img-responsive' style={{ marginLeft: '50px' }} />
        </div>
      </div>
    </div>
  );
};

export default OurWork;

