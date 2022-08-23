import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'



const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank" ><BsGithub/></a>
            <a href="https://github.com" target="_blank"><BsDribbble/></a>
            
            
        </div>
    )
}

export default HeaderSocial
