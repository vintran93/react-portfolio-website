// import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6v1maoa', 'template_5e6beum', form.current, 'P3kxRuvqyKE5LQtW-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>vincentran93@gmail.com</h5>
            <a href="mailto:vincentran93@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option" >
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Vincent Tran</h5>
            <a href="https://m.me/vincent.tran.714" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>19722597677</h5>
            <a href="https://api.whatsapp.com/send?phone=19722597677" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="name" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder="Your email" required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact