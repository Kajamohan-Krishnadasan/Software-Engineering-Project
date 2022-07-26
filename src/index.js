import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import App from './App';
import './index.css';

import Home from "./Pages/Home";


export default function HomePage(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element= {<App/>}/>
            <Route path = "/home" element= {<Home/>}/>
        </Routes>
            
        </BrowserRouter>
    );
}

ReactDOM.render(<HomePage />, document.getElementById('root'));