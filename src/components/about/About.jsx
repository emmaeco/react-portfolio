import React from 'react'
import './about.css'
import ME from '../../assets/Man2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderFill} from 'react-icons/bs'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt=""/>

                    </div>

                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>

                            <FaAward className='about__icons'/>
                            <h5>experience</h5>
                            <small>3+ years working experience</small>

                        </article>
                         <article className='about__card'>

                            <FiUsers className='about__icons'/>
                            <h5>Clients</h5>
                            <small>100 </small>

                        </article>
                         <article className='about__card'>

                            <BsFolderFill className='about__icons'/>
                            <h5>projects</h5>
                            <small>3+ years working experience</small>

                        </article>
                        

                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sit, ex ad magnam recusandae maxime optio quisquam
                         quas nemo placeat totam libero magni eum commodi numquam non. Ducimus, ab ipsa?
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>

            </div>
        </section>
    )
}

export default About
