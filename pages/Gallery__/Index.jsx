import React from 'react'

function Index() {
    function importAllImages(r) {
        return r.keys().map((filename) => ({
          filename,
          image: r(filename).default,
        }));
      }
    
      let images = importAllImages(
        require.context('../../public/pictures/gallery', false, /\.(png|jpe?g|svg)$/)
      );
    
      images = images.slice(0, Math.round(images.length));
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className="grid grid-cols-12 w-[90%] gap-5 pt-40 ">
            {images.map(({filename, image} ,index)=>(
                <div key={index} className='col-span-6 md:col-span-4 lg:col-span-3 h-[200px] lg:h-[300px] '>
                    <img src={`/pictures/gallery/${filename.replace(/^\.\/(.*?)/, '$1')}`} alt="" className='w-full h-full object-cover' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Index