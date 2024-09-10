'use client'
import { Button} from "@nextui-org/react";
import { Image, Navbar, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../app/assets/styles.css'

export default function NavBar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Inicio",
        "Nosotros",
        "Cursos",
        "Contacto",
    ];

    const menuPages = [
        "/",
        "/nosotros",
        "/cursos",
        "/contacto",
    ];

    return (

    <div className="mx-0 px-0">
        <Navbar isBordered 
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                height="100px"
                maxWidth="full"
                className="bg-slate-950 text-white fixed top-0 px-0 mx-0 w-full flex justify-end navbar"> 

            <NavbarMenu className="bg-black">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} className="bg-black">
                        <Link 
                                className={index == menuItems.length - 1 ? 
                                "w-40  color_1 font-bold border-white justify-center items-center border-2 rounded-xl" :
                                "w-40  color_2 font-bold border-white justify-center items-center border-2 rounded-xl"}
                                style={{ padding: '0px', margin: '0px' }}
                                href={`${menuPages[index]}`} >
                                {item}
                        {index == menuItems.length - 1 ? <FontAwesomeIcon className="w-6 h-6 pl-2" icon={faEnvelope}/> : " "}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

            <Link href="/">
                <Image src="/logo.jpg" height={80} alt="Logo"/>
            </Link>

            <span className="font-thin text-2xl md:text-2xl lg:text-4xl xl:text-6xl mx-auto"> A l g o r i s m u s </span>
            
            <NavbarContent className="mx-0 px-0 md:hidden" justify="end"> 
                <NavbarMenuToggle  aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="text-white border-white rounded-full"/>
            </NavbarContent>

            <NavbarContent className="mx-0 px-0 hidden md:px-0 md:mx-0 md:flex font-extrabold" justify="end">

                <NavbarItem>
                    <Link href="/">
                        <Button className="w-16 color_1 border-white border-2">Inicio</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/nosotros">
                        <Button className="w-16 color_1 border-white border-2">Nosotros</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/cursos">
                        <Button className="w-16 color_1  border-white border-2">Cursos</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contacto">
                        <Button className="flex w-32 color_2 run font-bold">Contacto<FontAwesomeIcon className="w-8 h-8" icon={faEnvelope}/></Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>

        </Navbar>

    </div>
    )
}