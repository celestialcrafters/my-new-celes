import React from 'react'
import Recs from '../Assets/Recs.jpg'
import "../Contactstyle.css"

const DemoPage = () => {
  return (
    <>
    <div className="container">
    <div className="image-overlay">
      <img src={Recs} alt="" className="image" />
      <div className="overlay"></div>
      <h1 className="centerText">Our Service</h1>
    </div>
  </div>
        </>
  )
}

export default DemoPage
