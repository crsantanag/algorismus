'use client'
import { Image } from "@nextui-org/react";
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
                            <p className="font-light font-sans"><span className="font-bold">ALGORISMUS LEARNING</span> nace como respuesta a la necesidad de desarrollar <span className="fst -italic"> <span className="font-bold">competencias </span> </span> en el área de la computación, con un
                            enfoque en habilidades prácticas como la programación y la resolución de problemas.<br/><br/>
                            

                            <br/><br/>Nuestra organización se enfoca en ofrecer una enseñanza adaptada 
                            a las demandas actuales, enfocándose en las <span className="fst-italic"><span className="font-bold">competencias
                            </span></span> necesarias para prosperar en un mundo digital.
                            <br/><br/> <q>Si un negocio no está en Internet, ese negocio no existe.</q> - Bill Gates</p>
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
                            de la Universidad del Desarrollo.<br/><br/> Tiene más de 30 años de experiencia en la dirección y gestión estratégica 
                            de pequeñas y medianas empresas. Ha actualizado y ampliado sus conocimientos en los últimos años, adquiriendo 
                            nuevas competencias en el área de Desarrollo Web Full Stack con tecnologías como JavaScript, Ruby 
                            on Rails y Python. <br/><br/>Recientemente creo la escuela de programación <span className="font-bold">ALGORISMUS</span>, cuyo 
                            objetivo es proporcionar a jóvenes las competencias y habilidades necesarias para comenzar a navegar en el
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
        </div>
    </>
    );
};

export default nosotros;
