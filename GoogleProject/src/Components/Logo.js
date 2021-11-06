import React from 'react';
import '../styles.css';


function Logo ({showImage, source, value}){
    

    return (
        <div id='logo-container'>
            {showImage ? 
                <img id='logo' src= {source} alt="" />
                : (
                    <div id='logo-container'>
                        <h1 style={{marginTop: '10rem'}}>{value}</h1>
                    </div>
                )
            }
            
        </div>
    )
}

export default Logo;