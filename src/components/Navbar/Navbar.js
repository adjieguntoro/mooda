import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import Logo from './../../images/mooda_logo_grey.png'
import './Navbar.scss'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar container'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item' >
            <img src={Logo} alt='mooda' width='112' height='28' />
          </Link>
          <div className='navbar-burger burger' data-target='navMenuExample'>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id='navMenuExample' className='navbar-menu'>
        </div>
      </nav>
    )
  }
}

export default Navbar
