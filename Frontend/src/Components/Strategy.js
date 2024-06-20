import React from 'react'
import Rec9 from '../Assets/Rec9.png'


const Strategy = () => {
  return (
   <div className="mobile-container">
   <div className=""> 
   <div className="row featurette">
   <div className="col-md-5 order-md-8">
   <h2 className="mwh"  style={{ fontSize: 30, marginLeft: '50px',textAlign: 'left',marginTop: 50,}}>Operations, HR,Strategy & IT </h2>
   <p className="leadl" style={{ textAlign: 'left',  fontSize: '14px', marginLeft: '50px' }}>Our company offers comprehensive consultation and support services, tailored <br />
    to empower your business with the insights, strategies, and solutions needed to<br />
     navigate today's complex business landscape. Our team of experienced <br />
     consultants is dedicated to providing expert advice and continuous support<br />
      across various domains, ensuring your business not only meets its current<br />
       challenges but also positions itself for future success.<br />
   We stand by your side during the implementation of new strategies, processes,<br />
    or technologies, providing hands-on support to ensure a seamless transition<br />
     and successful adoption.</p>
   </div>
  
   <div className="col-md-5 order-md-1" >
   <img src={Rec9} alt='' style={{ height: 'auto',maxWidth: '120%',marginLeft: '50px' }} />
   <div className='devs' style={{ padding: '1rem', backgroundColor: ' #E0E0E0', borderRadius: '5px',maxWidth: '120%', marginLeft: '50px', marginBottom: '40px'}}>
     <h4 className='h2d' style={{ fontSize: '1rem', color: '#000', marginBottom: '0.5rem' }}>Consultation & Support</h4>
   </div>
 </div>

 </div>
         
   
   </div>
   </div>
   
  )
}

export default Strategy
