
import React from 'react';
import { Header, Footer  } from '../Components';
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <div className='StudentHome'>
        <Header/>
        <div className='main'>
            <div className='stdInfo'>
                <div className='info_logout'> 
                    <h3>Welcome, Kajamohan</h3> 
                    <button className='logoutbutton' >Logout</button>
                </div>
                
                
            </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
