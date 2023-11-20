import React from 'react'
import publicStyle from '../../../styles/public.module.scss'

function Activities() {
  return (
    <main className='mt-20 w-full flex flex-col justify-center items-center md:flex-row'>
        <img src="/pictures/gallery/g41_2.png" alt="" className='w-[100%] md:w-[55%] object-cover h-[400px]' />
        <div className="flex flex-col w-[95%] md:w-[45%] justify-center items-center">
            <h1 className='mt-[30px] md:mt-0'>Panairi Shkencor</h1>
            <p className='mt-[30px] w-[100%] md:w-[80%] text-center'>
            ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
             of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
             a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
            </p>
            <a href="/aktivitetet" className={`mt-[20px]  mb-[30px] mt:mb-0 text-[25px] ${publicStyle.color_primary_red}`}><i>Shiko më shumë aktivitete </i></a>

        </div>
    </main>
  )
}

export default Activities