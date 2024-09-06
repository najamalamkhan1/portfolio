import React from 'react'
import '../Sidebar/Index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to=".">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="najam alam" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to={'/'}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
        </NavLink>
        <NavLink exact="true" className="about-link" to={'/about'}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        </NavLink>
        <NavLink exact="true" className="contact-link" to={'/contact'}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/najam-alam-khan-6b53a7174/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/najamalamkhan1"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@helpmetoreach1ksubscribers17"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4d" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/naj.mee1/"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4d" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
