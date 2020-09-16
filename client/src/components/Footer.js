import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return(
    <div className="footerContainer">
      <Link to='/Contact'><p className="contactFooter">Contact</p></Link>
      <a href="https://www.instagram.com/lemecavelo/?hl=fr"><p className="instagramLogoFooter">Instagram</p></a>
      <a href="https://www.facebook.com/lemecavelo/"><p className="facebookLogoFooter">Facebook</p></a>
    </div>
  )
}

export default Footer