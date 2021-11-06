import React, {useState} from 'react';

function Button (props){
   return (
       <div>
           <button className={props.btnclass} > {props.text}
           </button> 
       </div>
   )
}

export default Button;