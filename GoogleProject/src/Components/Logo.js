import React, { useState } from 'react';
import '../styles.css';


function Logo (props){

    return (
        <div id='logo-container'>
            <img id='logo' src= {props.source} alt={props.altText} />
        </div>
    )
}

export default Logo;