import React, {useState} from 'react';
import '../styles.css';


function Header(props){

  return (
      <header>
          <nav >
              <a className='menu-item' href="_blank" >Gmail</a>
              <a  className='menu-item' href="_blank" >Images</a>
              <img id='dropdownMenu' src={props.source} alt={props.altText} />
              <button id='headerButton' >Sign in</button> 
          </nav>
      </header>
  )
}

export default Header;