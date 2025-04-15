'use client'

import { auth } from "@/firebase/config"
import useToast from "@/hooks/useToast"
import userStore from "@/store/userStore"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import Image from "next/image"
import google from "./google.png"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Formulario2() {

    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [loading, setLoading] = useState(false)
    const { loginUser } = userStore()
    const { exito, errorToast } = useToast();
    const router = useRouter()

    const inicioSesion = async () => {
        if (!email || !contraseña) {
            errorToast("Ingresa tu email y la contraseña")
            return
        }
        setLoading(true)
        try {
            const respuesta = await signInWithEmailAndPassword(auth, email, contraseña)
            console.log(respuesta)
            loginUser(respuesta.user)
            exito("Iniciaste sesion eitosamente")
            router.push('/')
            setEmail("")
            setContraseña("")
        } catch (error) {
            console.log(error)
            errorToast("Error al iniciar sesion")
        } finally {
            setLoading(false)
        }
    }

    const provider = new GoogleAuthProvider();

    const iniciarConGoogle = async (e) => {
        e.preventDefault()
        try {
            const response = await signInWithPopup(auth, provider)
            //console.log(response)
            loginUser(response.user)
            exito("iniciaste sesion exitosamente")
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        inicioSesion()
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
                className="border border-gray-400 px-3 py-2 rounded-xl mb-5"
                placeholder="crea una contraseña"
                type="password"
                value={contraseña}
            />

            <button
                onClick={handleClick}
                className="bg-blue-800 hover:bg-blue-700 cursor-pointer transition-colors duration-300 py-2 rounded-xl font-bold text-white mx-[30%]"
                disabled={loading}>
                {loading ? "Iniciando sesion..." : "Iniciar sesion"}
            </button>

            <button
                onClick={iniciarConGoogle}
                className="border border-black rounded-xl my-5 flex items-center justify-center py-2 font-bold gap-2 mx-12">
                <Image src={google} width={35} alt="google" />
                <p>Sign in with Google</p>
            </button>
        </form>
    )
}