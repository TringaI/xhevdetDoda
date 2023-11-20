import React from 'react'
import style from '../../../styles/Home/components/header.module.scss'
function Header() {
  return (
    <header className={`w-full p-20 ${style.header} h-[100vh] flex flex-col items-center justify-center`}>
        <h1 className='text-white mt-[60px] md:mt-0 text-[60px] md:text-[75px]'>Gjimnazi <b>Xhevdet Doda</b></h1>
    </header>
  )
}

export default Header