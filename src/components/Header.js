import React from 'react'
import { Link } from 'react-router-dom'

import logo from './images/mecavelo.jpg'
import './Header.css'

const Header = () => {
  return(
    <div className='headerContainer'>
      <img className='logo' src={logo}/>
        <ul className='header'>
          <li><Link to='/' className='accueil'>Accueil</Link></li>
          <li><Link to='/Tarifs' className='tarif'>Tarifs</Link></li>
          <li><Link to='Contact' className='contact'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Header