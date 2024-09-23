'use client'
import { Link, Image, useDateInput }   from "@nextui-org/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import "../assets/styles.css";

const nosotros = () => {

    const items1 = [
    <span key="1"><strong>ALGORISMUS LEARNING </strong> surge como respuesta a la creciente necesidad de formar a los jóvenes en habilidades esenciales para el mundo digital. Nos centramos en desarrollar <strong> competencias </strong> claves en programación, resolución de problemas y pensamiento lógico, esenciales para un futuro donde la tecnología marca la diferencia.</span>,
    <span key="2">Nuestro enfoque es práctico, dirigido a dotar a los jóvenes de las herramientas necesarias para enfrentar los desafíos tecnológicos de hoy y del mañana.</span>,
    <span key="3">En un mundo donde la presencia digital es fundamental, poseer <strong> competencias </strong> en programación no es solo una ventaja competitiva, sino una necesidad.</span>,
    <span key="4"><strong>&quot;Cuando se innova, tiene que estar preparado para la gente que le dice que Ud. está loco&quot; - Larry Ellison, CEO Oracle.</strong></span>
    ];

    const items2 = [
    <span key="1">Es ingeniero en Computación e Informática de la Universidad de Concepción y también ingeniero Civil Industrial de la misma Universidad, además de contar con un Magíster en Administración de Empresas (MBA) de la Universidad del Desarrollo</span>, 
    <span key="2">Tiene más de 30 años de experiencia en la dirección y gestión estratégica de pequeñas y medianas empresas. Ha actualizado y ampliado sus conocimientos en los últimos años, adquiriendo nuevas competencias en el área de Desarrollo Web Full Stack con tecnologías como JavaScript, Ruby  on Rails y Python.</span>,
    <span key="3">Recientemente crea la escuela de programación <strong>ALGORISMUS</strong>, cuyo objetivo es proporcionar a jóvenes las <strong>competencias</strong> y habilidades necesarias para comenzar a navegar en el fascinante mundo del desarrollo de aplicaciones web y móviles, así como también del análisis de datos.</span>
    ];

    const items3 = [
    "Asesor Educacional 1",
    "[ agregar presentación ]",
    "Asesor Educacional 2",
    "[ agregar presentación ]",
    "Asesor Educacional 3",
    "[ agregar presentación ]"
    ];

    return (
        <>
        <div className="pt-[96px]">
            <div className="row py-5">
                <p className="font-bold text-3xl text-center my-10">N o s o t r o s</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:mx-10">

                    <div className="w-full flex flex-col px-2 md:px-4 pb-5" >
                        <div className="text-center">
                            <a className="color_1 flex items-center justify-center h-16 font-bold">Algorismus</a>
                        </div> <br/>
                        <div className="px-2 md:px-4 text-left font-light font-sans">
                            <ul className="list-none pl-2">
                                {items1.map((item, index) => (
                                    <li key={index}>
                                        <div className="flex flex-row">
                                            <div className="before:content-[' '] before:mr-1"></div>
                                            <div className="mr-3">
                                                {item} {<br/>} {<br/>}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-full flex flex-col px-2 md:px-4 pb-5 sm:hidden md:hidden lg:flex">
                        <Image  className="border-white border-2 rounded-2xl"
                                src="nosotros.jpg"
                                alt="Nosotros" />
                    </div>

                    <div className="w-full flex flex-col px-2 md:px-4 pb-5">
                        <div className="text-center">
                            <span className="color_1 flex items-center justify-center h-16 font-bold">
                                <a className="flex h-8 items-center justify-center" href="https://csantana.vercel.app/"> 
                                Carlos Santana &nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="color_1 w-6 h-6 pl-2" icon={faLink} />
                                </a>
                            </span>
                        </div> <br/>
                        <div className="px-2 md:px-4 text-left font-light font-sans">
                            <ul className="list-none pl-2">
                                {items2.map((item, index) => (
                                    <li key={index}>
                                        <div className="flex flex-row">
                                            <div className="before:content-[' '] before:mr-1"></div>
                                            <div className="mr-3">
                                                {item} {<br/>} {<br/>}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

{/*                    <div className="w-full flex flex-col px-2 md:px-4 pb-5" > 
                        <div className="text-center"> 
                            <span className="color_1 flex items-center justify-center h-16 font-bold">Asesores Educacionales
                                <a className="flex h-8 items-center justify-center"> </a>
                            </span>
                        </div> <br/>
                        <div className="px-2 md:px-4 text-left font-light font-sans">
                            <ul className="list-none pl-2">
                                {items3.map((item, index) => (
                                    <li key={index}>
                                        <div className="flex flex-row">
                                            <div className="before:content-[' '] before:mr-1"></div>
                                            <div className="mr-3">
                                                {item} {<br/>}
                                                {index === 1 || index === 3 || index == 5? <br /> : null}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
*/}                {/*<FontAwesomeIcon className="color_1 w-6 h-6 pl-2" icon={faExternalLinkAlt} />*/}
                </div>
            </div>
{/*
            <div className="flex flex-col md:flex-row justify-center">
                <Link   className="color_1 w-full md:w-96 h-10 text-center justify-center border-white border-2 rounded-xl"
                        isExternal
                        showAnchorIcon
                        href="/cursos">
                Revisa los cursos disponibles
                </Link>
            </div>
*/}
        </div>
    </>
    );
};

export default nosotros;
