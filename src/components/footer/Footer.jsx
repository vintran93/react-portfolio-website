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
        <a href="https://www.facebook.com/vincent.tran.714" target='_blank' rel="noreferrer" ><BsFacebook /></a>
        <a href="https://www.instagram.com/vincentran93/" target='_blank' rel="noreferrer" ><BsInstagram /></a>
        <a href="https://www.youtube.com/channel/UC8uZKwgE3LghNowKImQ1x1A" target='_blank' rel="noreferrer"><BsYoutube /></a>
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