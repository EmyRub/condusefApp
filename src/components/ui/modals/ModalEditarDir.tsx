import clsx from 'clsx';
import '@/css/Form.module.css';
import { Dispatch } from 'react';
import styles from '@/css/Form.module.css';
import { useGlobal } from '@/hooks/useGlobal';
import { DrafteditDirection } from '@/types/index';
import { Controller, useForm } from "react-hook-form";

import ErrorMessage from '../ErrorMessage';

export default function ModalEditarDir({ setModal }: { setModal: Dispatch<React.SetStateAction<boolean>> }) {

    const { dispatch } = useGlobal()
    const { handleSubmit, formState: { errors }, control } = useForm<DrafteditDirection>({

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
            className={styles.bgModal} data-formulario>

            <fieldset className={styles.modal}>

                <legend className={styles.legend}>
                    Actualización de Dirección</legend>


                <div className={clsx(styles.gridColumns, 'gap-y-10 mb-10')}>

                    <div className='xl:flex'>

                        <label htmlFor="cp" className="w-full xl:w-8">C.P.</label>

                        <Controller
                            name='cp'
                            control={control}
                            rules={{
                                required: "El C.P. es obligatorio",
                                minLength: {
                                    value: 5,
                                    message: "Formato de C.P. no válido."
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-4/5">
                                    <input
                                        id="cp"
                                        type="text"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'cp', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                        {errors.cp && (<ErrorMessage>{errors.cp?.message as string}</ErrorMessage>)}
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="loc" className="w-full xl:w-20">Localidad:</label>

                        <Controller
                            name='loc'
                            control={control}
                            rules={{
                                required: "La localidad es obligatoria",
                                minLength: {
                                    value: 2,
                                    message: 'Localidad no válida'
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-3/4">
                                    <input
                                        id="loc"
                                        type="text"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'loc', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                        {errors.loc && (<ErrorMessage>{errors.loc?.message as string}</ErrorMessage>)}
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="edo" className="w-full xl:w-14">Estado:</label>

                        <Controller
                            name='edo'
                            control={control}
                            rules={{
                                required: "El Estado es obligatorio",
                                minLength: {
                                    value: 3,
                                    message: 'Estado no válido'
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-4/5">
                                    <input
                                        id="edo"
                                        type="text"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'edo', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />

                        {errors.edo && (<ErrorMessage>{errors.edo?.message as string}</ErrorMessage>)}
                    </div>

                    <div className="xl:flex">
                        <label htmlFor="muni" className="w-full xl:w-20">Municipio:</label>

                        <Controller
                            name='muni'
                            control={control}
                            rules={{
                                required: "El Municipio es obligatorio",
                                minLength: {
                                    value: 2,
                                    message: 'Municipio no válido'
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-3/4">
                                    <input
                                        id="muni"
                                        type="text"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'muni', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                        {errors.muni && (<ErrorMessage>{errors.muni?.message as string}</ErrorMessage>
                        )}
                    </div>

                </div>

                <div className={clsx(styles.gridColumns, 'gap-y-6')}>
                    <input
                        type="submit"
                        value="Guardar"
                        className={styles.btnForm} />

                    <input
                        type="button"
                        value="Cancelar"
                        onClick={() => setModal(false)}
                        className={styles.btnForm} />
                </div>

            </fieldset>
        </form>
    )
}
