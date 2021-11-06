import React from 'react'
import Logo from '../Logo'
import source1 from '../../resources/sidehustle.png';
import source3 from '../../resources/voiceSearch.png';
import source4 from '../../resources/searchIcon.jpg';
import Input from '../Input'
import Button from '../Buttons'
function Home() {
    return (
        <div id='page-container'>            
              <Logo source={source1} />
              <Input source1st={source3} source2nd={source4} />
              <div className="home__button">
                 <Button btnclass='search' text='Google Search' />
                 <Button  btnclass='doodle' text="I'm Feeling Lucky" /> 
              </div>
             
            </div>
    )
}

export default Home
