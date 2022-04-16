import React from 'react'
import './footer.css'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">Vincent Tran</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#testimonials">Testimonials</a></li>
        <li><a href="/#contacts">Contacts</a></li>
      </ul>
        <div className="footer__socials">
          <a href="https://facebook.com" target='_blank'><BsFacebook /></a>
          <a href="https://instagram.com" target='_blank'><BsInstagram /></a>
          <a href="https://youtube.com" target='_blank'><BsYoutube /></a>
        </div>

        <div className="footer__copyright">
          <small>
            &copy; Vincent Tran 2022. All rights reserved.
          </small>
        </div>
      
    </footer>
  )
}

export default Footer