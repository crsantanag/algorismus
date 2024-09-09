'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faBootstrap, faJs, faReact, faPython} from '@fortawesome/free-brands-svg-icons';

import '../assets/styles.css'

const cursos = () => {

    return (
    <>
        <div className="pt-[96px]">
            <div className="custom-margin py-5">
                <p className="font-bold text-3xl text-center my-10">C u r s o s</p>
                <div>
                    <div className="mx-3 bg-black text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">  

                        <Card className="max-w-[400px] bg-black text-white border-white border-2 rounded-2xl">
                            <CardHeader className="flex gap-3">
                                <Image  className="border-white border-2"
                                        alt="Curso_1"
                                        radius="sm"
                                        src="/card1.jpg"/>
                                <div className="flex flex-col">
                                    <a href="https://developer.mozilla.org/es/docs/Web/HTML"> <FontAwesomeIcon icon={faHtml5} className="w-14 h-14 m-2 text-orange-600"/></a>
                                    <a href="https://developer.mozilla.org/es/docs/Web/CSS"> <FontAwesomeIcon icon={faCss3Alt}   className="w-14 h-14 m-2 text-blue-600"/></a>
                                    <a href="https://getbootstrap.com/"> <FontAwesomeIcon icon={faBootstrap} className="w-14 h-14 m-2 text-lime-500"/> </a>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                                <div className="mb-2">
                                    <p className="font-bold">HTML 5, CSS 3 y Bootstrapt</p>
                                    <p className="font-light font-sans">Este curso de Desarrollo Web Frontend te enseñará a crear aplicaciones web modernas y dinámicas utilizando HTML, CSS y Bootstrap. Aprenderás a estructurar páginas web, estilizar con CSS y hacer más fácil el trabajo con el framework Bootstrap. Ideal para principiantes.</p>
                                </div>
                            </CardBody>
                            <Divider/>
                            <CardFooter>
                                <Link className="color_1 w-full text-center justify-center  border-white border-2 rounded-xl"
                                    isExternal
                                    showAnchorIcon
                                    isBlock
                                    href="/pdf/01.htmlCssBootstrap.pdf"
                                >
                                Revisa el programa aquí
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card className="max-w-[400px] bg-black text-white border-white border-2 rounded-2xl">
                            <CardHeader className="flex gap-3  bg-black text-white">
                                <Image
                                    className="border-white border-2"
                                    alt="Curso_2"
                                    radius="sm"
                                    src="/card2.jpg"
                                    />
                                <div className="flex flex-col">
                                    <a href="https://www.javascript.com/"> <FontAwesomeIcon icon={faJs}    className="w-14 h-14 m-2 text-yellow-300"/> </a>
                                    <a href="https://es.react.dev/"> <FontAwesomeIcon icon={faReact} className="w-14 h-14 m-2 text-sky-300"/> </a> 
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                            <p className="font-bold">JavaScript y React</p>
                            <p className="font-light font-sans">Este curso de Desarrollo Web Frontend te enseñará a crear aplicaciones web modernas y dinámicas utilizando JavaScript y React. Aprenderás a estructurar páginas web, desarrollando funcionalidades interactivas con JavaScript y construir interfaces eficientes con React.</p> 
                            </CardBody>
                            <Divider/>
                            <CardFooter>
                                <Link className="bg-black text-white items-center"
                                    isExternal
                                    showAnchorIcon
                                    href="/pdf/02.JavascripReact.pdf"
                                >
                                Revisa el programa aquí
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card className="max-w-[400px] bg-black text-white border-white border-2 rounded-2xl">
                            <CardHeader className="flex gap-3  bg-black text-white">
                                <Image className="border-white border-2"
                                        alt="Curso_3"
                                        radius="sm"
                                        src="/card3.jpg"/>
                                <div className="flex flex-col">
                                    <div className="w-14 h-14 m-2">
                                        <a href="https://www.mongodb.com/es"> <Image  src="/svg/mongo-svgrepo-com.svg" alt="MongoDB Icon"/> </a>
                                    </div>
                                    <div className="w-14 h-14 m-2">
                                        <a href="https://www.postgresql.org/"><Image  src="/svg/pgsql-svgrepo-com.svg" alt="PostgreSQL Icon"/> </a> 
                                    </div> 
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                            <p className="font-bold">Bases de Datos relacionales y no relacionales</p>
                            <p className="font-light font-sans">Este curso ofrece una comprensión integral de las bases de datos relacionales y no relacionales, enfocándose en PostgreSQL y MongoDB. Los estudiantes aprenderán a modelar, consultar, y optimizar bases de datos, además de explorar características avanzadas como transacciones en PostgreSQL y agregaciones en MongoDB.</p> 
                            </CardBody>
                            <Divider/>
                            <CardFooter>
                                <Link className="bg-black text-white items-center"
                                    isExternal
                                    showAnchorIcon
                                    href="/pdf/03.baseDeDatos.pdf"
                                >
                                Revisa el programa aquí
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card className="max-w-[400px] bg-black text-white border-white border-2 rounded-2xl">
                            <CardHeader className="flex gap-3  bg-black text-white">
                                <Image
                                    className="border-white border-2"
                                    alt="Curso_4"
                                    radius="sm"
                                    src="/card4.jpg"
                                    />
                                <div className="flex flex-col">
                                    <div className="w-14 h-14 m-2">
                                        <a href="https://www.ruby-lang.org/es/"> <Image  src="/svg/ruby-svgrepo-com.svg" alt="Ruby Icon"/> </a>
                                    </div>
                                    <div className="w-14 h-14 m-2">
                                        <a href="https://rubyonrails.org/"> <Image  src="/svg/rails-svgrepo-com.svg" alt="Rails Icon"/> </a>
                                    </div>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                            <p className="font-bold">Desarrollo Web con Ruby on Rails</p>
                            <p className="font-light font-sans">Este programa de Desarrollo Web con Ruby on Rails te enseñará a construir aplicaciones web robustas usando Ruby y Rails. Aprenderás desde la creación de proyectos hasta el despliegue en producción, cubriendo rutas, controladores, modelos, autenticación y pruebas. Ideal para quienes buscan dominar el desarrollo web con un enfoque práctico y avanzado.</p> 
                            </CardBody>
                            <Divider/>
                            <CardFooter>
                                <Link className="bg-black text-white items-center"
                                    isExternal
                                    showAnchorIcon
                                    href="/pdf/04.rubyOnRails.pdf"
                                >
                                Revisa el programa aquí
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card className="max-w-[400px] bg-black text-white border-white border-2 rounded-2xl">
                            <CardHeader className="flex gap-3  bg-black text-white">
                                <Image
                                    className="border-white border-2"
                                    alt="Curso_5"
                                    radius="sm"
                                    src="/card5.jpg"
                                    />
                                <div className="flex flex-col">
                                    <a href="https://www.python.org/"> <FontAwesomeIcon icon={faPython} className="w-14 h-14 m-2" size="2xl" style={{color: "#FFD43B",}} /> </a> 
                                    <div className="w-14 h-14 m-2">
                                        <a href="https://www.djangoproject.com/"> <Image  src="/svg/django-icon-svgrepo-com.svg" alt="Django Icon"/> </a>
                                    </div>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                            <p className="font-bold">Análisis de Datos con Python y Django</p>
                            <p className="font-light font-sans">Este programa de Análisis de Datos con Python y Django te enseñará a manipular, analizar y visualizar datos con Python, y a integrar estos análisis en aplicaciones web usando Django. Aprenderás desde la limpieza de datos hasta la creación de aplicaciones interactivas, combinando el análisis de datos con el desarrollo web.</p> 
                            </CardBody>
                            <Divider/>
                            <CardFooter>
                                <Link className="bg-black text-white items-center font-bold"
                                    isExternal
                                    showAnchorIcon
                                    href="/pdf/05.pythonDjango.pdf"
                                >
                                Revisa el programa aquí
                                </Link>
                            </CardFooter>
                        </Card>
                    
                    </div>

                </div>
            </div>
        </div>
    </>
    )
}

export default cursos
