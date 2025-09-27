
import React from 'react'

import Hero from './Hero'
import Faq from './faq'
import Footer from './Footer'
import Body1 from './Body1'
import Body2 from './Body2'
import Body3 from './Body3'
import Build from './Build'
import Body4 from './Body4'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Body1/>
      <Build/>
      <Body3/>
      <Body2/>
      <Body4/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home

