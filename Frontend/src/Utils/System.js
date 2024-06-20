import React from 'react'
import tech2 from '../Assets/tech2.png'
import { Link } from 'react-router-dom'

const System = () => {
  return (

    <div style={{marginBottom: 20,height: '100%' }}>

    <div className="mobile">
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className='mwh' style={{ textAlign: 'left', marginBottom: '1rem',marginLeft: '60px' ,color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 2, letterSpacing: 0.20,}}>Renewable Energy Monitoring System</h2>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '60px',width: '100px', whiteSpace: 'nowrap'  }}>
            <h5 style={{ marginRight: '10px', color: '#6B6B6B',fontSize: 12,fontWeight: '400',  }}>Energy Management</h5>
            <h6 style={{ marginBottom: '4', marginLeft: '10px',color: '#6B6B6B',fontSize: 12,fontWeight: '400' }}>05 January 2023</h6>
        </div>
        <p style={{ color: 'black',marginBottom: '30px',marginTop: '20px', fontSize: 12, letterSpacing: 0.24,  lineHeight: 2, marginLeft: '60px' , width: '300px',textAlign: 'left'}}> 
        Our team designed and implemented a renewable energy monitoring system<br /> to 
        track and optimize energy production from solar and wind sources. The <br />system
         provides real-time data analytics, predictive maintenance alerts, and <br />
         remote monitoring capabilities,empowering energy providers to maximize <br />
         efficiency and reduce carbon emissions. 
                </p>
                <Link to="/about">
                    <button style={{ color: 'white',marginRight: '500px', fontSize: 16, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 2, letterSpacing: 0.20, wordWrap: 'break-word', background: 'rgba(116.46, 65.05, 167.88, 0.47)', width: '100px', border: 'rgba(116.46, 65.05, 167.88, 0.47)', height: '10%',borderRadius: 5, overflow: 'hidden', gap: 10, }}>Read more</button>
                </Link>
      </div>
      <div className="col-md-5 order-md-1">
        <img src={tech2} alt='' className='img6' style={{ height: 'auto' , marginLeft: '30px'}} />
       
      </div>
    </div>
  </div>
</div>




  )
}

export default System
