import React from 'react'
import './about.css'
import ME from '../../assets/baby_vincent.jpg.JPG'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
  <section id="about">
    <h5>Get to know</h5>
    <h1>About Me</h1>
    

    <br></br>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>1 Year Working</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>Clients</h5>
            <small>5+ Nationwide</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>

        <p>
          I have a passion for coding and love to learn new things. I am a curious learner and want to help people solve real world problems.
        </p>

        <a href="#contact" className="btn btn-primary">Contact Me</a>
      </div>
    </div>
  </section>
  )
}

export default About