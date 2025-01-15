import { useForm } from "react-hook-form";
import Error from "../components/Error";
import { UserIcon, KeyIcon, EnvelopeIcon, BuildingOffice2Icon, LockClosedIcon, BuildingLibraryIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";


export default function NewAcountPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const newUser = () => {

  }

  return (

    <form
      onSubmit={handleSubmit(newUser)}
      className="w-11/12 md:w-2/4 md:max-w-2xl mx-auto my-20 p-8 bg-gradient-to-t from-cyan-500 to-slate-800 rounded-xl shadow-lg opacity-90">

      <img src="/condusefApp/logoGrudis.gif" alt="Logo Grudis" className="w-6/12 md:w-1/4 mx-auto" />

      <hr className="my-4 border-teal-600 border-2" />

      <h1 className="text-center text-teal-100 mb-4 text-lg uppercase">Nueva Cuenta</h1>

      <div className="bg-teal-600	p-2 mb-2 flex gap-3 rounded-3xl overflow-hidden">
        <BuildingOffice2Icon className="w-8 text-white opacity-50" />
        <select
          id="empresa"
          className="block w-full bg-transparent border-none text-white opacity-50"
          {...register('empresa', {
            required: 'Seleccione una empresa'
          })}
        >
          <option value="">Empresa:</option>
        </select>

      </div>
      {errors.empresa && (
        <Error login={true}>{errors.empresa?.message as string}</Error>
      )}

      <div className="bg-teal-600	p-2 mb-2 flex gap-3 rounded-3xl overflow-hidden">
        <BuildingLibraryIcon className="w-8 text-white opacity-50" />
        <select
          id="inst"
          className="block w-full bg-transparent border-none text-white opacity-50"
          {...register('inst', {
            required: 'Seleccione una Instituto'
          })}
        >
          <option value="" disabled selected>Institución:</option>
          <option value="">Redeco</option>
          <option value="">Reune</option>
        </select>

      </div>
      {errors.inst && (
        <Error login={true}>{errors.inst?.message as string}</Error>
      )}

      <div className="bg-teal-600	p-2 mb-2 flex gap-3 rounded-3xl overflow-hidden">
        <UserIcon className="w-8 text-white opacity-50" />
        <input className="block w-full bg-transparent border-none placeholder:text-white placeholder:opacity-50 outline-none"
          type="text"
          id="name"
          placeholder="Nombre"
          {...register('name', {
            required: 'El nombre es obligatorio',
            minLength: {
              value: 2,
              message: "Nombre no válido"
            }
          })}
        />
      </div>

      {errors.name && (
        <Error login={true}>{errors.name?.message as string}</Error>
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
        <Error login={true}>{errors.email?.message as string}</Error>
      )}

      <div className="bg-teal-600 p-2 mb-3 flex gap-3 rounded-3xl overflow-hidden">
        <KeyIcon className="w-8 text-white opacity-50" />
        <input className="block w-full bg-transparent placeholder:text-white placeholder:opacity-50 outline-none"
          type="password"
          id="password"
          placeholder="Contraseña"
          {...register('password', {
            required: 'Contraseña Obligatoria',
            minLength: {
              value: 6,
              message: "La contraseña debe tener un mínimo de 6 carácteres"
            }

          })}
        />
      </div>
      {errors.password && (
        <Error login={true}>{errors.password?.message as string}</Error>
      )}

      <div className="bg-teal-600 p-2 mb-3 flex gap-3 rounded-3xl overflow-hidden">
        <LockClosedIcon className="w-8 text-white opacity-50" />
        <input className="block w-full bg-transparent placeholder:text-white placeholder:opacity-50 outline-none"
          type="validatePassword"
          id="validatePassword"
          placeholder="Confirmar Contraseña"
          {...register('validatePassword', {
            required: 'Favor de confirmar la contraseña',
            minLength: {
              value: 6,
              message: "Contraseña menor a 6 carácteres"
            }

          })}
        />
      </div>
      {errors.validatePassword && (
        <Error login={true}>{errors.validatePassword?.message as string}</Error>
      )}

      <input
        type="submit"
        value="Guardar"
        className="bg-teal-900 rounded-3xl uppercase block w-full mt-9 p-3 cursor-pointer text-white hover:bg-teal-950"
      />

      <Link to={'/'}
        className="bg-teal-900 rounded-3xl uppercase block w-full mt-2 p-3 cursor-pointer text-center text-white hover:bg-teal-950">
        Regresar
      </Link>

      <div className="mt-8 flex flex-col center md:flex-row md:justify-between items-center">

        <img src="/condusefApp/logo-micro.png" alt="Logo Microfinix" className="w-52" />

        <img src="/condusefApp/logo-condusef.png" alt="Logo Condusef" className="max-w-36" />

      </div>

    </form>
  )
}
