import React from 'react'
import './header.css'
import CTA from './CTA'
import Man from '../../assets/Man.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
       <header>
           <div className="container header_container">
               <h5>Hello I'm </h5>
               <h1>john smith</h1>
               <h5 className="text-light">
                   Font developer
               </h5>
               <CTA/>
               <HeaderSocial/>
               <div className="me">
                   <img src={Man} alt="" className="img"/>

               </div>
               <a href="#contact" className='scroll_down'>Scroll Down</a>
           </div>
       </header>
    )
}

export default Header
