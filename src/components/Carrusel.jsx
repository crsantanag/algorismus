'use client'
import { useState } from 'react';
import { Image }    from '@nextui-org/react';

const images = [
  { src: '/carousel1.jpg', alt: 'Imagen 1' },
  { src: '/carousel2.jpg', alt: 'Imagen 2' },
  { src: '/carousel3.jpg', alt: 'Imagen 3' },
  { src: '/carousel4.jpg', alt: 'Imagen 4' }
];

export default function Carrusel () {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={image.src} alt={image.alt} className="object-cover" />
          </div>
        ))}
      </div>
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2">Prev</button>
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2">Next</button>
    </div>
  );
};
