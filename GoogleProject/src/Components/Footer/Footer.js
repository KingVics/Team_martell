import React, {useContext} from 'react';
import { ThemeContext } from '../../context/Theme';

import  './Footer.css';

function Footer(){
    const theme = useContext(ThemeContext); // Destructuring the context
    const darkMode = theme.state.darkMode; // Destructuring the state for darkMode

 return (
    <div className="footer" style={{backgroundColor: darkMode ? 'black' : "#f2f2f2"}}>
        <div className="footer__content">
            <p>Nigeria</p>
            <hr />
            <div className="bottom__footer__content">
                <div className="section__one">
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Advertising</a></li>
                        <li><a href="">Business</a></li>
                        <li><a href="">How Search works</a></li>
                    </ul>
                </div>
                <div className="section__two">
                    <p>Carbon neutral since 2007</p>
                </div>
                <div className="section__three">
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </div>
            </div>
         </div>
         
     </div>
 )
}

export default Footer;