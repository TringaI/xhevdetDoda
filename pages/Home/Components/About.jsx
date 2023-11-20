import React from 'react'
import publicStyle from '../../../styles/public.module.scss'
import style from '../../../styles/Home/home.module.scss'
function About() {
    return (
        <section className='w-full grid grid-cols-12'>
            <div className={`col-span-12 md:col-span-7 pt-20 pb-20 flex flex-col items-center justify-center ${publicStyle.bg_primary_red} `}>
                <div className='w-[70%]'>
                    <h1 className='text-white text-[55px] font-medium w-full'>Rreth <br />Xhevdet Dodës</h1>
                    <p className='text-white font-[25px] mt-[50px] w-[100%] md:w-[60%] font-normal'>njeri nga gjimnazet me te dalluar ne rajon,
                    nje vend qe siguron edukim te nivelit te larte. Ne sigurohemi qe nxenesit tone te ndihen te vleresuar
                    duke i mbeshtetur ne cdo aktivitet</p>
                    <div className="flex mt-[50px]">
                        <div className={style.circles}></div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:relative ">
                <div className='bg-black w-[100%] h-[300px]  md:w-[120%] md:top-[20%] md:h-[80%] relative md:left-[-20%]' id={style.carosel_container} >
                </div> 
            </div>
        </section>
    )
}

export default About