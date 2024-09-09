import { Link } from "@nextui-org/react";

const NotFound = () => {
    return (
        <>
            <h2>404</h2>
            <p>No se encontró la página solicitada</p>
            <Link href='/'>Vover a la página principal</Link>
        </>
    )
}

export default NotFound