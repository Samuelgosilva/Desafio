import React from 'react'
import {Link} from 'react-scroll'
import logo from '../img/logo.png'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'


function Navbar() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <nav >
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Link to='main' className='logo'smooth={true} duration={1000} >
          <img src={logo} alt='logo' />
        </Link>

        </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li><Link to='main' className='active' smooth={true} duration={1000}>Home</Link></li>
          <li><Link to='features' smooth={true} duration={1000}>Sobre</Link></li>
          <li><Link to='services' smooth={true} duration={1000}>Notícias</Link></li>
          <li><Link to='subscribee' smooth={true} duration={1000}>Contato</Link></li>
        </ul>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap:'10px'}}>
        <Link to='#' className='hey'><FaFacebook /></Link>
        <Link to='#' className='hey'><FaInstagram /></Link>
        <Link to='#' className='hey'><FaLinkedin /></Link>

        </div>
      </nav>
    </div>
  )
}

export default Navbar