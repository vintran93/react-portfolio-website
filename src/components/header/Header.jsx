import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">


        <h5>Hello my name is</h5>
        <h1>Vincent Tran</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <div className="me">
          <figure>
            <img src={ME} alt="me" />
            <figcation>Me and my dog Amy love to hike.</figcation>
          </figure>

        </div>
        <CTA />


        <HeaderSocials />


        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header