import React, { useEffect, useState } from 'react';
import { news_data } from '../api/news';
import style from '../../styles/News/news.module.scss';

function Index() {
  const [maxHeight, setMaxHeight] = useState(0);
  const [pMaxHeight , setPMaxHeight] = useState(0)

  useEffect(() => {
    // Calculate the maximum height
    const heights = Array.from(document.getElementsByClassName(style.new_title)).map(
      (element) => element.clientHeight
    );
    const max = Math.max(...heights);
    setMaxHeight(max);


  }, []); // Run the effect once after the initial render

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[90%] flex flex-col justify-center items-center mt-40'>
        <div className='grid w-full grid-cols-12 gap-5'>
          {news_data.map((data, i) => (
            <div
              className={`col-span-12 md:col-span-6 lg:col-span-4 flex flex-col relative h-full items-center ${style.news_container} `}
              key={i}
               // Set the height dynamically
            >
              <h1 className={style.news_title} style={{ height: `${maxHeight}px` }}>{data.title}</h1>
              <p className={`mt-[30px] ${style.p}`} >{data.desc}</p>
              <a href='' className={style.news_link}>
                {data.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
