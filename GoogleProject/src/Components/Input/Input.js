import React from 'react';
import './Input.css';

import source3 from '../resources/voiceSearch.png';
import source4 from '../resources/searchIcon.jpg';


function Input(props){
   return (
      <div id='input-container'>
         <input id='input-field' type='text' />
         <img id='voice-search-icon' src={source3} alt={props.altText1st} />
         <img id='search-icon' src={source4} alt={props.altText2nd} />
      </div>
   )
}

export default Input;