import React from 'react'
import './nav.css'
import { MdHome } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <MdHome /> </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <LuUser2 /> </a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <FaBook /> </a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <RiServiceLine /> </a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <MdMessage /> </a>
    </nav>
  )
}

export default Nav