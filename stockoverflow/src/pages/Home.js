import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Breadcrumbs from '../components/BreadCrumbs.js'
import CustomCarousel from '../components/CustomCarousel.js'
import Faq from '../components/Faq.js'
<<<<<<< HEAD
=======
import Features from '../components/Features.js'
import Take from '../components/Take.js'
import Main from '../components/Main.js'

>>>>>>> 9e5f3efb1334a4b3a2cab63f15daee9b26f49ac0

export default function Home() {
  return (
    <div>
      <div><Navbar/></div>  
        <div><Breadcrumbs/></div>
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
