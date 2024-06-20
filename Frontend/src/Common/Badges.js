import React from 'react'

const Badges = () => {
  return (
    <div  style={{ background: 'rgba(65.18, 56.94, 115.81, 0.04)'}}>
    <h1 style={{textAlign: 'center',  color: 'black',marginBottom: '30px', fontSize: 22,paddingTop: '150px', fontWeight: '400',}}>Our Badges/Awards/Achievements</h1>
    <div className="row" style={{marginLeft: '150px'}}>
    <div className="col-lg-2">
   <img src='' style={{height: '100px', width: '140px'  }} />
    </div>

    <div className="col-lg-2">
    <img src='' alt='' style={{ height: '100px', width: '140px'   }} />
    </div>

    <div className="col-lg-2">
    <img src='' alt='' style={{  height: '100px', width: '140px'  }}  />
    </div>

    <div className="col-lg-2">
    <img src='' alt='' style={{  height: '100px', width: '140px'  }}  />
    </div>

    <div className="col-lg-2">
    <img src='' alt='' style={{ height: '100px', width: '140px'   }}  />
    </div>

  </div>
     
    </div>
  )
}

export default Badges
