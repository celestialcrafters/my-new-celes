import React from 'react'
import "../PagesStyles/response.css"
import { Link } from 'react-router-dom'
export default function Feedback() {

  return (
    <div className='response'>
        <h2>Your Submission  is received !</h2>
        <p>Our team will reach out to you soon</p>
        <p>Thank you</p>
       <Link to="/"> <button>Back to Home Page</button></Link> 
    </div>
  )
}
