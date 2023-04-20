import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className=' flex flex-col gap-12 mr-[60rem] mt-[10rem] text-green socials'>
      <a href=""><BsLinkedin/></a>
      <a href=""><FaGithub/></a>
      <a href=""><FiTwitter/></a>
      
    </div>
  )
}

export default HeaderSocials
