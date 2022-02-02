import React from 'react'

import './AboutMe.css'

import AboutMeImage from './mypic.jpg'
import HTML from './html.png'
import CSS from './css.png'
import TAILWIND from './tailwind.png'
import JAVASCRIPT from './javascript.png'
import REACT from './react.png'
import REACTHOOK from './reacthook.png'
import NETLIFY from './netlify.png'

function AboutMe() {
    return (
        <div className='about-page'>
            <div className='about-page-skills'>
                <div className='circle'>
                <img src={HTML} alt='html logo' id='img1'/>
                {/*<img src={CSS} alt='css logo' id='img2'/>
                <img src={TAILWIND} alt='tailwind' id='img3'/>
                <img src={JAVASCRIPT} alt='' id='img4' />
                <img src={REACT} alt='react logo' id='img5'/>
                <img src={REACTHOOK} alt='' id='img6'/>
    <img src={NETLIFY} alt='' id='img7'/>*/}
                </div>


            </div>
            <div className='about-page-image'>
                <img src={AboutMeImage} alt='Profile' />
            </div>
        </div>
    )
}

export default AboutMe;
