import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Work from '../Components/Work'
import Skill from '../Components/Skill'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'


const Home =() => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Work />
        <Skill />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home