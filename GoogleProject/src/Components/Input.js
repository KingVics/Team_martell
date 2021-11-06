import React, {useContext} from 'react';

import '../styles.css';

import source3 from '../resources/voiceSearch.png';
import { ThemeContext } from '../context/Theme';


function Input({handleValue}){
   const theme = useContext(ThemeContext); // Destructuring the context
   const darkMode = theme.state.darkMode; // Destructuring the state for darkMode

   return (
      <div id='input-container'>
         <input id='input-field' type='text' style={{backgroundColor: darkMode ? 'transparent' : '#fff', color: darkMode ? "#fff" : '#333'}} onChange={handleValue}/>
         <img id='voice-search-icon' src={source3} alt="" />
         {/* <img id='search-icon' src={source4} alt={props.altText2nd} /> */}
         <svg id='search-icon' aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill={darkMode ? "#fff" : "currentColor"}>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"/></g>
         </svg>
      </div>
   )
}

export default Input;