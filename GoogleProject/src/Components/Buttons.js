import React, {useContext} from 'react';
import { ThemeContext } from '../context/Theme';



function Button (props){
    const theme = useContext(ThemeContext) // theme context
    const darkMode = theme.state.darkMode // get the current theme

    return (
        <div>
            <button className={props.btnclass} style={{backgroundColor: darkMode ? "#333" : "#f8f9fa", color: darkMode ? "#fff" : "#202124", cursor: 'pointer'}}> {props.text}</button> 
        </div>
    )
}

export default Button;