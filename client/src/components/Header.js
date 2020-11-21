import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { debounce } from "debounce";
import HamburgerMenu from 'react-hamburger-menu'
import CheeseburgerMenu from 'cheeseburger-menu'

import logo from './images/mecavelo.jpg'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  // Debounce resize
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth
  })

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: window.innerWidth
      });
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);

    return () => window.removeEventListener("resize", debouncedHandleResize)
  });

  return (
    <div className='headerContainer'>
      {dimensions.width > 550 ?
        <>
          <Link to='/'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
          <ul className='header'>
            <li><Link to='/' className='accueil'>Accueil</Link></li>
            <li><Link to='/Tarifs' className='tarif'>Tarifs</Link></li>
            <li><Link to='/Contact' className='contact'>Contact</Link></li>
            <li><Link to='/Boutique' className='contact'>Boutique</Link></li>
            <li><Link to='/Admin' className='contact'>Admin</Link></li>
          </ul>
        </>
        :
        <>
          <div className='burgerMenu'>
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={handleClick}
              width={30}
              height={15}
              strokeWidth={3}
              rotate={0}
              color='white'
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
          <Link to='/'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
          <CheeseburgerMenu isOpen={isOpen} closeCallback={handleClick}>
            <ul className='header'>
              <li><Link to='/' className='accueil'>Accueil</Link></li>
              <li><Link to='/Tarifs' className='tarif'>Tarifs</Link></li>
              <li><Link to='/Contact' className='contact'>Contact</Link></li>
              <li><Link to='/Boutique' className='contact'>Boutique</Link></li>
              <li><Link to='/Admin' className='contact'>Admin</Link></li>
            </ul>
          </CheeseburgerMenu>
        </>
      }
    </div>
  )
}

export default Header