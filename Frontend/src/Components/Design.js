import React from 'react'
import Rec8 from '../Assets/Rec8.png'

const Design = () => {
  return (
    <div className="mobile-container">
    <div className="row featurette">
    <div className="col-md-7 order-md-2">
    <h2 className='mwh' style={{  fontSize: '30px', textAlign: 'left', marginBottom: '30px', fontStyle: 'normal', marginLeft: '100px',marginTop: '30px'}}>Interface, Graphics & Experience Design</h2>
      <p className='lead' style={{ marginRight: '100px', textAlign: 'left', fontSize: '16px', marginLeft: '100px' }}>At the core of our services is a commitment to crafting seamless <br/>
      and meaningful user experiences. We delve deep into understanding your users'<br />
       behaviors, needs, and motivations through research, personas, and user <br />
       journey mapping.<br />
      Our dedicated team of UI/UX designers combines creativity with usability<br />
       principles to design interfaces that not only look great but also enhance user<br />
        satisfaction and engagement.</p>
    </div>

    <div className="col-md-5 order-md-1">
    <img src={Rec8} alt='' className='img-responsive' style={{ marginLeft: '100px', maxWidth: '100%' }} />
    <div className='devd' style={{ padding: '1rem', backgroundColor: '  #fb98b5', borderRadius: '5px', marginTop: '', maxWidth: '100%', marginLeft: '100px' }}>
      <h4 className='h2d' style={{ fontSize: '1rem', color: '#000', marginBottom: '0.5rem', textAlign: 'center' }}>UI/UX Design </h4>
    </div>
  </div>

  </div>
    </div>
 
  )
}

export default Design
