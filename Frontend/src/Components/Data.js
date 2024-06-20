import React from 'react';
import Rec6 from '../Assets/Rec6.png'

const Data = () => {
  return (
    <div className="mobile-container">
    <div className="row featurette">
    <div className="col-md-7 order-md-2">
    <h2 className='mwh' style={{  fontSize: '26px', textAlign: 'left', marginBottom: '30px', fontStyle: 'normal', marginLeft: '100px'}}>Descriptive,Diagnostic & Predictive</h2>
      <p className='lead' style={{ marginRight: '100px', textAlign: 'left', fontSize: '16px', marginLeft: '100px' }}>Our company excels in providing comprehensive data analytics services,<br />
       leveraging cutting-edge tools and methodologies to transform raw data into<br />
        actionable insights. Our team of data experts specializes in collecting,<br />
         processing, and analyzing vast datasets to help you make informed decisions,<br />
          optimize operations, and uncover new opportunities.</p>
    </div>
   

    <div className="col-md-5 order-md-1">
          <img src={Rec6} alt='' className='img-responsive' style={{ marginLeft: '100px', maxWidth: '100%' }} />
          <div className='devd' style={{ padding: '1rem', backgroundColor: ' #99b5ce', borderRadius: '5px', marginTop: '', maxWidth: '100%', marginLeft: '100px' }}>
            <h4 className='h2d' style={{ fontSize: '1rem', color: '#000', marginBottom: '0.5rem', textAlign: 'center' }}>Data Analytics</h4>
          </div>
        </div>

  </div>
    </div>
   
  );
}

export default Data;
