import React from 'react'
import { clubs_data } from '../api/clubs'
import style from '../../styles/Clubs/clubs.module.scss'
import globalStyle from '../../styles/public.module.scss'
function Index() {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[80%] flex flex-col justify-center items center mt-40'>
                {clubs_data.map((data, i) => (
                    <div key={i} className={` ${style.clubs_container} w-full flex flex-col mb-20 `}>
                        {/* club name & logo */}
                        <div className="flex items-center">
                            <h1 className="activity_title">{data.title}</h1>
                            <img src={`/pictures/clubs/${data.logo}`} className='h-[50px] w-[50px] ml-[10px] object-contain' alt="" />
                        </div>
                        {/* club description */}
                        <p className=" mt-[10px]">{data.desc}</p>

                        {/* club founer */}
                        <div className="flex mt-[10px]">
                            <p>Themeluesit/et : <b>{data.founder}</b></p>
                        </div>

                        {/* club main image */}
                        <div className="grid grid-cols-12 w-full">
                            <div style={{ backgroundImage: `url('/pictures/gallery/${data.main_image_one}')` }}
                                className={`col-span-12 md:col-span-6 h-[70vh] mt-[20px] ${style.clubs_image_container}`} />
                            <div style={{ backgroundImage: `url('/pictures/gallery/${data.main_image_two}')` }}
                                className={`col-span-12 md:col-span-6 h-[70vh] mt-[20px] ${style.clubs_image_container}`} />
                        </div>


                    </div>
                ))}
            </div>
        </div>
    )
}

export default Index