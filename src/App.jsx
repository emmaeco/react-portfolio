import React from 'react'
import Header from './components/header/Header'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Navbar from './components/navbar/Navbar'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/Services/Services'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        <>
           <Header/> 
           <Navbar/>
           <About/>
           <Experience/>
           <Services/>
           <Portfolio/>
           <Testimonials/>
           <Contact/>
           <Footer/>

        </>
    )
}

export default App
