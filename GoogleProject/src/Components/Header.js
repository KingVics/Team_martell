import React, {useContext} from 'react';
import { ThemeContext } from '../context/Theme';

import '../styles.css';


function Header({show, setShow}){
    const theme = useContext(ThemeContext); // Destructuring the context
    const darkMode = theme.state.darkMode; // Destructuring the state for darkMode

    

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };

    return (
        <header>
            <nav >
                <div>
                <a href="#" onClick={handleClick}>
                    {darkMode ? (
                            <svg aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" fill="#fff">
                                <path d="M15 2h2v5h-2z" fill="#fff"/>
                                <path d="M21.687 8.9l3.506-3.507l1.414 1.415l-3.506 3.506z" fill="#fff"/>
                                <path d="M25 15h5v2h-5z" fill="#fff"/>
                                <path d="M21.687 23.1l1.414-1.414l3.506 3.506l-1.414 1.415z" fill="#fff"/>
                                <path d="M15 25h2v5h-2z" fill="#fff"/>
                                <path d="M5.394 25.192L8.9 21.686l1.414 1.415l-3.506 3.506z" fill="#fff"/>
                                <path d="M2 15h5v2H2z" fill="#fff"/>
                                <path d="M5.394 6.808l1.414-1.415L10.314 8.9L8.9 10.314z" fill="#fff"/>
                                <path d="M16 12a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="#fff"/>
                            </svg>) :
                        (
                            <svg aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                                <g fill="#333">
                                    <path d="M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                                </g>
                            </svg>
                        )
                    }
                </a>
                </div>
                <div>
                    <a className='menu-item' href="#"  style={{color: darkMode ? "#fff" : "#333"}}>Gmail</a>
                    <a  className='menu-item' href="#" style={{color: darkMode ? "#fff" : "#333"}}>Images</a>
                    <svg id='dropdownMenu'  aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{cursor: 'pointer'}} onClick={() => setShow(!show)}>
                        <g fill="none"><path d="M18 20a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm12-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm12-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm-6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4zM6 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4z" fill="currentColor"/></g>
                    </svg>
                    <button id='headerButton' >Sign in</button> 
                </div>
            </nav>
        </header>
    )
}

export default Header;