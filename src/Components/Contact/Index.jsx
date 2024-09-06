import React, { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index'
import '../Contact/Index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_95lxhge',
        'template_qpxo2vd',
        refForm.current,
        'r8_oJ2uGIodn5r7Ez'
      )
      .then(
        () => {
          alert('Message succefully send!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Whether you have a project idea, need a bit of tech advice, or just
            want to chat about the latest in software engineering, I'm always
            excited to connect. I believe the best ideas come from
            collaboration, and I’d love to hear from you! Feel free to drop me a
            message—whether it’s about a potential partnership, a quick
            question, or just to say hello, I'm all ears. Let’s create something
            amazing together!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="to_name"
                    value="Najam Alam Khan"
                    hidden
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="from_subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="Submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Najam Alam Khan,
          <br />
          Karachi,
          <br />
          Street 64, Urdu Bazar, Sher Shah <br />
          <span>najamalamkhan1321@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[24.882445, 66.985571]}
            zoom={13}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[24.882445, 66.985571]}>
              <Popup>Najam lives here,hire me 😜</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact
