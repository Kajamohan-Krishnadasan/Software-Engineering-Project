import React from 'react';
import './Footer.css';

const Footer = () => {

  const currentYear = ()=> {
    return 2022;
  }
   
  return (
    <div className='footer'>
      <div className='fun'>
        <h3 className='cpright'>&copy; Copyright {currentYear()} UNIVERSITY OF JAFFNA.</h3>
      </div>
      
    </div>
  )
}

export default Footer
