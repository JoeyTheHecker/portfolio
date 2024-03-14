import React from 'react'

import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
  const [button, setButton] = useState('Send Message');


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8umieu2', 'template_8k7jhln', form.current, 'ffJyJH0HaLSgGHJGb')

      .then((result) => {
          setButton('Send Message');
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5></h5>
            <a href="mailto:joey.cabelin.1@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5></h5>
            <a href="https://m.me/reopayne" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whats app</h4>
            <h5>#11111111111</h5>
            <a href="https://api.whatsapp.com/send?phone+=1111111111" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' onClick={()=> setButton('Loading...')}>{button}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact