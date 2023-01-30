import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../framer'
import { TypingText } from '../../Text'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <motion.h2
      variants={staggerContainer}
      initial = "hidden"
      whileInView="show"
      viewport ={{once: false, amount : 0.5}}
      ><TypingText 
       title ="About"
       textStyles="text-center"/></motion.h2>
      

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="a picture of me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
              </article>

              <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
              </article>

              <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem in aut nemo rerum, corporis aliquid ut, quo nisi quos, doloremque unde optio architecto voluptate illo nesciunt vel minima quod quaerat!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About