import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">ECO</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://twitter.com"><FaTwitter/></a>
                <a href="https://youtube.com"><FaYoutube/></a>

            </div>
            <div className="footer__copyright">
                <small>
                    &copy; ECO TUTORIALS. all right reserved
                </small>
            </div>
            
        </footer>
    )
}

export default Footer
