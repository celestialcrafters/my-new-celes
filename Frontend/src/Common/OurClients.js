import React from 'react'
import Rec21 from '../Assets/Rec21.png'
import Rec22 from '../Assets/Rec22.png'
import Rec23 from '../Assets/Rec23.png'
import Rec24 from '../Assets/Rec24.png'
import Rec25 from '../Assets/Rec25.png'

const OurClients = () => {
  return (
    <div >
    <h1 style={{textAlign: 'center', paddingBottom: '30px', color: 'black', fontSize: 32, paddingTop: '30px', fontWeight: '400',}}>Our  Clients/Partners</h1>
    <div className="row" style={{marginLeft: '150px'}}>
    <div className="col-lg-2">
   <img src={Rec21} alt='' style={{height: '100px', width: '140px'  }} />
    </div>

    <div className="col-lg-2">
    <img src={Rec22} alt='' style={{ height: '100px', width: '140px'   }} />
    </div>

    <div className="col-lg-2">
    <img src={Rec23} alt='' style={{  height: '100px', width: '140px'  }}  />
    </div>

    <div className="col-lg-2">
    <img src={Rec24} alt='' style={{  height: '100px', width: '140px'  }}  />
    </div>

    <div className="col-lg-2">
    <img src={Rec25} alt='' style={{ height: '100px', width: '140px'   }}  />
    </div>

  </div>
     
    </div>
  )
}

export default OurClients
