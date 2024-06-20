
import React from 'react';
import Rec from '../Assets/Rec.png';
import '../OurWork.css';

const Mobile = () => {
  return (
    <> 
    <div style={{ marginTop: '20px' }}>
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className='mwh' style={{ fontSize: '30px', textAlign: 'left', marginBottom: '30px', fontStyle: 'normal', marginLeft: '100px' }}>Mobile & Web Development</h2>
          <p className='lead' style={{ marginRight: '100px', textAlign: 'left', fontSize: '16px', marginLeft: '100px' }}>
            Our web development services encompass everything from conceptual design<br />
            to full-stack development, ensuring your website not only looks great but also<br />
            performs flawlessly across all devices. We focus on creating intuitive interfaces,<br />
            seamless navigation, and robust functionality to enhance user experience and <br />
            engagement. In the realm of mobile development, we excel in crafting native and cross-<br />
            platform apps that provide a seamless experience on iOS, Android, and other<br />
            mobile platforms. Our mobile solutions are designed for performance,<br />
            scalability, and to provide an immersive user experience that keeps your <br />
            audience connected and engaged.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img src={Rec} alt='' className='img-responsive' style={{ marginLeft: '100px', maxWidth: '100%' }} />
          <div className='dev' style={{ padding: '1rem', backgroundColor: '#E8C4F1', borderRadius: '5px', marginTop: '', maxWidth: '100%', marginLeft: '100px' }}>
            <h4 className='h2d' style={{ fontSize: '1rem', color: '#000', marginBottom: '0.5rem', textAlign: 'center' }}>Software Development</h4>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Mobile;
