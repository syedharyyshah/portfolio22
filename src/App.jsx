import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Parallax from './components/Parallax/Parallax'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
         <section id='Homepage' className=''>
        <Navbar />
        <Hero />
      </section>
      <section className='h-[100vh]'><Parallax type="services" /></section>
      <section id='Services' className='h-[100vh]'> <Services /> </section>
      <section id='Portfolio' className='h-[100vh]'><Parallax type="portfolio" /></section>
          <Portfolio />
      <section id='Contact' className='h-[100vh]'><Contact /></section>
    </div>
  )
}

export default App
