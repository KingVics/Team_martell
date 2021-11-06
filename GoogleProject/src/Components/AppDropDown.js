import React from 'react';
import '../styles.css';
import appAccount from '../resources/googleCloud.jpg';
import appSearch from '../resources/googleSearch.jpg';
import appMap from '../resources/googlemap.png';
import appYouTube from '../resources/youtube.jpg';
import appPlayStore from '../resources/googleplay2.jpg'
import appNews from '../resources/googlenews.jpg';
import appGmail from '../resources/gmail.png';
import appMeet from '../resources/googlemeet.png';
import appChat from '../resources/googlechat2.png';
import appContact from '../resources/googlecontact.png';
import appDrive  from '../resources/googledrive.png';
import appCalendar from '../resources/googlecalendar.png';

function AppDropDown ({show, modalRef}){
    return(
        <div id='appDropDown' style={{ display: show ? "block" : "none",}}  ref={modalRef}>
            <div className='appDropdDownImage-container'>
                <img className='appImages' src={appAccount} alt='google cloud logo'/>
                <p className='appText'> contact</p>
            </div>
            <div className='appDropdDownImage-container'>
                <img className='appImages' src={appSearch} alt='google search logo'/>
                <p className='appText'> search</p>
            </div>
            <div className='appDropdDownImage-container'>
                <img className='appImages' src={appMap} alt='google maps logo'/>
                <p className='appText'> maps</p>
            </div>
            <div className='appDropdDownImage-container'>
                <img className='appImages' src={appYouTube} alt='youtube logo'/>
                <p className='appText'> youtube</p>
            </div>
            <div className='appDropdDownImage-container'>
                <img className='appImages' src={appNews} alt='google news logo'/>
                <p className='appText'> news</p>
            </div>
            <div className='appDropdDownImage-container'>
                <img className='appImages' src={appPlayStore} alt='google playstore logo'/>
                <p className='appText'> play</p>
            </div>
            <div className='appDropdDownImage-container'>
                <img className='appImages' src={appGmail} alt='gmail logo'/>

                <p className='appText'> news</p>
            </div>
            <div className='appDropdDownImage-container'>
                <img className='appImages' src={appMeet} alt='google meet'/>
                <p className='appText'> gmail</p>
            </div>
            <div className='appDropdDownImage-container'>
                <img className='appImages'  src={appChat} alt='google chat'/>
                <p className='appText'> meet </p>
            </div>
            <div className='appDropdDownImage-container'>
                <img className='appImages' src={appContact} alt='goggle contact'/>
                <p className='appText'> chat</p>
            </div>
            <div className='appDropdDownImage-container'>
                <img className='appImages' src={appDrive} alt='goggle drive'/>
                <p className='appText'> drive</p>
            </div>
            <div className='appDropdDownImage-container'>
                <img className='appImages' src={appCalendar} alt='goggle calendar'/>
                <p className='appText'> calendar</p>
            </div>
        
        </div>
    )
}

export default AppDropDown;