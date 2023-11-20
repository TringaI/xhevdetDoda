import React from 'react'
import style from '../../../styles/Home/home.module.scss'
function FixedDec() {
    return (
        <div className={`w-full pt-[300px] pb-[300px] ${style.fixed_dec_container} flex flex-col relative justify-center items-center`}>
            <h1 className='text-white text-[45px] md:text-[60px] pb-20 text-center'>Te bashkuar per nje te <br className='hidden md:block' /> <b>ardhme me te mire</b></h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-0'>
                <path fill="#ffffff" fill-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,277.3C384,277,480,235,576,202.7C672,171,768,149,864,170.7C960,192,1056,256,1152,266.7C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default FixedDec