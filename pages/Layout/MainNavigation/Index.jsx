import { navigation_data } from '../../api/navigations'
// import { Link } from 'react-router-dom'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import style from '../../../styles/Navigation/nav.module.scss'

import React from 'react'

function Index(props) {
  const [backgroundTransparent, setBackgroundTransparent] = useState(true);
  const [isHomePage, setIsHomePage] = useState(props.props === 'home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isHomePage) {

      const handleScroll = () => {
        if (window.scrollY > 100) {
          setBackgroundTransparent(false);
        } else {
          setBackgroundTransparent(true);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };


    } else {
      setBackgroundTransparent(false)
    }
  }, [isHomePage]);

  const toggleSidebar = () => {
    if (window.innerWidth <= 1024) {
      setIsSidebarOpen(!isSidebarOpen);

    }
  };
  var navContainerClass = ''
  var textClass = ''
  var decBg = ''
  var linkContainerBg = ''
  var logoClass = ''
  var boxShadow = ''

  if (isHomePage) {
    navContainerClass = backgroundTransparent ? 'bg-transparent' : 'bg-white';
    textClass = backgroundTransparent ? 'text-white' : 'text-black'
    decBg = backgroundTransparent ? 'bg-white' : 'bg-black'
    linkContainerBg = 'bg-white'
    logoClass = backgroundTransparent ? 'w-[80px]' : 'w-[60px]'
    boxShadow =''
  } else {
    navContainerClass = 'bg-white';
    textClass = 'text-black'
    decBg = 'bg-black'
    linkContainerBg = 'bg-white'
    logoClass = 'w-[60px]'
    boxShadow ='nav_box'
  }
  return (
    <div className={`w-full flex justify-center items-center ${style.nav_container} ${navContainerClass}`}
      style={{
        boxShadow : isHomePage? '' : 'rgba(0, 0, 0, 0.08) 0px 4px 12px;'
      }}
    >
      <nav className={`${style.nav} flex`}>
        <div className={`${style.brand_container} grid grid-cols-12`}>
          <div className="col-span-9 flex items-center">
            <Link href='/'>
              <img className={`${style.logo} ${logoClass}`} src="/pictures/logoMain2.png" alt="" />

            </Link>
          </div>
          <div className="col-span-2 flex flex-col">
            <button className={`w-full flex-col justify-center items-end h-full ${style.button_container}`} onClick={toggleSidebar}>
              <div className={`${style.toggle_top_dec} ${decBg}`}
                style={{
                  transform: isSidebarOpen ? 'rotate(-40deg)' : 'rotate(0deg)',
                  width: isSidebarOpen ? '60%' : '80%'
                }}
              ></div>
              <div className={`${style.toggle_bottom_dec} ${decBg}`}
                style={{
                  transform: isSidebarOpen ? 'rotate(40deg)' : 'rotate(0deg)',
                  marginTop: isSidebarOpen ? '-2px' : '10px'

                }}
              ></div>
            </button>
          </div>
        </div>
        <div className={`flex justify-end items-center ${style.links_container} ${linkContainerBg} md:bg-transparent  ${isSidebarOpen ? style.sidebar_open : style.sidebar_closed}`}>
          {navigation_data.map((data, i) => (
            <a href={`/${data.toLowerCase()}`} key={i} className={`${style.nav_link} ${isSidebarOpen ?  'text-black' : textClass }`}>{data}</a>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Index