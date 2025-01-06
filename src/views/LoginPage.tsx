import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserIcon, KeyIcon } from "@heroicons/react/16/solid";
import Error from "../components/Error";

export default function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const validateLogin = () => {

    }

    return (

        <form
            onSubmit={handleSubmit(validateLogin)}
            className="w-11/12 md:max-w-2xl mx-auto my-20 p-8 bg-gradient-to-t from-cyan-500 to-slate-800 rounded-xl shadow-lg opacity-90">

            <img src="/condusefApp/logoGrudis.gif" alt="Logo Grudis" className="w-6/12 md:w-1/4 mx-auto" />

            <div className="bg-teal-600	p-2 mb-2 flex gap-3 rounded-3xl overflow-hidden">
                <UserIcon className="w-8 text-white opacity-50" />
                <input className="block w-full bg-transparent border-none placeholder:text-white placeholder:opacity-50 outline-none"
                    type="email"
                    id="email"
                    placeholder="Email:"
                    {...register('email', {
                        required: 'El email es obligatorio',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email No Válido'
                        }
                    })}
                />
            </div>
            {errors.email && (
                <Error login={true}>{errors.email?.message as string}</Error>
            )}

            <div className="bg-teal-600 p-2 mb-3 flex gap-3 rounded-3xl overflow-hidden">
                <KeyIcon className="w-8 text-white opacity-50" />
                <input className="block w-full bg-transparent placeholder:text-white placeholder:opacity-50 outline-none"
                    type="password"
                    id="password"
                    placeholder="Contraseña:"
                    {...register('password', {
                        required: 'El password es obligatorio',
                        minLength: {
                            value: 6,
                            message: "Mínimo 6 carácteres"
                        }
                    })}
                />
            </div>
            {errors.password && (
                <Error login={true}>{errors.password?.message as string}</Error>
            )}

            <input className="bg-teal-900 rounded-3xl block w-full mt-9 p-3 cursor-pointer text-white hover:bg-teal-950" type="submit" value="Iniciar Sesión" />

            <NavLink to='./newAcount' className='bg-teal-900 rounded-3xl block w-full mt-3 p-3 cursor-pointer text-white text-center hover:bg-teal-950'>Crear Cuenta</NavLink>

            <div className="mt-8 flex flex-col center md:flex-row md:justify-between items-center">

                <img src="/condusefApp/logo-micro.png" alt="Logo Microfinix" className="w-52" />

                <img src="/condusefApp/logo-condusef.png" alt="Logo Condusef" className="max-w-36" />

                <p className="text-right text-white">¿Olvidaste tu contraseña?
                    <NavLink to='/' className='underline text-sm block font-light hover:text-teal-100'>Has clic aquí</NavLink>
                </p>
            </div>

        </form>

    )
}
