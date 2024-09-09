'use client'
import { useState, useEffect } from 'react';
import { Image }   from "@nextui-org/react"
import '../app/assets/styles.css'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { src: '/carousel1.jpg', alt: 'Imagen 1' },
    { src: '/carousel2.jpg', alt: 'Imagen 2' },
    { src: '/carousel3.jpg', alt: 'Imagen 3' },
    { src: '/carousel4.jpg', alt: 'Imagen 4' }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (

    <div className="pt-[96px]">

      <div className="pt-4 pb-10 mx-4 px-0 md:mx-10">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto" 
            style={{ display: index === activeIndex ? 'block' : 'none' }}
          />
        ))}
      </div>

      <div className="row py-5">
      {/* En pantallas pequeñas: una columna, en pantallas grandes: dos columnas */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 flex flex-col font-light text-xl">
            <div className='mx-4 md:mx-10'>
              <p className='text-left font-light font-sans'>“Todo el mundo debería aprender a programar un computador, aprender un lenguaje de programación, porque te enseña a pensar. Veo la ciencia de la computación como un arte libre.”</p>
              <p className='text-end'>Steve Jobs</p>
            </div>
          </div>
          {/* Segundo bloque de texto */}
          <div className="w-full md:w-1/2 flex flex-col font-light text-xl pt-4 md:pt-0">
            <div className='mx-4 md:mx-10'>
              <p className='text-left font-light font-sans' >“Los microprocesadores se están metiendo en todo. En un futuro cercano no habrá ningún accesorio -salvo una escoba, acaso- que no tenga un procesador dentro.”</p>
              <p className='text-end'>Arthur C. Clarke</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
