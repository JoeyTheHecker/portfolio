import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Document Tracking System',
    github: 'https://github.com/JoeyTheHecker/document-tracking-system',
    demo: 'https://doctrackdolero8.freshfromuspng.store/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'GIP monitoring system',
    github: 'https://github.com/JoeyTheHecker/gip-monitoring-system',
    demo: 'https://gipmonitoring.freshfromuspng.store/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'QR-code-based-attendance-system',
    github: 'https://github.com/JoeyTheHecker/QR-code-based-attendance-system',
    demo: 'https://pesocongress2023.freshfromuspng.store/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Vehicles-management-with-API-Integration-of-ANPR',
    github: 'https://github.com/JoeyTheHecker/Vehicles-management-with-API-Integration-of-ANPR',
    demo: 'Link for demo'
  },
  {
    id: 5,
    image: IMG5,
    title: 'React + Laravel user crud app',
    github: 'https://github.com/JoeyTheHecker/user-crud-app',
    demo: 'Link for demo'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Digital menu',
    github: 'https://github.com',
    demo: 'https://digitalmenu.w3spaces.com/'
  },
];


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt="Portfolio_1" />
                  </div>
                  <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn'>Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio