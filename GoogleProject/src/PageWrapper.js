import React, { useState } from 'react';
import Header from './Components/Header';
import Logo from './Components/Logo';
import source1 from './resources/sidehustle.png';
import source3 from './resources/voiceSearch.png';
import source4 from './resources/searchIcon.jpg';


import appsIcon from './resources/appsIcon.png'

import Input from './Components/Input';
import Button from './Components/Buttons';
import Footer from './Components/Footer';
import AppDropDown from './Components/AppDropDown';
import './styles.css';


function PageWrapper(){
 
    return (
        <div >
            
            <Header source={appsIcon} />
            <div id='dropdown-wrapper'> 
              <AppDropDown />
            </div>
            <div id='page-container'>
              
              <Logo source={source1} />
              <Input source1st={source3} source2nd={source4} />
             
              <a href='https://www.google.com/'> <Button btnclass='bodyButton1' text='Google Search' /> </a>
              <a href='https://www.google.com/doodles'> <Button  btnclass='bodyButton2' text="I'm Feeling Lucky" /> </a>
              
              <Footer /> 
            </div>
           
          
           
        </div>
    )
}

export default PageWrapper;