import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='relative '>

    <div className='lg:px-0 px-32 flex flex-col items-center justify-center gap-4 mr-[16rem] lg:mr-[60rem] mt-[1rem] text-greeen '>
      <h1 className='socials'></h1>
      <a href=""><BsLinkedin/></a>
      <a href=""><FaGithub/></a>
      <a href=""><FiTwitter/></a>
      
    </div>

    <a href="" className='absolute  text-greeen lg:top-[15rem] lg:left-[1rem] ml-[20rem] top-64 lg:ml-[50rem]  w-32 font-light lg:text-sm text-xs rotate-90'>Scroll Down</a>
    </div>
  )
}

export default HeaderSocials
