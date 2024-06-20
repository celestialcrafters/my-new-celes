import React from 'react';
import Rec2 from '../Assets/Rec2.png';

const Try = () => {
  return (
    <div className="mobile-container">
      <div className="row featurette">
        <div className="col-md-5 order-md-8">
          <h2 className="mwh" style={{ fontSize: '36px', textAlign: 'left', marginTop: '1rem', marginBottom: '0.5rem',marginLeft: '50px' }}>Waterfall, Agile & Scrum</h2>
          <p className="leadl" style={{ textAlign: 'left',  fontSize: '16px', marginLeft: '50px' }}>Our company offers premier project management services, adept in employing Agile, Scrum, and Waterfall methodologies to ensure your projects are delivered on time, within budget, and to the highest quality. We offer a versatile and effective approach to managing diverse projects across various industries. Our experienced project managers and teams are committed to guiding your projects to successful completion, ensuring they meet your strategic goals and exceed expectations.</p>
        </div>
        <div className="col-md-5 order-md-1" >
          <img src={Rec2} alt='' style={{ height: 'auto',maxWidth: '120%',marginLeft: '50px' }} />
          <div className='devt' style={{ padding: '1rem', backgroundColor: '#bfb9b9', borderRadius: '5px',maxWidth: '120%', marginLeft: '50px' }}>
            <h4 className='h2d' style={{ fontSize: '1rem', color: '#000', marginBottom: '0.5rem' }}>Project Management</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Try;

