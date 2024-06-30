import React from 'react'
import './portfolio.css'
import ofa from '../../assets/ofa.png'
import pawsitive from '../../assets/pawsitive.png'
import portfolio from '../../assets/portfolio.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { motion, useInView } from 'framer-motion' // refer slide.jsx
import { staggerContainer } from '../../framer'
import { TypingText } from '../../Text'
import { useRef } from 'react'


const data = [
  {
    id: 1,
    image: ofa,
    title: 'Web3 Protocol Integration made easy for developers',
    github: 'https://github.com/One-For-All-Web3/OFA-Main',
    demo: 'https://ofa-main.vercel.app/'
  },

  {
    id: 2,
    image: pawsitive,
    title: 'Pawsitive , An initiative to solve the problem of streets in india',
    github: 'https://github.com/PrasannaJung/save-them',
    demo: 'https://save-them-w1x3-prasannajung.vercel.app/'
  },

  {
    id: 3,
    image: clade,
    title: 'Product for recruiters for taking action on different candidates ',
    github: 'https://github.com/rahulsingh3526/Clade',
    demo: 'https://clade-blue.vercel.app/'
  },

  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Maintaining tasks and tracking progress',
  //   github: 'https://github.com/neha-kum',
  //   demo: 'https://github.com/neha-kum'
  // },

  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Charts templats and infographics',
  //   github: 'https://github.com/neha-kum',
  //   demo: 'https://github.com/neha-kum'
  // },

  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Charts templats and infographics in Figma',
  //   github: 'https://github.com/neha-kum',
  //   demo: 'https://github.com/neha-kum'
  // },

]


const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id='portfolio' ref={ref}>
      <h5>My Recent Work</h5>
      <motion.h2
       variants={staggerContainer}
       initial = "hidden"
       whileInView="show"
       viewport ={{once: false, amount : .5}}
       ><TypingText 
        title ="Portfolio"
        textStyles="text-center"/>
        </motion.h2>

      <div className="container portfolio__container" style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} >

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>

    </section>)
}

export default Portfolio
