import clsx from 'clsx';
import '@/css/Form.module.css';
import { Dispatch } from 'react';
import styles from '@/css/Form.module.css';
import { useGlobal } from '@/hooks/useGlobal';
import { newDirectionForm } from '@/types/zod';
import { Controller, useForm } from "react-hook-form";

import ErrorMessage from '../../ui/ErrorMessage';

export default function ModalEditarDir({ setModal }: { setModal: Dispatch<React.SetStateAction<boolean>> }) {

    const { dispatch } = useGlobal()
    const { handleSubmit, control } = useForm<newDirectionForm>();

    const editDirection = (data: newDirectionForm) => {
        console.log(data)
        setModal(false)
    }

    return (

        <form
            data-formulario
            className={styles.bgModal}
            onSubmit={handleSubmit(editDirection)}
        >

            <fieldset className={styles.modal}>

                <legend className={styles.legend}>
                    Actualización de Dirección</legend>


                <div className={clsx(styles.gridColumns, 'gap-y-10 mb-10')}>

                    <div className='xl:flex'>

                        <label htmlFor="NUM_CPOS" className="w-full xl:w-8">C.P.</label>

                        <Controller
                            name='NUM_CPOS'
                            control={control}
                            rules={{
                                required: "El C.P. es obligatorio",
                                minLength: {
                                    value: 5,
                                    message: "Formato de C.P. no válido."
                                }
                            }}

                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <input
                                        id="NUM_CPOS"
                                        type="number"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_CPOS', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="NUM_LOCAL" className="w-full xl:w-20">Localidad:</label>

                        <Controller
                            name='NUM_LOCAL'
                            control={control}
                            rules={{
                                required: "Seleccione una localidad"
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <select
                                        id="NUM_LOCAL"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_LOCAL', value: e.target.value } })
                                        }}
                                    >
                                        <option value={1}>Ninguno</option>
                                        <option value={2}>cdmx</option>
                                    </select>
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="NUM_ENTFE" className="w-full xl:w-14">Estado:</label>

                        <Controller
                            name='NUM_ENTFE'
                            control={control}
                            rules={{
                                required: "Estado no válido"
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <select
                                        id="NUM_ENTFE"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_ENTFE', value: e.target.value } })
                                        }}
                                    >
                                        <option value={1}>Ninguno</option>
                                        <option value={2}>Benito Juarez</option>
                                        <option value={3}>Tlalpan</option>
                                    </select>
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className="xl:flex">
                        <label htmlFor="NUM_MUNI" className="w-full xl:w-20">Municipio:</label>
                        <Controller
                            name='NUM_MUNI'
                            control={control}
                            rules={{
                                required: "Municipio no válido"
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <select
                                        id="NUM_MUNI"


                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_MUNI', value: e.target.value } })
                                        }}
                                    >
                                        <option value={1}>Ninguno</option>
                                        <option value={2}>cdmx</option>
                                    </select>
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
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
