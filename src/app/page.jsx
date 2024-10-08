'use client'
import { useState, useEffect } from 'react';
import { Link, Image }   from "@nextui-org/react"
import {Accordion, AccordionItem} from "@nextui-org/accordion";

import '../app/assets/styles.css'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
 
  const images = [
    { src: '/carousel1.jpg', alt: 'Imagen 1' },
    { src: '/carousel2.jpg', alt: 'Imagen 2' },
    { src: '/carousel3.jpg', alt: 'Imagen 3' },
    { src: '/carousel4.jpg', alt: 'Imagen 4' }
  ];
  
  const textos1 = [
    { titulo: "Adaptación al mundo laboral actual y futuro", texto: "Contarás con las competencias más demandadas, las que en el futuro te abrirán las puertas a las mejores oportunidades"},
    { titulo: "Integración de habilidades interdisciplinarias", texto: "Podrás aplicar tus habilidades de programación en áreas como ciencias, matemáticas, arte o música, fortaleciendo tu aprendizaje integral"}
  ]

  const textos2 = [
    { titulo: "Innovación y creación:", texto: "Con el conocimiento de lenguajes de programación puedes crear productos innovadores como aplicaciones móviles, plataformas web, herramientas de automatización y más. Te da el poder de convertir ideas en soluciones tecnológicas" },
    { titulo: "Resolver problemas complejos:", texto: "Aprender a programar desarrolla habilidades de resolución de problemas. Permite a las personas abordar desafíos de manera estructurada y lógica, descomponiendo problemas complejos en partes más manejables." },
    { titulo: "Comprensión del mundo digital:", texto: "Vivimos en una era digital, por lo tanto, comprender cómo funcionan las aplicaciones y el software a nivel fundamental te permite navegar mejor en el mundo moderno y participar de manera activa en su evolución." }
  ]

  const textos3 = [
    { titulo: "Alta demanda laboral: ", texto: "Las empresas buscan personas con habilidades en programación para desarrollar aplicaciones, sistemas, automatizar procesos y manejar datos. La tecnología impulsa muchos sectores, lo que genera una creciente demanda de programadores." },
    { titulo: "Versatilidad y adaptabilidad: ", texto: "Estudiar un lenguaje de programación proporciona una base que facilita aprender otros lenguajes. Los conceptos fundamentales de la programación, como algoritmos, estructuras de datos y lógica de control, son aplicables en todos los lenguajes." },
    { titulo: "Mejora de la productividad: ", texto: "La programación permite automatizar tareas repetitivas o complejas, lo que ahorra tiempo y mejora la eficiencia en muchas áreas. Desde scripts simples hasta procesos industriales, la automatización es un beneficio clave." }
  ]

    const defaultContent = [
      'Algorismus es una escuela de programación que imparte clases en forma presencial u online, cuyo objetivo es enseñar y entregar competencias en el área de la computación, permitiendo a los jóvenes pasar de ser usuarios a ser CREADORES de aplicaciones.',
      'Está orientado a jóvenes entre los 15 y 20 años (estar cursando entre 1ero y 4to de enseñanza media), de manera de entregarles las competencias necesarias para comenzar a desarrollar aplicaciones web y móviles',
      'Las clases son presenciales u online, donde el alumno participa activamente en cada una de ellas, interactuando con el profesor, con sus compañeros, realizando trabajos en forma práctica y con apoyo permanente. LAS CLASES NO SON VIDEOS GRABADOS.',
      'Nuestros cursos comprenden los lenguajes con mayor demanda en la actualidad: JavaScript, Phyton y Ruby; junto con las bases de datos relacionales (sql) y no relacioanles. Revisa en detalle el programa y las competencias generales que se adquieren en cada curso en la opción "Cursos" de la barra de navegación/menú.',
      'Los alumnos adquieren una serie de competencias, las que les permitirán comenzar a incursionar en el mundo de las aplicaciones. Es un primer paso para conocer y decidir si, posteriormente al terminar tus estudios de enseñanza media, desean dedicarse profesionalmente a esta área y profundizar con estudios superiores, o bien, simplemente usar los conocimentos adquiridos para tener una ventaja competitiva en este mundo digital. El detalle de las aplicaciones prácticas y oportunidades laborales se encuentran en la descripción de cada curso.',
      'El detalle de cada curso se puede ver en la opción "Cursos" de la barra de navegación/menú.'
    ]


  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);


  return (
 
    <div className="pt-[96px]">

      <div className="pt-8 pb-4 md:pb-10 px-0 mx-4 md:mx-10">
        <div className="flex flex-row">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className={index === activeIndex ? "w-full block" : "hidden"}
          />
        ))}
        </div>
      </div>

      <div className="row py-5 md:py-10 mx-4 md:mx-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 flex flex-col font-light text-xl pt-2 md:pt-0 mx-4 md:mx-10">
              <p className='text-left font-bold font-sans'>Steve Jobs</p>
              <p className='text-left font-ligth font-sans'>“Todo el mundo debería aprender a programar un computador, aprender un lenguaje de programación, porque te enseña a pensar.”</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col font-light text-xl pt-8 md:pt-0 mx-4 md:mx-10">
            <p className='text-left font-bold font-sans'>Bill Gates</p>
            <p className='text-left font-ligth font-sans'>“Habrá dos tipos de negocios en el siglo XXI, aquellos que estén en Internet y aquellos que ya no existan.”</p>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center text-center">
        <div className="w-full md:w-3/5 py-5">
          <p className='pb-5 font-bold font-sans text-2xl'>Preguntas frecuentes</p>
          <Accordion variant="splitted">
            <AccordionItem className='text-left bg-slate-600 text-white' key="1" aria-label="Accordion 1" title="¿Qué es Algorismus?">
              <p className='font-thin font-sans'>  {defaultContent[0]} </p>
            </AccordionItem>
            <AccordionItem className='text-left bg-slate-600 text-white' key="2" aria-label="Accordion 2" title="¿A quiénes está orientado?">
              <p className='font-thin font-sans'> {defaultContent[1]} </p>
            </AccordionItem>
            <AccordionItem className='text-left bg-slate-600 text-white' key="3" aria-label="Accordion 3" title="¿Cómo son las clases?">
              <p className='font-thin font-sans'> {defaultContent[2]} </p>
            </AccordionItem>
            <AccordionItem className='text-left bg-slate-600 text-white' key="4" aria-label="Accordion 4" title="¿Qué lenguaje de programación se aprende?">
              <p className='font-thin font-sans'> {defaultContent[3]} </p>
            </AccordionItem>
            <AccordionItem className='text-left bg-slate-600 text-white' key="5" aria-label="Accordion 5" title="¿Qué aplicación práctica tendrán los conocimientos que adquieren?">
            <p className='font-thin font-sans'> {defaultContent[4]} </p>
            </AccordionItem>
            <AccordionItem className='text-left bg-slate-600 text-white' key="6" aria-label="Accordion 6" title="¿Dónde encuentro información de los cursos que dictan?">
            <p className='font-thin font-sans'> {defaultContent[5]} </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>


      <div className="my-0 mx-4 md:mx-10 py-10 px-0 bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-4"> 


        <div className="flex align-top justify-center sm:justify-end">
          <Image  className="border-white border-2" width={250} alt="2126693798" radius="sm" src="/message1.jpg"/>
        </div>

        <div className="mx-0 md:mx-10">
          <p className="text-center font-sans font-bold text-2xl">En el año 2030, el 90% de los trabajos van a requerir conocimientos de programación </p>
          <br/>

          <ul className="list-none">
            {textos1.map((item, index) => (
              <li key={index}>
                <p className='text-left font-sans font-bold'> {item.titulo} </p> 
                <p className='text-left font-sans font-thin'> {item.texto} </p> <br/>
              </li>
            ))}
          </ul>
        </div>


        <div>
        </div>

        <div>
          <p className="font-sans font-bold text-2xl text-center">¿Por qué estudiar programación?</p>
          <br/>
        </div>


        <div className="flex align-top justify-center sm:justify-end">
          <Image  className="border-white border-2" width={250} alt="2126693798" radius="sm" src="/message2.jpg"/>
        </div>

        <div>
          <div className="mb-4 font-sans font-thin mx-0 md:mx-10">
            <ul className="list-none">
              {textos2.map((item, index) => (
                <li key={index}>
                    <a className="text-left font-sans font-bold"> {item.titulo} </a>
                    <a className="text-left font-sans font-thin"> {item.texto} </a><br/><br/>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="flex align-top justify-center sm:justify-end">
          <Image  className="border-white border-2" width={250} alt="2126693798" radius="sm" src="/message3.jpg"/>
        </div>

        <div>
        <div className="mb-4 font-sans font-thin mx-0 md:mx-10">
            <ul className="list-none">
              {textos3.map((item, index) => (
                <li key={index}>
                    <a className="text-left font-sans font-bold"> {item.titulo} </a>
                    <a className="text-left font-sans font-thin"> {item.texto} </a><br/><br/>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>

{/*
      <div className="flex flex-col md:flex-row justify-center">
        <Link className="color_1 w-full md:w-96 h-10 text-center justify-center border-white border-2 rounded-xl"
              isExternal
              showAnchorIcon
              href="/cursos">
              Revisa los cursos disponibles
        </Link>
      </div>
*/}
    </div>
  );
}
