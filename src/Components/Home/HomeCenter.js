import React from 'react'

import './Home.css'
import profileImage from './mypic.jpg'

function HomeCenter() {
    return (
        <div className='home-page-profile-center'>
                <div className='profile-center-image'>
                   <img src={profileImage} alt='My image' /> 
                </div>
                <div className='profile-center-content'>
                        <p><span id='title'><span id='title-1'>Frontend</span><br/>
                        <span id='title-2'>Engineer</span></span><br/>
                        <span id='description'>Extremely Passionate about Designs, Technologies and Innovations</span>
                        </p>
                </div> 
        </div>
            
    )
}

export default HomeCenter
