import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import './App.css'
import Logo from './Components/Logo';
import source1 from './resources/sidehustle.png';
import source3 from './resources/voiceSearch.png';
import source4 from './resources/searchIcon.jpg';


import appsIcon from './resources/appsIcon.png'

import Input from './Components/Input';
import Button from './Components/Buttons';
import AppDropDown from './Components/AppDropDown';
import './styles.css';
import Home from './Components/Home/Home';


function PageWrapper(){
 
    return (
        <div className="app">         
            <Header source={appsIcon} />
            <Home/>
            <div id='dropdown-wrapper'> 
              {/* <AppDropDown /> */}
            </div>
            <Footer /> 
        </div>
    )
}

export default PageWrapper;