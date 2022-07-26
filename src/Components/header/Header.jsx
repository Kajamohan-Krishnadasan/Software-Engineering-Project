import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='nav'>
      <dev id='left'>
        <img src={logo} alt='University Logo'/>
      </dev>
      
      <div id='right'>
        <h1 >Welcome to Student Document Approval System</h1>
      </div>
      
      
    </div>
  )
}

export default Header
