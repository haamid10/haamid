import React from 'react'
import CV from '../assets/intern.pdf'

const Header = () => {
  return (
   <header>
    <div>
      <h5>Hello I'm</h5>
      <h1>Hamiid apdi</h1>
      <h5>Fullstack Developer</h5>
    </div>

    <div>
      <a href={CV} view>Download</a>
    </div>

   </header>
  )
}

export default Header
