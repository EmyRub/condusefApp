import { NavLink } from "react-router-dom";
import ParticlesBackground from "../components/particles/ParticlesBackground";
import { UserIcon, KeyIcon } from "@heroicons/react/16/solid";

export default function LoginPage() {
    return (
        <>
            <main className="bg-[url('/bg1.jpg')] h-screen w-full flex justify-center items-center p-4 relative overflow-hidden">

                <div className="bg-teal-800 opacity-65 absolute w-full h-full">
                    <ParticlesBackground />
                    <ParticlesBackground />
                    <ParticlesBackground />
                    <ParticlesBackground />
                    <ParticlesBackground />
                    <ParticlesBackground />
                    <ParticlesBackground />
                    <ParticlesBackground />
                    <ParticlesBackground />
                    <ParticlesBackground />
                </div>

                <form className="w-11/12 md:w-2/4 md:max-w-2xl mx-auto my-20 p-8 bg-gradient-to-t from-cyan-500 to-slate-800 rounded-xl shadow-lg opacity-90">
                   
                    <img src="../logoGrudis.gif" alt="Logo Grudis" className="w-6/12 md:w-1/4 mx-auto" />

                    <div className="bg-teal-600	p-2 mb-3 flex gap-3 rounded-3xl overflow-hidden ">
                        <UserIcon className="w-8 text-white opacity-50" />
                        <input className="block w-full bg-transparent placeholder:text-white placeholder:opacity-50" type="email" name="email" id="email" placeholder="Email:" />
                    </div>

                    <div className="bg-teal-600 p-2 mb-3 flex gap-3 rounded-3xl overflow-hidden ">
                        <KeyIcon className="w-8 text-white opacity-50" />
                        <input className="block w-full bg-transparent placeholder:text-white placeholder:opacity-50" type="password" name="password" id="password" placeholder="Contraseña:" />
                    </div>

                    <input className="bg-teal-900 rounded-3xl block w-full mt-9 p-3 cursor-pointer text-white hover:bg-teal-600" type="submit" value="Iniciar Sesión" />

                    <button className="bg-teal-900 rounded-3xl block w-full mt-3 p-3 cursor-pointer text-white hover:bg-teal-600">Crear Cuenta</button>


                    <div className="mt-8 flex flex-col center md:flex-row md:justify-between items-center">

                        <img src="../logo-micro.png" alt="Logo Microfinix" className="w-52" />

                        <img src="../logo-condusef.png" alt="Logo Condusef" className="max-w-36" />

                        <p className="text-right text-white">¿Olvidaste tu contraseña?
                            <NavLink to='/' className='underline text-sm block font-light'> Has clic aquí</NavLink>
                        </p>
                    </div>

                </form>

            </main>
        </>
    )
}
