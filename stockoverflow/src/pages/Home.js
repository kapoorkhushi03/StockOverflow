import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import CustomCarousel from '../components/CustomCarousel.js'
import Faq from '../components/Faq.js'
import Main from '../components/Main.js'
import Features from '../components/Features.js'
import Take from '../components/Take.js'
import '../styles/Home.css';

export default function Home() {
  return (
    <div className='bg'>
      <div><Navbar/></div>  
       
      <div>
        <Main/>
      </div>
    
      <div> <Features/></div>
      <Take/>
      
      <div><Faq/></div>

     <div><CustomCarousel/></div>

      <div><Footer/></div>
    </div>
  )
}
