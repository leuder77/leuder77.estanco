'use client'

import cartStore from "@/store/cartStore";
import { GiShoppingCart } from "react-icons/gi";
import userStore from "@/store/userStore";
import Link from "next/link";

export default function NavBar() {
    const { usuario } = userStore()
    const { carrito } = cartStore();

    return (
        <div className="flex p-5 justify-between sticky top-0 bg-blue-800 z-50 items-center font-bold text-white">
            <div className="flex gap-5">
                <Link href={'/'}>
                    <div>
                        <h1>Estanco y Estadero Central LG</h1>
                    </div>
                </Link>

                <Link href={'/categorias'}>
                    <div>
                        <h1>Categorias</h1>
                    </div>
                </Link>
            </div>

            <ul className="flex gap-5 items-center">
                {usuario ?
                    <Link href={'/carrito'}>
                        <div className="relative">
                            <GiShoppingCart size={30} />
                            {carrito.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                                    {carrito.length}
                                </span>
                            )}
                        </div>
                    </Link>
                    :
                    (<>
                        <li className="bg-green-800 p-2 rounded-2xl text-white">
                            <Link href={'/inicioSesion'}>Iniciar Sesion</Link>
                        </li>
                        <li><Link href={'/registro'}>Registrarse</Link></li>
                    </>)
                }
            </ul>
        </div>
    )
}