import React from 'react';
import Data from './Data';
import Tech from './Tech';
import Design from './Design';
import Strategy from './Strategy';
import Try from './Try';
import Mobile from './Mobile';
import Project from './Project';
import DemoPage from './DemoPage';

const OurService = () => {
  return (
    <div>
    <div style={{
      overflow: 'hidden',
          }}>
    <DemoPage />
      <div className=''  style={{marginRight: 5,  background:  '#f2fdef', marginLeft: '5px' }}>
       <Mobile />
       <Try />
      <Data />
      <Tech />
      <Design />
      <Strategy />

      
      </div>

      <div>
  
      <div className="row">
      <h2 style={{ fontSize: 22, marginLeft: '50px',textAlign: 'left',marginTop: 20, marginBottom: 20 }}>What we deliver</h2>
      <div className="col-lg-4">
  
     <img src='https://s3-alpha-sig.figma.com/img/1af6/d411/f1e29c8f6066c99d2e89443a9e232e33?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oo6cvGJcNWy70mfntnNkirOeLMk78JrjuvjHN5Qyl0~6pnLtxxYct2rE5WN5YlJ-pY3TVjSzJ6GThMdsc94SGbhGt47Hio1ASrXpgL8jJ~-Wtjk23DUGiwG44iz9hdmos~h1WfhJL8r05hXJB7A2HcfJP4mVx1NPcR4SEbOS2vTWXSTHTRF07iKTc3PP9BcPOhB9w-bzybH8yrvt~9D8av-MIFEBwArr59BPgZE-PCbyQjbnbucrngWLlHIM5PvCIw3IECwDgE3cu1kflC-TuOTO9nausYx5E0Y7B8GHwYljdGhB25UE5M-CdHJu5G0JRHqQXXd9iziesO762S8rnA' style={{ width: '30%', height: '30%', borderRadius: '9999', marginRight: '50px' }} />
        <h2  style={{ fontSize: 18,  marginRight: '80px'}}>Accurracy</h2>
        <p className='delp'>We ensure precise and<br /> error-free solutions to me <br />our clients requirements.</p>
      </div>
      <div className="col-lg-4">
      <img src='https://s3-alpha-sig.figma.com/img/f19b/3ce5/9a1692b92c86e0f70895fc5874717755?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hlvLQsBW8GZGN~FnuWpNsltm-KmGNxSByFQFR1LGHBU97Itkem50fTWfvPq9tYsnwo30WFZZicW8rNcJMbVUIwbgXuH88j0L5lw3Wu~kZR1ssfnJLQaf3XL1G7Ict6uBH7tHcF4r8RT4ZbnpJK7js-fEphIeIrmbOV7q88uGEPc-wBC3ARGlRHxqLuHm5B3GEY-h8e87uiZ9p05ZmXghv3tI9T4n9bL52ehRt2Ie1cZFGHUHtxOWRwQGeHhsqvf57tRAidKJXMtye39C~367UMcSvr43luj8DnIQWJPcg8DFXcGIgDqbB86z3jw9XYUcmBrn~XQrVHdns4am7KHO4Q__' alt=''  style={{ width: '15%', height: '30%', borderRadius: '9999', marginRight: '50px' }}  />
        <h2  style={{ fontSize: 18, marginRight: '80px'}}>Timeliness</h2>
        <p className='del'>We prioritize delivering our<br /> products/services on schedule,<br /> meeting deadlines consistently</p>
      </div>
      <div className="col-lg-4">
      <img src='https://s3-alpha-sig.figma.com/img/1585/717e/35e3dcc24b50d59d4783ed12f78227da?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJDbBMpyeUGXxX9eY5fgPBgsLbhsVjN1hp5lj8wetHfGALI82Ooj7fXiJJMwR4wUUacuirUOQZwvDHBw38gKUHJn3lKMSveJ~pHtVIKs35ytnf0PVh-2aEQnBrnOYO~OgHWtWR3plRU9DX0vGMk9bXtNTF62myEjxQKAPDm1MKNBIbkJhh43Cqs0wKz32BglBWWyKTfuHnNdC02Y4O9JI0RjsN0ICVXuolnaqsyy-c49taO1O2YNnmELf4~-XGkvacHTanv7-KE5kXix3TXRRmJLB-T8dWP-3eLmUExW9n~bfc0-g9tXbaaKIwIJI1AdQmpOuJma-jmb6kUH-EJq8A__' alt='' style={{ width: '15%', height: '30%',borderRadius: '9999',  marginRight: '50px' }}  />
        <h2  style={{ fontSize: 20, marginRight: '50px' }}>Excellence</h2>
        <p className='del'>We strive for excellence in all aspects<br /> of our work, aiming to exceed our<br /> clients expectations with every delivery.</p>
      </div>
    </div>
       
      </div>

      
      <Project /> 
      
    </div>
    </div>
  );
}

export default OurService;
