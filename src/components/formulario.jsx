'use client'

import { auth } from "@/firebase/config"
import useToast from "@/hooks/useToast"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import Image from "next/image"
import google from "./google.png"
import { useState } from "react"
import userStore from "@/store/userStore"
import Carta from "@/components/Carta";

export default function Formulario() {

    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [loading, setLoading] = useState(false)
    const { exito, errorToast } = useToast();

    const registrarUsuario = async () => {
        if (!email || !contraseña) {
            errorToast("Ingresa un email y contraseña")
            return
        }
        setLoading(true)
        try {
            const respuesta = await createUserWithEmailAndPassword(auth, email, contraseña)
            console.log(respuesta)
            exito("Usuario registrado con exito")
            setEmail("")
            setContraseña("")
        } catch (error) {
            console.log(error)
            errorToast("Error al registrar usuario")
        } finally {
            setLoading(false)
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        registrarUsuario()
    }

    return (
        <form className="flex flex-col mx-[36%]">
            <h1 className="mx-auto font-bold text-[25px]">
                Estanco y Estadero Central LG
            </h1>

            <p className="ml-2">Correo electrónico</p>
            <input
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 px-3 py-2 rounded-xl mb-5"
                placeholder="Correo electrónico"
                type="email"
                value={email}
            />

            <p className="ml-2">Contraseña</p>
            <input
                onChange={(e) => setContraseña(e.target.value)}
                className="border border-gray-400 px-3 py-2 rounded-xl"
                placeholder="crea una contraseña"
                type="password"
                value={contraseña}
            />
            <p className="mb-5 ml-2 text-gray-400">Debe tener al menos 6 caracteres</p>

            <button
                onClick={handleClick}
                className="bg-blue-800 hover:bg-blue-700 cursor-pointer transition-colors duration-300 py-2 rounded-xl font-bold text-white mx-[30%]"
                disabled={loading}>
                {loading ? "Registrando..." : "Registrarme"}
            </button>
        </form>
    )
}