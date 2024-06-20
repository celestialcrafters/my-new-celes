import React from 'react'
import Rec7 from '../Assets/Rec7.png'

const Tech = () => {
  return (
    <div className="mobile-container">
    <div className="row featurette">
    <div className="col-md-5 order-md-8">
    <h2 className="mwh"  style={{ fontSize: '30px', textAlign: 'left', marginTop: '1rem', marginBottom: '0.5rem',marginLeft: '50px'}}>Technical, On-page & Off-page SEO</h2>
    <p className="leadl" style={{ textAlign: 'left',  fontSize: '14px', marginLeft: '50px' }}>  We believe in transparency and accountability. Our regular performance<br />
     reports provide insights into your SEO campaign's progress, including rankings,<br />
      traffic, and conversions, allowing us to refine our strategies for continued<br /> improvement.<br />
    By partnering with us for your SEO needs, you can expect a strategic approach <br />
    that not only enhances your search engine rankings but also contributes to <br />
    achieving your overall business goals. </p>
    </div>
    <div className="col-md-5 order-md-1" >
    <img src={Rec7} alt='' style={{ height: 'auto',maxWidth: '120%',marginLeft: '50px' }} />
    <div className='devte' style={{ padding: '1rem', backgroundColor: ' #E0E0E0', borderRadius: '5px',maxWidth: '120%', marginLeft: '50px' }}>
      <h4 className='h2d' style={{ fontSize: '1rem', color: '#000', marginBottom: '0.5rem' }}>Search Engine  Optimization</h4>
    </div>
  </div>

  </div>
    </div>
 
  )
}

export default Tech
