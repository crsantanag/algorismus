'use client'
import { Link, Image }   from "@nextui-org/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import "../assets/styles.css";

const nosotros = () => {

    const items1 = [
    ];
    const items2 = [
    ];
    const items3 = [
    ];
    const items4 = [
    ];
    const items5 = [
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
                        <div className="px-2 md:px-4 text-left">
                            <p className="font-light font-sans"><span className="font-bold">ALGORISMUS LEARNING</span> surge como respuesta a la creciente necesidad de formar a los jóvenes en habilidades esenciales en el mundo digital. Nos centramos en desarrollar <span className="font-bold"> competencias </span> clave en programación, resolución de problemas y pensamiento lógico, esenciales para un futuro donde la tecnología marca la diferencia.<br/><br/>

                            Nuestro enfoque es práctico y dirigido a dotar a los jóvenes de las herramientas necesarias para enfrentar los desafíos tecnológicos de hoy y del mañana.<br/><br/>
                            
                            En un mundo donde la presencia digital es fundamental, poseer habilidades en programación no es solo una ventaja competitiva, sino una necesidad. Como bien lo expresó Bill Gates: <span className="font-bold"> Si tu negocio no está en Internet, no existe.</span>
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col px-2 md:px-4 pb-5" >
                        <div className="text-center">
                            <span className="color_1 flex items-center justify-center h-16 font-bold">
                                <a className="flex h-8 items-center justify-center" href="https://csantana.vercel.app/"> 
                                Carlos Santana &nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="color_1 w-6 h-6 pl-2" icon={faExternalLinkAlt} />
                                </a>
                            </span>
                        </div> <br/>
                        <div className="px-2 md:px-4 text-left">
                            <p className="font-light font-sans">
                            Es ingeniero en Computación e Informática de la Universidad de Concepción y también ingeniero Civil 
                            Industrial de la misma Universidad, además de contar con un Magíster en Administración de Empresas (MBA) 
                            de la Universidad del Desarrollo.<br/><br/> 
                            
                            Tiene más de 30 años de experiencia en la dirección y gestión estratégica 
                            de pequeñas y medianas empresas. Ha actualizado y ampliado sus conocimientos en los últimos años, adquiriendo 
                            nuevas competencias en el área de Desarrollo Web Full Stack con tecnologías como JavaScript, Ruby 
                            on Rails y Python. <br/><br/>

                            Recientemente crea la escuela de programación <span className="font-bold">ALGORISMUS</span>, cuyo 
                            objetivo es proporcionar a jóvenes las <span className="font-bold">competencias</span> y habilidades necesarias para comenzar a navegar en el
                            fascinante mundo del desarrollo de aplicaciones web y móviles, así como también del análisis de datos.
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col px-2 md:px-4 pb-5" > 
                        <div className="text-center"> 
                            <span className="color_1 flex items-center justify-center h-16 font-bold">Asesores Educacionales
                                <a className="flex h-8 items-center justify-center"> 
                                    {/*<FontAwesomeIcon className="color_1 w-6 h-6 pl-2" icon={faExternalLinkAlt} />*/}
                                </a>
                            </span>
                        </div> <br/>
                        <div className="px-2 md:px-4 text-left">
                            <p className="font-light font-sans">
                            Asesor Educacional 1<br/>
                            [ agregar presentación ]<br/><br/>
                            Asesor Educacional 2<br/>
                            [ agregar presentación ]<br/><br/>
                            Asesor Educacional 3<br/>
                            [ agregar presentación ]<br/>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center">
                <Link   className="color_1 w-full md:w-96 h-10 text-center justify-center border-white border-2 rounded-xl"
                        isExternal
                        showAnchorIcon
                        href="/cursos">
                Revisa los cursos disponibles
                </Link>
            </div>

        </div>
    </>
    );
};

export default nosotros;
