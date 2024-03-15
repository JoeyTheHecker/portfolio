import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/JoeyTheHecker" target="_blank"><BsGithub /></a>
        <a href="https://web.facebook.com/reopayne" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials