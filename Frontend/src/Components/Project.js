import React from 'react'
import { Link } from 'react-router-dom';

const Project = () => {
  return (

<div style={{width: '100%', height: '5.5%', background: 'rgba(218.18, 234.81, 210.35, 0.28)'}} >
    <div className="row" >
    <h2  style={{ fontSize: 24, textAlign: 'left', marginLeft: 20, marginBottom: 20, marginTop: 20}}>Lets get Connected </h2>
    <div className="col-lg-4">

   
      <p  style={{ fontSize: 12, textAlign: 'left',color: '#000000', marginLeft: 20,}}>Embark on a new project with us, we aim to efficiently achieve our<br /> objectives through collaborative effort and innovation. </p>
    </div>
    <div className="col-lg-4" style={{ marginBottom: '25px'}}>
    <Link to="/project">
    <button style={{ backgroundColor: '#501AEA', borderRadius: 10,width: '50%', height: '90%', color: '#ffffff',marginBottom: 20}}>Start a project</button>
  </Link>
    </div>
    <div className="col-lg-4">
    <Link to="/contact" className="nav-link" style={{  }}>Contact Us</Link>
    </div>
  </div>
    </div>
  )
}

export default Project
