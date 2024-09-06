import React, { useEffect, useState } from 'react'
import '../About/Index.scss'
import AnimatedLetters from '../AnimatedLetters/Index'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGit,
  faHtml5,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi, I’m Najam Alam, a passionate Software Engineering student at
            Indus University, driven by curiosity and a love for
            problem-solving.
          </p>
          <p>
            With a flair for blending creativity with technical expertise, I aim
            to build solutions that make life easier, smarter, and more
            connected. From coding innovative apps to exploring cutting-edge
            technologies, I find joy in every challenge that pushes me to think
            beyond the ordinary.
          </p>
          <p>
            My goal? To craft meaningful digital experiences that leave a
            positive impact on the world. Let’s create something amazing
            together!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0032" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A409" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
