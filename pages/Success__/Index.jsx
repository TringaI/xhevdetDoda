import React from 'react'
import style from '../../styles/Success/succes.module.scss'
import { success_data } from '../api/success'
function Index() {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[90%] flex flex-col justify-center items center mt-40'>
        {success_data.map((data, i) => (
          <div key={i} className="activity_container w-full flex flex-col ">
            {/* success title */}
            <h1 className="activity_title">{data.title}</h1>  
            {/* success description */}
            <p className="activity_desc">{data.desc}</p>

            {/* success main image */}
            <div style={{ backgroundImage: `url('/pictures/gallery/${data.main_image}')` }}
              className={`w-full h-[70vh] mt-[20px] ${style.success_image_container}`} />

          </div>
        ))}
      </div>
    </div>
  )
}

export default Index