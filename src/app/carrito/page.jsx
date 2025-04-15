'use client'

import cartStore from "@/store/cartStore";
import Image from "next/image";
import { IoMdTrash } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Carrito() {
    const { carrito, removeFromCart, clearCart } = cartStore();
    const [total, setTotal] = useState(0);
    const router = useRouter();

    const calcularTotal = () => {
        const suma = carrito.reduce((acc, producto) => acc + parseFloat(producto.valor), 0);
        setTotal(suma);
    };

    const enviarWhatsApp = () => {
        if (carrito.length === 0) return;

        let mensaje = "¡Hola! Quiero comprar los siguientes productos.";

        carrito.forEach((producto) => {
            mensaje += ` %0A${producto.nombre} - $${new Intl.NumberFormat('es-CO').format(producto.valor)}.`;
        });

        const totalCalculado = carrito.reduce((acc, producto) => acc + parseFloat(producto.valor), 0);
        mensaje += ` %0A%0ATotal: $${new Intl.NumberFormat('es-CO').format(totalCalculado)}`;

        const url = `https://wa.me/573215527051?text=${mensaje}`;
        window.open(url, '_blank');

        clearCart();

        router.push('/');
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Tu Carrito</h1>
            {carrito.length === 0 ? (
                <p className="text-gray-500">Tu carrito está vacío.</p>
            ) : (
                <>
                    <div className="flex flex-col items-center justify-center">
                    <div className="grid lg:grid-cols-3 gap-4">
                        {carrito.map((producto, index) => (
                            <div key={index} className="border p-4 rounded-xl shadow-md flex gap-4 items-center">
                                <Image
                                    src={producto.url}
                                    alt={producto.nombre}
                                    width={100}
                                    height={100}
                                    className="rounded object-contain w-[100px] h-[100px]"
                                />
                                <div>
                                    <h2 className="font-semibold">{producto.nombre}</h2>
                                    <p className="text-green-700 font-bold">${new Intl.NumberFormat('es-CO').format(producto.valor)}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(index)}
                                    className="text-green-800 hover:text-green-700 transition"
                                    title="Eliminar"
                                >
                                    <IoMdTrash size={24} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <button
                            onClick={calcularTotal}
                            className="bg-blue-800 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
                            Calcular Total
                        </button>
                        {total > 0 && (
                            <p className="mt-2 text-xl font-bold text-green-700">
                                Total: ${new Intl.NumberFormat('es-CO').format(total)}
                            </p>
                        )}
                    </div>
                    <br />
                    <div>
                        <button
                            onClick={enviarWhatsApp}
                            className="flex items-center justify-center gap-2 bg-green-700 text-white 
                            px-6 py-2 rounded-xl hover:bg-green-600 transition">
                            Enviar al WhatsApp
                            <FaWhatsapp size={20} />
                        </button>
                    </div>
                    </div>
                </>
            )}
            </div>
    )
}
