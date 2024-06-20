import React from 'react'
import tech3 from '../Assets/tech3.png'
import { Link } from 'react-router-dom'

const Ai = () => {
  return (
    <div>

<div style={{marginBottom: 20,height: '100%' }}>

<div className="mobile" style={{marginBottom: '60px'}}>
<div className="row featurette">
  <div className="col-md-7 order-md-2">
    <h2 className='mwh' style={{ textAlign: 'left', marginBottom: '1rem',marginLeft: '60px' ,color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 2, letterSpacing: 0.20,}}>AI Powered Healthcare Solution</h2>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '60px',width: '100px', whiteSpace: 'nowrap'  }}>
        <h5 style={{ marginRight: '10px', color: '#6B6B6B',fontSize: 12,fontWeight: '400',  }}>Healthcare Technology</h5>
        <h6 style={{ marginBottom: '4', marginLeft: '10px',color: '#6B6B6B',fontSize: 12,fontWeight: '400' }}>12 September 2022</h6>
    </div>
    <p style={{ color: 'black',marginBottom: '40px',marginTop: '20px', fontSize: 12, letterSpacing: 0.24,  lineHeight: 2, marginLeft: '60px' , width: '300px',textAlign: 'left'}}> 
    We developed an AI-powered healthcare solution to address the unique<br />
    challenges faced by healthcare providers in Africa. Leveraging machine<br /> learning algorithms, the platform streamlines patient care, improves diagnosis <br/>
    accuracy, and optimizes resource allocation. 
            </p>
            <Link to="/about">
            <button style={{ color: 'white',marginRight: '500px', fontSize: 16, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 2, letterSpacing: 0.20, wordWrap: 'break-word', background: 'rgba(116.46, 65.05, 167.88, 0.47)', width: '100px', border: 'rgba(116.46, 65.05, 167.88, 0.47)', height: '10%',borderRadius: 5, overflow: 'hidden', gap: 10, }}>Read more</button>
        </Link>


  </div>

  
  <div className="col-md-5 order-md-1">
    <img src={tech3} alt='' className='img6' style={{ height: 'auto' , marginLeft: '30px'}} />
   
  </div>
  
</div>

</div>

<div className="container">
      <div className="row justify-content-end">
        <div className="col-md-auto">
          <Link to="/contact">
            <button className="btn btn-primary" style={{  marginLeft: '200px',fontSize: 16, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 2, letterSpacing: 0.20, wordWrap: 'break-word',  width: '100px',  color: 'black', height: '100%', background: '#ffffff',borderRadius: 5, overflow: 'hidden', gap: 10, }}>
              Previous
            </button>
          </Link>
        </div>
        <div className="col-md-auto">
          <Link to="/project">
            <button className="btn btn-secondary" style={{  marginLeft: '10px',fontSize: 16, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 2, letterSpacing: 0.20, wordWrap: 'break-word', background: 'rgba(116.46, 65.05, 167.88, 0.47)', width: '100px', border: 'rgba(116.46, 65.05, 167.88, 0.47)', height: '100%',borderRadius: 5, overflow: 'hidden', gap: 10, }}>
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>


</div>



    </div>
  
  )
}

export default Ai
