import { useForm } from "react-hook-form";
import { UserIcon, KeyIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import Error from "../components/Error";

export default function NewAcountPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const newUser = () => {

  }

  return (

    <form
      onSubmit={handleSubmit(newUser)}
      className="w-11/12 md:w-2/4 md:max-w-2xl mx-auto my-20 p-8 bg-gradient-to-t from-cyan-500 to-slate-800 rounded-xl shadow-lg opacity-90">

      <img src="../logoGrudis.gif" alt="Logo Grudis" className="w-6/12 md:w-1/4 mx-auto" />

      <hr className="my-4" />

      <h1 className="text-center text-white mb-4 text-lg uppercase">Nueva Cuenta</h1>
      <div className="bg-teal-600	p-2 mb-2 flex gap-3 rounded-3xl overflow-hidden">
        <UserIcon className="w-8 text-white opacity-50" />
        <input className="block w-full bg-transparent border-none placeholder:text-white placeholder:opacity-50 outline-none"
          type="text"
          id="name"
          placeholder="Nombre"
          {...register('name', {
            required: 'El nombre es obligatorio'
          })}
        />
      </div>
      {errors.name && (
        <Error>{errors.name?.message as string}</Error>
      )}

      <div className="bg-teal-600	p-2 mb-2 flex gap-3 rounded-3xl overflow-hidden">
        <EnvelopeIcon className="w-8 text-white opacity-50" />

        <input className="block w-full bg-transparent border-none placeholder:text-white placeholder:opacity-50 outline-none"
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: "El Email es Obligatorio",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email No Válido'
            }
          })}
        />
      </div>
      {errors.email && (
        <Error>{errors.email?.message as string}</Error>
      )}

      <div className="bg-teal-600 p-2 mb-3 flex gap-3 rounded-3xl overflow-hidden">
        <KeyIcon className="w-8 text-white opacity-50" />
        <input className="block w-full bg-transparent placeholder:text-white placeholder:opacity-50 outline-none"
          type="password"
          id="password"
          placeholder="Contraseña"
          {...register('password', {
            required: 'Contraseña Obligatoria',

          })}
        />
      </div>
      {errors.password && (
        <Error>{errors.password?.message as string}</Error>
      )}

      <div className="bg-teal-600 p-2 mb-3 flex gap-3 rounded-3xl overflow-hidden">
        <KeyIcon className="w-8 text-white opacity-50" />
        <input className="block w-full bg-transparent placeholder:text-white placeholder:opacity-50 outline-none"
          type="validatePassword"
          id="validatePassword"
          placeholder="Confirmar Contraseña"
          {...register('validatePassword', {
            required: 'Favor de confirmar la contraseña',

          })}
        />
      </div>
      {errors.validatePassword && (
        <Error>{errors.validatePassword?.message as string}</Error>
      )}

      <input className="bg-teal-900 rounded-3xl block w-full mt-9 p-3 cursor-pointer text-white hover:bg-teal-950" type="submit" value="Guardar" />

      <div className="mt-8 flex flex-col center md:flex-row md:justify-between items-center">

        <img src="../logo-micro.png" alt="Logo Microfinix" className="w-52" />

        <img src="../logo-condusef.png" alt="Logo Condusef" className="max-w-36" />

      </div>

    </form>
  )
}
