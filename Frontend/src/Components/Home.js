import React from 'react'
import HomeNav from '../Common/HomeNav'
import OurWork from '../Common/OurWork'
import Wedo from '../Common/Wedo'
import OurClients from '../Common/OurClients'
import About from '../Common/About'
import OurDev from '../Common/OurDev'
import OurEngagement from '../Common/OurEngagement'
import Request from '../Common/Request'
import Testimonial from '../Testimonial/Testimonial'


const Home = () => {
  return (
    <div className=''>
      <div style={{
  overflow: 'hidden'
      }}>
     <Request />
      <div style={{marginRight: 10}}>
      <About />
      <OurWork />
      <Wedo />
      <OurDev />
      <OurClients />
      <OurEngagement />
    
      </div>
      <Testimonial />

      </div>
    
    </div>
  )
}

export default Home
