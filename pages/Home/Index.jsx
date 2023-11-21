import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Succeses from './Components/Succeses'
import Activities from './Components/Activities'
import FixedDec from './Components/FixedDec'
import Clubs from './Components/Clubs'
import Contact from './Components/Contact'
import SubNav from '../Layout/SubNavigation/Index'
import Navigation from '../Layout/MainNavigation/Index'
import Footer from '../Layout/Footer/Index'
function Index() {
  return (
    <main>
        <SubNav/>
        <Navigation props='home'/>
        <Header/>
        <About/>
        <Succeses/>
        <Activities/>
        <FixedDec/>
        <Contact/>
        <Footer/>
        {/* <Clubs/> */}
    </main>
  )
}

export default Index