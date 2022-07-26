
import React from 'react';
import { Header, Footer  } from '../Components';
import './Home.css';

const name = "User Name";
const Home = () => {
  return (
    <div className='Home'>
      <div className='StudentHome'>
        
        <Header/>
        
        <div className='main'>
          <div className='stdInfo'>
            <div className='info_logout'> 
              <span className='h3'>Welcome, {name}</span> 
              <button className='logout-button' onClick={()=>{window.location.href= "/"}}>Logout</button>
            </div>
            <div className="request">
              <button className='btn'>Make a request</button>
              <button className='btn'>Ongoing requests</button>
              <button className='btn'>Approved requests</button>
              <button className='btn'>Rejected requests</button>
            </div>

          </div>
        </div>

        <Footer/>
      
      </div>
    </div>
  )
}

export default Home
