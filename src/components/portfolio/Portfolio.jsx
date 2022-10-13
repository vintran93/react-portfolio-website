import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/hiking app.jpg'
import IMG2 from '../../assets/piano tracker.png'
import IMG3 from '../../assets/investing 9.jpg'
import IMG4 from '../../assets/javascript_project.png'
import IMG5 from '../../assets/healthcare-image.jpg'
// import IMG6 from '../../assets/baby_vincent.jpg.JPG'
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hiking App',
    github: 'https://github.com/vintran93/austin_trails',
    demo: 'https://www.youtube.com/watch?v=Kdfp_uW4E_w'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Piano Sheet Music Tracker App',
    github: 'https://github.com/vintran93/piano_tracker',
    demo: 'https://www.youtube.com/watch?v=aufhejTUZ94&t=321s'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Finances App',
    github: 'https://github.com/vintran93/finances',
    demo: 'https://www.youtube.com/watch?v=ITwy3sj7G9U&t=367s'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Movie Quotes App',
    github: 'https://github.com/vintran93/movie-quotes-client',
    demo: 'https://www.youtube.com/watch?v=b022FTS3iYg&t=112s'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Doctor Appointments App',
    github: 'https://github.com/vintran93/appointments_backend',
    demo: 'https://www.youtube.com/watch?v=5p5KyLYtrqw&t=205s'
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }




        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
            <h3>Portfolio title</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com/vintran93?tab=projects" className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href="https://github.com/vintran93?tab=projects" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
            <h3>Portfolio title</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com/vintran93?tab=projects" className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href="https://github.com/vintran93?tab=projects" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
            <h3>Portfolio title</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com/vintran93?tab=projects" className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href="https://github.com/vintran93?tab=projects" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
            <h3>Portfolio title</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com/vintran93?tab=projects" className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href="https://github.com/vintran93?tab=projects" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
            <h3>Portfolio title</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com/vintran93?tab=projects" className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href="https://github.com/vintran93?tab=projects" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
            <h3>Portfolio title</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com/vintran93?tab=projects" className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href="https://github.com/vintran93?tab=projects" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>   */}


      </div>
    </section>
  )
}

export default Portfolio