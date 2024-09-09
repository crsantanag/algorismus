import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Maneja requerimiento POST a /api

export async function POST(request) {
    const username = process.env.EMAIL_USERNAME;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    // 1. Crearemos el transportador
    const transporter = nodemailer.createTransport ({
        host: 'smtp.gmail.com',
        port: 587,
        /* secure: false, */                    // Usado por Alan
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: process.env.EMAIL_USERNAME,   // Este es el correo desde el que envío la información
            pass: process.env.EMAIL_PASSWORD    // Esta no es la contraseña del gmail !!
        }
    })

    try {
        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Actividad en el sitio Web del email: ${email}`,
            html: `
            <p>Nombre: ${name} </p>
            <p>Email: ${email} </p>
            <p>Mensaje: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Exito: Se envió email" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "Error: No se pudo enviar email" })
    }

  }