import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Clubs() {
  function importAllImages(r) {
    return r.keys().map((filename) => ({
      filename,
      image: r(filename).default,
    }));
  }

  let images = importAllImages(
    require.context('../../../public/pictures/clubs', false, /\.(png|jpe?g|svg)$/)
  );

  images = images.slice(0, Math.round(images.length));

  // Find the maximum height among the images
  const maxHeight = Math.max(...images.map(({ image }) => image.height/9));

  return (
    <div className="w-full grid grid-cols-12 pt-20 pb-20">
      {images.map(({ filename, image }, index) => (
        <div
          key={index}
          className="col-span-3 relative flex flex-col justify-center items-center"
          style={{ height: `${maxHeight}px` }} // Set the height dynamically
        >
          <img
            src={`/pictures/clubs/${filename.replace(/^\.\/(.*?)/, '$1')}`}
            alt=""
            width={140}
          />
          <p className="absolute bottom-0 font-medium" >
            {filename.replace(/^\.\/(.*?)\.(png|jpe?g|svg)$/, '$1')}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Clubs;
