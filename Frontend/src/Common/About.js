import React from 'react'
import Ellipse6 from '../Assets/Ellipse6.png'
import Ellipse7 from '../Assets/Ellipse7.png'
import Ellipse8 from '../Assets/Ellipse8.png'

const About = () => {
  return (
    <div className='row' style={{marginTop: '50px', marginBottom: '80px'}}>

      <div className="col-lg-4" style={{paddingLeft: '60px', paddingTop: '70px',color: 'black',fontWeight: '500',fontSize: 32,letterSpacing: 0.64}}>
         <h2  style={{ }}>About Us</h2>
         <p className='' style={{ width: '100%',marginTop: '20px', color: 'black',fontSize: 16,fontFamily: 'Roboto',wordWrap: 'break-word', fontWeight: '400'}}>Lorem ipsum dolor sit amet consectetur.<br />
          A malesuada tempor sit vitae. A magna<br />
           commodo libero magna sagittis. Suscipit<br />
            non sagittis id etiam non tortor. Est<br /> 
            cras fringilla proin scelerisque <br />
            habitasse.</p>
       </div>

       <div className="col-lg-2">
       <img src={Ellipse6} alt='' style={{  width: '90%', height: '90%',borderRadius: 9999 }}  />
       </div>

       <div className="col-lg-2">
       <img src={Ellipse7} alt='' style={{   width: '60%', height: '60%' ,borderRadius: 9999  }}  />
       </div>

       <div className="col-lg-2">
       <img src={Ellipse8} alt='' style={{    width: '90%', height: '90%', marginTop: '50px' ,borderRadius: 9999 }}  />
       </div>

    </div>
  )
}

export default About
