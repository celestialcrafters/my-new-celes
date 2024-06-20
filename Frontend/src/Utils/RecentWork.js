import React from 'react'
import tech1 from '../Assets/tech1.png'
import { Link } from 'react-router-dom'

const RecentWork = () => {
  return (
    <div style={{marginBottom: 20,height: '100%' }}>
    <h1 style={{color: 'black', fontSize: 36, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 0, letterSpacing: 0.36, wordWrap: 'break-word',marginBottom: '40px'}}>Our Recent work</h1>
    <div className="mobile">
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className='mwh' style={{ textAlign: 'left', marginBottom: '1rem',marginLeft: '60px' ,color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 2, letterSpacing: 0.20,}}>E-Commerce Platform Redesign</h2>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '60px',width: '100px', whiteSpace: 'nowrap'  }}>
            <h5 style={{ marginRight: '10px', color: '#6B6B6B',fontSize: 12,fontWeight: '400',  }}>Digital Commerce</h5>
            <h6 style={{ marginBottom: '4', marginLeft: '10px',color: '#6B6B6B',fontSize: 12,fontWeight: '400' }}>02 March 2023</h6>
        </div>
        <p style={{ color: 'black',marginBottom: '40px',marginTop: '20px', fontSize: 12, letterSpacing: 0.24,  lineHeight: 2, marginLeft: '60px' , width: '300px',textAlign: 'left'}}> 
                    Our team collaborated to redesign an e-commerce platform catering to<br/> diverse markets across Africa. We focused on improving user experience,<br /> enhancing accessibility, and integrating localized payment options.
                </p>
                <Link to="/about">
                    <button style={{ color: 'white',marginRight: '500px', fontSize: 16, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 2, letterSpacing: 0.20, wordWrap: 'break-word', background: 'rgba(116.46, 65.05, 167.88, 0.47)', width: '100px', border: 'rgba(116.46, 65.05, 167.88, 0.47)', height: '10%',borderRadius: 5, overflow: 'hidden', gap: 10, }}>Read more</button>
                </Link>
      </div>
      <div className="col-md-5 order-md-1">
        <img src={tech1} alt='' className='img6' style={{ height: 'auto' , marginLeft: '30px'}} />
       
      </div>
    </div>
  </div>
</div>


  )
}

export default RecentWork
