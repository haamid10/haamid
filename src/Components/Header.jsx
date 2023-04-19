import React from 'react'
import CV from '../assets/intern.pdf'
import Me from '../assets/1.png'

const Header = () => {
  return (
   <header>
    <div className=' flex flex-col items-center justify-start '>
      <div>
        <h5 className=' font-semibold mb-3'>Hello I'm</h5>
        <h1 className='font-bold text-4xl mb-2'>Hamiid apdi</h1>
        <h5 className='font-light mb-2'>Fullstack Developer</h5>
      </div>

      <div className='mr-12  gap-8 flex'>
        <a className=' border-2 border-green px-2 py-2 rounded-md  hover:bg-green text-sm text-center  font-semibold hover:text-black hover:border-none
        ' href={CV} view>View CV</a>
        <a className='  bg-green px-2 py-2 text-black rounded-md   font-semibold hover:text-white hover:bg-transparent hover:border-2 hover:border-green text-sm
        ' href='' view>Let's Talk</a>
      </div>

      <div className='bg-gradient-to-b from-green rounded-full w-50 h-[15rem] mt-12'>
        <img src={Me} alt="Haamid" />
      </div>

     
    </div>


   </header>
  )
}

export default Header
