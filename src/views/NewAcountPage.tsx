import { useForm } from "react-hook-form";
import Error from "../components/ui/Error";
import { UserIcon, KeyIcon, EnvelopeIcon, BuildingOffice2Icon, LockClosedIcon, BuildingLibraryIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";


export default function NewAcountPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const newUser = () => {

  }

  return (

    <form
      onSubmit={handleSubmit(newUser)}
      className="formLog">

      <img src="/condusefApp/logoGrudis.gif" alt="Logo Grudis" className="logo" />

      <hr className="my-4 border-teal-600 border-2" />

      <h1 className="text-center text-teal-100 mb-4 text-lg uppercase">Nueva Cuenta</h1>

      <div className="divStyleLog">
        <BuildingOffice2Icon className="icon" />
        <select
          id="empresa"
          className="selectLog"
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

      <div className="divStyleLog">
        <BuildingLibraryIcon className="icon" />
        <select
          id="inst"
          className="selectLog"
          {...register('inst', {
            required: 'Seleccione una Instituto'
          })}
        >
          <option value="" disabled>Institución:</option>
          <option value="">Redeco</option>
          <option value="">Reune</option>
        </select>

      </div>
      {errors.inst && (
        <Error login={true}>{errors.inst?.message as string}</Error>
      )}

      <div className="divStyleLog">
        <UserIcon className="icon" />
        <input className="inputLog"
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

      <div className="divStyleLog">
        <EnvelopeIcon className="icon" />

        <input className="inputLog"
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

      <div className="divStyleLog">
        <KeyIcon className="icon" />
        <input className="inputLog"
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

      <div className="divStyleLog">
        <LockClosedIcon className="icon" />
        <input className="inputLog"
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
        className="mt-9"
      />

      <Link to={'/'}
        className="submit mt-2">
        Regresar
      </Link>

      <div className="boxImg">

        <img src="/condusefApp/logo-micro.png" alt="Logo Microfinix" className="w-52" />

        <img src="/condusefApp/logo-condusef.png" alt="Logo Condusef" className="max-w-36" />

      </div>

    </form>
  )
}
