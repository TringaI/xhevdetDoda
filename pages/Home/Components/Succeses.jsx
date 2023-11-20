import React from 'react'
import publicStyle from '../../../styles/public.module.scss'


function Activities() {
    const image = [
        'pianist.jpg',
        'achTwo.jpg',
        'avOne.jpg',
        'picTwo.jpg',
    ]
    return (
        <main className='w-full flex justify-center items-center mt-20'>
            <div className='flex flex-col w-[80%] justify-center items-center'>
                <h1 className='text-center'>Sukseset e Xhevdet Dodës</h1>
                <p className='text-center  md:w-[80%] mt-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    has a more-or-less normal distribution of letters, as opposed to using Content here, content here,</p>
                <div className="w-full grid grid-cols-12 gap-5 mt-[30px] ">
                    {image.map((e, i)=>(
                        <img key={i} src={`pictures/gallery/${e}`} className='col-span-6 md:col-span-3 h-[200px] object-cover w-full'/>
                    ))}
                </div>
                <a href="/sukseset" className={`mt-[20px] text-[25px] ${publicStyle.color_primary_red}`}><i>Shiko më shumë suksese </i></a>
            </div>
                            
        </main>
    )
}

export default Activities