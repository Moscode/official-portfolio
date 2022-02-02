import React from 'react'

import { AiOutlineLinkedin, AiOutlineArrowDown} from 'react-icons/ai'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { VscGithub } from 'react-icons/vsc'
import { SiHashnode} from 'react-icons/si'
import { BiBookOpen } from 'react-icons/bi'

import HomeCenter from './HomeCenter'
import './Home.css'

function Home() {
    return (
        <div className='container'>
            <div className='home-page-profile'>
            <div className='home-page-profile-left'>
            <div className='profile-left-top'>
            <p className='profile-left-logo'><BiBookOpen />{' '}</p><p className='profile-left-name'>Moscode</p>
            </div>
            <div className='profile-left-socials'>
            <a href='#'>
                <AiOutlineLinkedin />
            </a>
            <a href='#'>
                <TiSocialTwitterCircular />
            </a>
            <a href='#'>
                <VscGithub />
            </a>
            <a href='#'>
                <SiHashnode />
            </a>
            </div>
            <div className='profile-left-page-number'>
                01
            </div>
            </div>

              <HomeCenter />

            <div className='home-page-profile-right'>
                <div className='profile-right-links'>
                    <a href='#'>About</a>
                    <a href='#'>Portfolio</a>
                    <a href='#'>Contact</a>
                </div>
                <div className='profile-right-scrollbar'>
                    <button>
                        <p>SCROLL DOWN</p>
                        <AiOutlineArrowDown />
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home

