import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/programs'
import Coaches from '../components/Coaches'
import Stories from '../components/Stories'
import Enquiry from '../components/Enquiry'
import WhatsAppFloat from '../components/WhatsAppFloat'
import Footer from '../components/Footer'
import Aura from '../components/Aura'



function Home() {
  return (
    <>

        <div>
          <Aura/>
            <Navbar/>
        </div>

        <main>
          <Hero/>
          <About/>
          <Programs/>
          <Coaches/>
          <Stories/>
          <Enquiry/>
        </main>
        <Footer/>
        <WhatsAppFloat/>

    </>
  )
}

export default Home 