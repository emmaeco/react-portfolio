import React from 'react'
import'./contact.css'

import{MdOutlineEmail} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_93lee1t', 'template_4lv16d9', form.current, 'jbtZ612_aq_ijZ8-6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Emal</h4>
                        <h5>onuigbochuchu1234@gmail.com</h5>
                        <a href="mailto:onuigbochuchu1234@gmail.com">Send</a>


                    </article>
                   
                   
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>egator tutorials</h5>
                        <a href="mailto:onuigbochuchu1234@gmail.com">Send</a>


                    </article>

                    
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>WhatApps</h4>
                        <h5>+2348165919064</h5>
                        <a href="https://api.whatsapp.com/send?phone+2348165919064">Send</a>


                    </article>


                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='your full name' required/>
                    <input type="email" name='email' placeholder="Email" required/>
                    <textarea name="message"   rows="7" placeholder='your message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send</button>
                </form>
            </div>

        </section>
    )
}

export default Contact


