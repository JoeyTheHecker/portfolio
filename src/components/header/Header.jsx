import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header id=''>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Joey A. Cabelin</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header