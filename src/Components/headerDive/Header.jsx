import React from 'react'
import CV from '../../assets/intern.pdf'
import Me from '../../assets/1.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
   <header className='mt-12 lg:px-0'>
    <div className=' flex flex-col items-center justify-start lg:px-0  px-32 '>
      <div className='mb-12 lg:ml-0 ml-20' >
        <h5 className=' font-semibold lg:text-sm mb-3 '>Hello I'm</h5>
        <h1 className='font-bold text-2xl lg:text-4xl mb-2'>Hamiid apdi</h1>
        <h5 className='font-light mb-2  '>mern-stack Developer</h5>
        <div className='mr-12 gap-2 lg:gap-8  flex'>
        <a className=' border w-24 lg:w-fit lg:h-fit h-8 py-1 lg:py-2 border-greeen  lg:px-2 rounded-md  hover:bg-greeen text-sm text-center  font-semibold hover:text-black hover:border-none
        ' href={CV} view>View CV</a>
        <a className='w-24 lg:w-fit lg:h-fit h-8 py-1 lg:py-2  bg-greeen p-2 text-center text-black rounded-md   font-semibold hover:text-white hover:bg-transparent hover:border hover:border-greeen text-sm
        ' href='' view>Let's Talk</a>
      </div>
      </div>
      <HeaderSocials className=""/>

<div className=' '>
<div className='  me'>
      </div>
      <img src={Me} className='  m3 ' alt="Haamid" />
</div>
      

     

        
        
       
        
    

   
    </div>


   </header>
  )
}

export default Header
