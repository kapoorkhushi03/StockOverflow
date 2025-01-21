import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Breadcrumbs from '../components/BreadCrumbs.js'
import CustomCarousel from '../components/CustomCarousel.js'
import Faq from '../components/Faq.js'

export default function Home() {
  return (
    <div>
      <div><Navbar/></div>
      <div><Breadcrumbs/></div>
      <div><Faq/></div>

     <div><CustomCarousel/></div>

      <div><Footer/></div>
    </div>
  )
}
