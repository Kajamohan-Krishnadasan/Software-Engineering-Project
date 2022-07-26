import React from 'react';
import './App.css';

import { Login, Header, Footer  } from './Components';

const App = () => {
  return (
    <div className='App'>
      <div className='BGround'> 
        <Header/>
        <Login/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
