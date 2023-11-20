import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Succeses from './Components/Succeses'
import Activities from './Components/Activities'
import FixedDec from './Components/FixedDec'
import Clubs from './Components/Clubs'
import Contact from './Components/Contact'
function Index() {
  return (
    <main>
        <Header/>
        <About/>
        <Succeses/>
        <Activities/>
        <FixedDec/>
        <Contact/>
        {/* <Clubs/> */}
    </main>
  )
}

export default Index