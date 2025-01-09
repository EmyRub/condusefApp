import { Dispatch } from 'react';
import Error from "../Error";
import { useForm } from "react-hook-form";
import styles from './Form.module.css';
import { DrafteditDirection } from '../../types';

export default function ModalEditarDir({ setModal }: { setModal: Dispatch<React.SetStateAction<boolean>> }) {

    const { register, handleSubmit, formState: { errors } } = useForm<DrafteditDirection>({

        defaultValues: {
            cp: '123456',
            loc: 'se llenara conforme la base de datos',
            edo: '',
            muni: ''
        }
    });

    const editDirection = (data: DrafteditDirection) => {
        console.log(data)
    }

    return (

        <form
            onSubmit={handleSubmit(editDirection)}
            className={`${styles.bgModal} fixed top-0 left-0 w-full h-full`} data-formulario>

            <fieldset className={`${styles.modal} absolute left-1/2 top-1/2 w-11/12 lg:w-3/5 p-6 lg:p-12`}>

                <legend className='w-full lg:w-3/4 xl:px-4'>Actualización de Dirección</legend>

                <div className="flex justify-between items-center flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-full lg:basis-5/12">

                        <label htmlFor="cp" className="w-full lg:w-8 text-center lg:text-left">C.P.</label>
                        <input
                            type="text"
                            id="cp"
                            className="w-full lg:w-4/5"
                            {...register('cp', {
                                required: "El C.P. es obligatorio",
                                minLength: {
                                    value: 5,
                                    message: "Formato de C.P. no válido."
                                }
                            })}
                        />
                        {errors.cp && (<Error>*{errors.cp?.message as string}</Error>)}
                    </div>

                    <div className="basis-full lg:basis-1/2">
                        <label htmlFor="loc" className="w-full lg:w-20 text-center lg:text-left">Localidad:</label>
                        <input
                            type="text"
                            id="loc"
                            className="w-full lg:w-3/4"
                            {...register('loc', {
                                required: "La localidad es obligatoria",
                                minLength: {
                                    value: 2,
                                    message: 'Localidad no válida'
                                }
                            })}
                        />
                        {errors.loc && (<Error>*{errors.loc?.message as string}</Error>)}
                    </div>

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="edo" className="w-full lg:w-14 text-center lg:text-left">Estado:</label>
                        <input
                            type="text"
                            id="edo"
                            className="w-full lg:w-4/5"
                            {...register('edo', {
                                required: "El Estado es obligatorio",
                                minLength: {
                                    value: 3,
                                    message: 'Estado no válido'
                                }
                            })}
                        />
                        {errors.edo && (<Error>*{errors.edo?.message as string}</Error>)}
                    </div>

                    <div className="basis-full lg:basis-1/2">
                        <label htmlFor="muni" className="w-full lg:w-20 text-center lg:text-left">Municipio:</label>
                        <input
                            type="text"
                            id="muni"
                            className="w-full lg:w-3/4"
                            {...register('muni', {
                                required: "El Municipio es obligatorio",
                                minLength: {
                                    value: 2,
                                    message: 'Municipio no válido'
                                }
                            })}
                        />
                        {errors.muni && (<Error>*{errors.muni?.message as string}</Error>
                        )}
                    </div>

                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-12">
                    <input
                        type="submit"
                        value="Guardar"
                        className='bg-teal-400 text-white py-2 px-8 rounded-xl border-none uppercase font-semibold w-3/5 lg:w-2/5 cursor-pointer hover:bg-teal-600 hover:text-white' />

                    <input
                        type="button"
                        value="Cancelar"
                        onClick={() => setModal(false)}
                        className='bg-teal-400 text-white py-2 px-8 rounded-xl border-none uppercase font-semibold w-3/5 lg:w-2/5 cursor-pointer hover:bg-teal-600 hover:text-white' />
                </div>

            </fieldset>
        </form>
    )
}
