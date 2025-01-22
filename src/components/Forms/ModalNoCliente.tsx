import { Dispatch } from 'react';
import Error from "../Error";
import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import { DraftnoClient } from '../../types';

export default function ModalNoCliente({ setModal }: { setModal: Dispatch<React.SetStateAction<boolean>> }) {

    //Se le debe agregar el <DrafnoClient> para que no dé error el onSubmit (generar, y registrar)
    const { register, handleSubmit, formState: { errors } } = useForm<DraftnoClient>()

    const registerNoClient = (data: DraftnoClient) => { }

    return (

        <form
            onSubmit={handleSubmit(registerNoClient)}
            className={`${styles.bgModal} fixed top-0 left-0 w-full h-full overflow-y-scroll py-12`} data-formulario>

            <fieldset className={`${styles.modal} absolute left-1/2 top-1/2 w-11/12 lg:w-3/5 p-6 lg:p-12 `}>

                <legend className='w-full lg:w-3/4 xl:px-4'>Registro No Cliente</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-full">
                        <label htmlFor="name" className="w-full lg:w-44 text-center lg:text-left">Nombre de la Persona:</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full lg:w-3/4"
                            {...register('name', {
                                required: 'El nombre es obligatorio.',
                                minLength: {
                                    value: 2,
                                    message: 'Nombre no válido.'
                                }
                            })}
                        />
                        {errors.name && (<Error>{errors.name?.message as string}</Error>)}
                    </div>

                    <div className="basis-full lg:basis-80">
                        <label htmlFor="email" className="w-full lg:w-16 text-center lg:text-left">Correo:</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full lg:w-64"
                            {...register('email', {
                                required: 'Correo Obligatorio.',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Formato no válido'
                                }
                            })}
                        />
                        {errors.email && (<Error>{errors.email?.message as string}</Error>)}
                    </div>

                    <div className="basis-full lg:basis-64">
                        <label htmlFor="tel" className="w-full lg:w-20 text-center lg:text-left">Teléfono:</label>
                        <input
                            id="phone"
                            type="tel"
                            className="w-full lg:w-36"
                            {...register('phone', {
                                required: 'Teléfono Obligatorio',
                                minLength: {
                                    value: 5,
                                    message: 'Teléfono no válido.'
                                }
                            })}
                        />
                        {errors.phone && (<Error>{errors.phone?.message as string}</Error>)}
                    </div>

                    <div className="basis-full lg:basis-32">
                        <label htmlFor="age" className="w-full lg:w-12 text-center lg:text-left mb-2">Edad:</label>
                        <input
                            type="number"
                            id="age"
                            className="w-full lg:w-20"
                            {...register('age', {
                                required: 'Edad requerida.',
                                minLength: {
                                    value: 18,
                                    message: 'Edad no válida.'
                                }
                            }
                            )}
                        />
                        {errors.age && (<Error>{errors.age?.message as string}</Error>)}
                    </div>

                    <div className="basis-full lg:basis-72">
                        <label htmlFor="typePer" className="w-full lg:w-32 text-center lg:text-left">Tipo de Cliente:</label>

                        <select
                            id="typePer"
                            className="w-full lg:w-32 text-center"
                            {...register('typePer', {
                                required: 'Campo requerido.'
                            }
                            )}
                        >
                            <option value="1">0</option>
                        </select>

                        {errors.typePer && (<Error>{errors.typePer?.message as string}</Error>)}
                    </div>

                    <div className="basis-full lg:basis-1/5 flex gap-3 items-center justify-center lg:justify-start">
                        <label htmlFor="genre" className="lg:w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <input
                                id="m"
                                type="radio"
                                {...register('genre')}
                            />
                            <label htmlFor="m">M</label>
                        </div>
                        <div className="flex gap-1">
                            <input
                                id="h"
                                type="radio"
                                {...register('genre')}
                            />
                            <label htmlFor="h">H</label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-12">
                    <input
                        type="submit"
                        value="Guardar"
                        className='bg-teal-400 text-white py-2 px-8 rounded-xl border-none uppercase font-semibold inline-block w-3/5 lg:w-2/5 cursor-pointer hover:bg-teal-600 hover:text-white' />

                    <input
                        type="button"
                        value="Cancelar"
                        onClick={() => setModal(false)}
                        className='bg-teal-400 text-white py-2 px-8 rounded-xl border-none uppercase font-semibold inline-block w-3/5 lg:w-2/5 cursor-pointer hover:bg-teal-600 hover:text-white' />
                </div>

            </fieldset>
        </form>

    )
}
