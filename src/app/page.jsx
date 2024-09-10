'use client'
import { useState, useEffect } from 'react';
import { Link, Image }   from "@nextui-org/react"
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

      <div className="pt-4 pb-4 md:pb-10 px-0 mx-4 md:mx-10">
        <div className="flex flex-row">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full" 
            style={{ display: index === activeIndex ? 'block' : 'none' }}
          />
        ))}
        </div>
      </div>

      <div className="row py-5 md:py-10">

        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 flex flex-col font-light text-xl pt-2 md:pt-0 mx-4 md:mx-10">
              <p className='text-left font-bold font-sans'>Steve Jobs</p>
              <p className='text-left font-ligth font-sans'>“Todo el mundo debería aprender a programar un computador, aprender un lenguaje de programación, porque te enseña a pensar. Veo la ciencia de la computación como un arte libre.”</p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col font-light text-xl pt-4 md:pt-0 mx-4 md:mx-10">
            <p className='text-left font-bold font-sans'>Arthur C. Clarke</p>
              <p className='text-left font-ligth font-sans' >“Los microprocesadores se están metiendo en todo. En un futuro cercano no habrá ningún accesorio -salvo una escoba, acaso- que no tenga un procesador dentro.”</p>
          </div>

        </div>
      </div>

      <div className="my-0 mx-4 md:mx-10 py-10 px-0 bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-4"> 

        <div className="flex justify-end">
          <Image  className="border-white border-2"
                  alt="2126693798"
                  radius="sm"
                  src="/message1.jpg"/>
        </div>

        <div className="mx-0 md:mx-10">
          <p className="font-sans font-bold text-2xl">En el año 2030, el 90% de los trabajos van a requerir conocimientos de programación </p>
          <br/>
          <p className="text-left font-sans font-bold"> Adaptación al mundo laboral actual y futuro </p>
          <p className="text-left font-sans font-thin">Contarás con las competencias más demandadas, las que en el futuro te abrirán las puertas a las mejores oportunidades</p>
          <br/>
          <p className="text-left font-sans font-bold"> Integración de habilidades interdisciplinarias </p>
          <p className="text-left font-sans font-thin">Podrás aplicar tus habilidades de programación en áreas como ciencias, matemáticas, arte o música, fortaleciendo tu aprendizaje integral</p>
        </div>

        <div className="flex justify-end">
          <Image  className="border-white border-2" alt="2126693798" radius="sm" src="/message2.jpg"/>
        </div>

        <div>
          <p className="font-sans font-bold text-2xl text-center">Por qué estudiar programación </p>
          <br/>
          <p className="font-sans text-left font-thin">
            <span className="font-sans font-semibold"> Alta demanda laboral:</span> Las empresas en todas las industrias buscan personas con habilidades en programación para desarrollar aplicaciones, sistemas, automatizar procesos y manejar datos. La tecnología impulsa muchos sectores, lo que genera una creciente demanda de programadores.
            <br/><br/>
            <span className="font-sans font-semibold"> Resolver problemas complejos:</span> Aprender a programar desarrolla habilidades de resolución de problemas. Permite a las personas abordar desafíos de manera estructurada y lógica, descomponiendo problemas complejos en partes más manejables.
            <br/><br/><span className="font-sans font-semibold"></span>
            <span className="font-sans font-semibold"> Alta demanda laboral:</span> Las empresas en todas las industrias buscan personas con habilidades en programación para desarrollar aplicaciones, sistemas, automatizar procesos y manejar datos. La tecnología impulsa muchos sectores, lo que genera una creciente demanda de programadores.
            <br/><br/>
            <span className="font-sans font-semibold"> Resolver problemas complejos:</span> Aprender a programar desarrolla habilidades de resolución de problemas. Permite a las personas abordar desafíos de manera estructurada y lógica, descomponiendo problemas complejos en partes más manejables.
          </p>
        </div>

        <div className="flex justify-end">
          <Image  className="border-white border-2"
                  alt="2126693798"
                  radius="sm"
                  src="/message3.jpg"/>
        </div>

        <div>
          <p className="font-sans text-left font-thin">
            <span className="font-sans font-semibold">Innovación y creación:</span> Con el conocimiento en lenguajes de programación, puedes crear productos innovadores como aplicaciones móviles, plataformas web, herramientas de automatización y más. Te da el poder de convertir ideas en soluciones tecnológicas.
            <br/><br/>
            <span className="font-sans font-semibold">Versatilidad y adaptabilidad:</span> Estudiar un lenguaje de programación proporciona una base que facilita aprender otros lenguajes. Los conceptos fundamentales de la programación, como algoritmos, estructuras de datos y lógica de control, son aplicables en muchos lenguajes.
            <br/><br/>
            <span className="font-sans font-semibold">Mejora de la productividad:</span> La programación permite automatizar tareas repetitivas o complejas, lo que ahorra tiempo y mejora la eficiencia en muchas áreas. Desde scripts simples hasta procesos industriales, la automatización es un beneficio clave.
            <br/><br/>
            <span className="font-sans font-semibold">Comprensión del mundo digital:</span> Vivimos en una era digital, y comprender cómo funcionan las aplicaciones y el software a nivel fundamental te permite navegar mejor en el mundo moderno y participar de manera activa en su evolución.
          </p>
        </div>
        
      </div>

      <div className="flex flex-col md:flex-row justify-center">
        <Link className="color_1 w-full md:w-96 h-10 text-center justify-center border-white border-2 rounded-xl"
              isExternal
              showAnchorIcon
              href="/cursos">
              Revisa los cursos disponibles
        </Link>
      </div>

    </div>
  );
}
