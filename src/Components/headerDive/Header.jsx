import React from 'react'
import CV from '../../assets/intern.pdf'
import Me from '../../assets/2.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
   <header className='mt-12'>
    <div className=' flex flex-col items-center justify-start '>
      <div className='sm:mb-4 lg:mb-12'>
        <h5 className=' font-semibold lg:text-sm mb-3'>Hello I'm</h5>
        <h1 className='font-bold text-2xl lg:text-4xl mb-2'>Hamiid apdi</h1>
        <h5 className='font-light mb-2 lg:text-xl text-sm'>Fullstack Developer</h5>
        <div className='mr-12 gap-8  flex'>
        <a className=' border border-greeen px-2 py-2 rounded-md  hover:bg-greeen text-sm text-center  font-semibold hover:text-black hover:border-none
        ' href={CV} view>View CV</a>
        <a className='  bg-greeen p-2 text-center text-black rounded-md   font-semibold hover:text-white hover:bg-transparent hover:border hover:border-greeen text-sm
        ' href='' view>Let's Talk</a>
      </div>
      </div>
      <HeaderSocials className=""/>


      <div className='absolute top-72  me'>
          
          <img src={Me} className='  m3 ' alt="Haamid" />
  
      </div>

     

        
        
       
        
    

   
    </div>


   </header>
  )
}

export default Header
