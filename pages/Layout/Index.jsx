import React from 'react'
import MainNav from './MainNavigation/Index'
import SubNav from './SubNavigation/Index'
import Footer from  './Footer/Index'
function Index(props) {
  return (
    <layout>
        <SubNav/>
        <MainNav/>
        {props.children}
        <Footer/>
    </layout>
  )
}

export default Index