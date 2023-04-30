import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageAltDetail} from 'react-icons/bi'
import {RiServerLine} from 'react-icons/ri'
import { useState } from 'react'
const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <div>
      Navbar
      <nav className=' flex  w-fit p-5 gap-6 block fixed  translate-x-52 bottom-[3rem] left-[23rem] rounded-2xl bg-nav backdrop:blur-20 text-greeen '>
        <a href="#" className='dactive'><AiOutlineHome/></a>
        <a href="#about"><AiOutlineUser/></a>
        <a href="#experience"><BiBook/></a>
        <a href="#services"><RiServerLine/></a>
        <a href="#contact"><BiMessageAltDetail/></a>
      </nav>
    </div>
  )
}

export default Navbar
