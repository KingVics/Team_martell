import React, { useState, useRef, useContext, useEffect } from 'react';

//Components
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

// CSS
import './App.css'
import './styles.css';

//Hooks
import useClickOutside from './hooks/useEventListener';
import { ThemeContext } from "./context/Theme";

//Icons
import appsIcon from './resources/appsIcon.png'
import AppDropDown from './Components/AppDropDown';



function PageWrapper(){
    const [show, setShow] = useState(false);
    const [showImage, setShowImage] = useState(true);
    const [value, setValue] = useState('');
    const modalRef = useRef() //ref to the modal. Keeping trackof modal state
    const theme = useContext(ThemeContext) // theme context
    const darkMode = theme.state.darkMode // get the current theme

    useClickOutside(modalRef, () => {
        if (show) setShow(false) // If user clicks outside of modal, close it.
    })

    const handleValue = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if(value.length > 0) {
            setShowImage(false)
        }else {
            setShowImage(true)
        }
    }, [value])


    return (
        <div className="app" style={{background: darkMode ? '#222' : '#fff', color: darkMode && '#fff'}} >         
            <Header source={appsIcon} setShow={setShow}  show={show}/>
            <Home showImage={showImage} handleValue={handleValue} value={value}/>
            {show &&
                <AppDropDown modalRef={modalRef}  show={show} />
            }
            <Footer /> 
        </div>
    )
}

export default PageWrapper;