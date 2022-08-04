import React from 'react';

import {Route, BrowserRouter, Routes} from 'react-router-dom';

const NewApp = () => {
  return (
    <div className='App'>
        <BrowserRouter>
                <Routes>
                    <Route path='/Make-a-Request' element={logo}/>
                    <Route path='/Ongoing-Request' element={logo}/>
                    <Route path='/Approved-Request' element={logo}/>
                    <Route path='/Rejected-Request' element={logo}/>
                </Routes>
            </BrowserRouter>   
    </div>
  )
}

export default NewApp
