import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserIcon, KeyIcon, BuildingOffice2Icon, BuildingLibraryIcon } from "@heroicons/react/16/solid";
import Error from "../components/Error";

export default function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const validateLogin = () => {

    }

    return (

        <form
            onSubmit={handleSubmit(validateLogin)}
            className="formLog">

            <img src="/condusefApp/logoGrudis.gif" alt="Logo Grudis" className="logo" />

            <div className="divStyleLog">
                <BuildingOffice2Icon className="icon" />
                <select
                    id="empresa"
                    className="selectLog"
                    {...register('empresa', {
                        required: 'Seleccione una empresa'
                    })}
                >
                    <option value="" disabled>Empresa:</option>
                    <option value="">Hola</option>
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

            <div className="divStyleLog">
                <KeyIcon className="icon" />
                <input className="inputLog"
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

            <input
                type="submit"
                value="Iniciar Sesión"
                className="mt-9"
            />

            <NavLink to='./newAcount' className='mt-2 submit'>Crear Cuenta</NavLink>

            <div className="boxImg">

                <img src="/condusefApp/logo-micro.png" alt="Logo Microfinix" className="w-52" />

                <img src="/condusefApp/logo-condusef.png" alt="Logo Condusef" className="max-w-36" />

                <p className="text-right text-white">¿Olvidaste tu contraseña?
                    <NavLink to='/' className='underline text-sm block font-light hover:text-teal-100'>Has clic aquí</NavLink>
                </p>
            </div>

        </form>

    )
}
