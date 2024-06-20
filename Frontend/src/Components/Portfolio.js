import React from 'react'
import RecentWork from '../Utils/RecentWork'
import System from '../Utils/System'
import Ai from '../Utils/Ai'
import PortoPage from '../Utils/PortoPage'
import TextNote from '../Utils/TextNote'

const Portfolio = () => {
  return (
    <div className=''>
      <div style={{
        overflow: 'hidden'
            }}>
      <PortoPage />
      <div style={{marginRight: 30,marginLeft: '30px'  }}>
      <TextNote />
      <RecentWork />
      <System />
      <Ai />
      </div>
    
      </div>
     
    </div>
  
  )
}

export default Portfolio
