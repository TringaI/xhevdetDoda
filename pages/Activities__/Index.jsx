import React from 'react'
import style from '../../styles/Activities/activities.module.scss'
import { activities_data } from '../api/activities'
function Index() {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[90%] flex flex-col justify-center items center mt-40'>
        {activities_data.map((data, i) => (
          <div key={i} className="activity_container w-full flex flex-col mb-20 ">
            {/* activity title */}
            <h1 className="activity_title">{data.title}</h1>  
            {/* activity description */}
            <p className="activity_desc">{data.desc}</p>

            {/* activity main image */}
            <div style={{ backgroundImage: `url('/pictures/gallery/${data.main_image}')` }}
              className={`w-full h-[60vh] mt-[20px] ${style.activity_image_container}`} />

              {/* activity supplemental images */}
            <div className="grid grid-cols-12 gap-2 mt-[10px] w-full">
              {data.sup_images.map((image,i)=>(
                <div key={i} className={`col-span-6 md:col-span-3 h-[200px] lg:h-[200px] ${style.sup_images}`}
                style={{ backgroundImage: `url('/pictures/gallery/${image}')` }}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index