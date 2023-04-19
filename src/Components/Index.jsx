import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Experience from './Experience'
import Services from './Services'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'
import About from './About'
const Index = () => {
  return (
    <div>
        <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Index
