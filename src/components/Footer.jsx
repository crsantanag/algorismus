'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faSquareFacebook, faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer () {
    return (
<footer className="flex flex-col md:flex-row justify-center md:justify-between py-5 bg-black text-accent">
    <div className="flex flex-col md:flex-row items-end w-full px-2 md:px-10 h-full">
        <div className="flex w-full md:w-1/3 justify-center md:justify-start items-center md:items-end h-10">
            A l g o r i s m u s
        </div>
        <div className="flex w-full md:w-1/3 justify-center items-center text-base md:items-end h-10">
            © 2024 - Powered by Next.js - NextUI - Tailwind
        </div>
        <div className="flex w-full md:w-1/3 text-accent justify-center md:justify-end items-end h-12 ">
            <FontAwesomeIcon className="w-10 h-10 mr-1" icon={faSquareGithub} />
            <FontAwesomeIcon className="w-10 h-10 mx-1" icon={faSquareFacebook} />
            <FontAwesomeIcon className="w-10 h-10 mx-1" icon={faSquareInstagram} />
            <FontAwesomeIcon className="w-10 h-10 ml-1" icon={faLinkedin} />
        </div>
    </div>
    <br />
</footer>

    )
}