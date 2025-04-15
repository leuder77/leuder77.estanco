'use client'
import Image from "next/image";

export default function Carta({ url, nombre }) {
    return (
        <div className="w-[400px] flex flex-col items-center my-2">
            <div className="relative w-[420px] h-[300px] overflow-hidden rounded-xl">
                <Image
                    className="object-cover w-full h-full"
                    width={420}
                    height={300}
                    alt="imagen"
                    src={url}
                />

                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                             text-white font-bold text-[20px] backdrop-blur-sm p-1 rounded-xl">
                    {nombre}
                </h1>
            </div>
        </div>
    );
}
