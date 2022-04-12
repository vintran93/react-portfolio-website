import React from 'react'
import { BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vincent-tran-998173a9/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://www.youtube.com/channel/UC8uZKwgE3LghNowKImQ1x1A" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://github.com/vintran93" target="_blank" rel="noreferrer"><BsYoutube/> </a>
    </div>
  )
}

export default HeaderSocials