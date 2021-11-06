import React, {useState} from 'react';
import '../styles.css';


function Input(props){
  
   return (
       <div id='input-container'>
          <input id='input-field' type='text' />
          <img id='voice-search-icon' src={props.source1st} alt={props.altText1st} />
          <img id='search-icon' src={props.source2nd} alt={props.altText2nd} />
         
       </div>
   )
}

export default Input;