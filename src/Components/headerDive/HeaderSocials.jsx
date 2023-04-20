import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className=' flex flex-col items-center justify-center gap-4 mr-[60rem] mt-[1rem] text-green '>
      <h1 className='socials'></h1>
      <a href=""><BsLinkedin/></a>
      <a href=""><FaGithub/></a>
      <a href=""><FiTwitter/></a>
      
    </div>
  )
}

export default HeaderSocials
