import React from 'react'
import style from '../../../styles/Navigation/secondaryNav.module.scss'
function Index() {
  return (
    <div className={`w-full flex justify-end ${style.secondary_nav_container} p-[10px] pr-[30px] fixed`}>
        <a href="/njoftimet" className='text-white'>NJOFTIMET</a>
        <a href="" className='text-white ml-[20px]'>ORARI</a>
    </div>
  )
}

export default Index