'use client'
import {CircularProgress} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useState } from 'react'
import '../assets/styles.css'

export default function Contacto () {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [espera, setEspera] = useState (false)
    const [exito, setExito]   = useState (false)
    const [error, setError]   = useState (false)

    const [name, setName]       = useState('');
    const [email, setEmail]     = useState('');
    const [message, setMessage] = useState('');
 
    async function handleSubmit(event) {
        event.preventDefault();

        setEspera (true)
        setExito (false)
        setError (false)
        onOpen()

        const formData = new FormData(event.target)

        try {
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                console.log("Error... ")
                throw new Error(`Respuesta: ${response.status}`);
            }

            const responseData = await response.json();
            setEspera (false)
            setExito  (true)

            setName    ('');
            setEmail   ('');
            setMessage ('');
            
        } catch (err) {
            console.error(err);
            setEspera (false)
            setError  (true)
        }
    }

    return (
        <div className="flex flex-col items-center m-0 pt-[96px]">
            <form onSubmit={handleSubmit} className=" w-full md:w-2/5 py-5">
                <div className="flex flex-col justify-center text-center mx-2 md:mx-0">
                    <div className="font-bold text-3xl text-center my-10">
                        C o n t a c t o
                    </div>
                    <br/>
                    <h3 className="font-light font-sans">¿ALGUNA PREGUNTA O COMENTARIO?</h3>
                    <p className="font-light font-sans">
                        No dudes en contactarnos, <br/>
                        te responderé a la brevedad.</p>
                    <br/><br/>
                    <hr/>
                    <br/>
                    <label className="text-start" htmlFor="form-name">Su nombre </label>
                    <input  id="form-name" 
                            required 
                            autoComplete="name" 
                            name="name" 
                            className="py-2 font-thin text-black rounded-lg w-auto border border-white px-[5px]"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    <br/>
                    <label className="text-start" htmlFor="form-email">Su Email</label>
                    <input  id="form-email" 
                            required 
                            autoComplete="email" 
                            name="email" type="email" 
                            className="py-2 font-thin text-black rounded-lg border border-white px-[5px]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    <br/>
                    <label className="text-start" htmlFor="form-message">Mensaje </label>
                    <textarea   id="form-message" 
                                required name="message" 
                                rows={5} className="py-2 font-thin  text-black rounded-lg border border-white px-[10px]"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}/>
                    <br/>
                </div>
                <button type="submit" 
                        className="py-2 px-[10px] mx-2 md:mx-0 color_1 font-bold rounded-lg tracking-wider text-star border border-white">
                    Enviar mensaje
                </button>
                <br/>
                <br/>
            </form>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="text-start items-center bg-accent text-black">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center ">
                                Enviando mensaje a Carlos Santana
                            </ModalHeader>
                            <ModalBody>
                            { espera     &&  <CircularProgress /> }
                            </ModalBody>
                            { exito     &&  
                            <ModalFooter className="bg-black text-white mb-4 rounded-md text-center items-center leading-6">
                                <p className="pt-1">Mensaje enviado exitosamente</p>
                                <Button className="leading-7"onPress={onClose}>
                                    Cerrar
                                </Button>

                            </ModalFooter> }
                            { error    &&  
                            <ModalFooter className="bg-black text-white mb-4 rounded-md text-center items-center leading-6">
                                <p>No se pudo enviar el mensaje <br/>
                                inténtalo nuevamente</p>
                                <Button onPress={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter> }
                        </>
                    )}
                </ModalContent>
            </Modal>

        </div>
    )
}
