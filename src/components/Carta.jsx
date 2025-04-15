'use client'
import userStore from "@/store/userStore";
import cartStore from "@/store/cartStore";
import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";
import useToast from "@/hooks/useToast";

export default function Carta({ url, nombre, valor }) {
    const { usuario } = userStore();
    const { addToCart } = cartStore();
    const { exito } = useToast();

    const handleAddToCart = () => {
        addToCart({ url, nombre, valor });
        exito("Añadido al carrito exitosamente");
    };

    return (
        <div className="w-[200px]  bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center mx-2 my-4">
            <Image
                className="rounded-lg w-[120px] h-[120px] object-contain"
                width={120}
                height={120}
                alt="imagen"
                src={url}
            />

            <h1 className="text-black text-center font-semibold text-sm mt-2 truncate w-full">{nombre}</h1>

            <h2 className="text-center text-green-800 font-bold text-base mt-1">${new Intl.NumberFormat('es-CO').format(valor)}</h2>

            {usuario &&
                <button
                    onClick={handleAddToCart}
                    className="mt-3 bg-blue-950 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
                    <GiShoppingCart size={20} />
                    Añadir al carrito
                </button>
            }
        </div>
    );
}