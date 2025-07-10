import '@/css/Form.module.css';
import { reuneForm } from '@/types/zod';
import { useGlobal } from "@/hooks/useGlobal"
import { Control, Controller } from "react-hook-form"

import ErrorMessage from '../ui/ErrorMessage';

type FragmentInstitucionProps = {
    control: Control<reuneForm, any>
}

export default function FragmentInstitucion({ control }: FragmentInstitucionProps) {

    const { dispatch } = useGlobal()

    return (


        <fieldset>

            <legend>Datos de la institución</legend>

            <div>

                <div className='xl:flex mb-10'>
                    <label htmlFor="NOM_INST" className="w-full xl:w-48">Nombre de la institución:</label>

                    <Controller
                        name='NOM_INST'
                        control={control}
                        rules={{
                            required: 'La institución es requerida'
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-9/12">
                                <input
                                    id="NOM_INST"
                                    type="text"
                                    readOnly

                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'form-update', payload: { field: 'NOM_INST', value: e.target.value } })
                                    }}
                                />
                                {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                            </div>
                        )}
                    />

                </div>

                <div className='xl:flex'>
                    <label htmlFor="NOM_SECT" className="w-full xl:w-14">Sector:</label>

                    <Controller
                        name='NOM_SECT'
                        control={control}
                        rules={{
                            required: 'El sector es requerido'
                        }}

                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-11/12">
                                <input
                                    id="NOM_SECT"
                                    type="text"
                                    readOnly

                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'form-update', payload: { field: 'NOM_SECT', value: e.target.value } })
                                    }}
                                />
                                {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                            </div>
                        )}
                    />
                </div>

            </div>

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-y-16 gap-x-10 pt-16">

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
                                    readOnly

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

                <div className="xl:flex gap-2 items-center">
                    <label htmlFor="NUM_COL" className="w-full xl:w-16">Colonia:</label>

                    <Controller
                        name='NUM_COL'
                        control={control}
                        rules={{
                            required: "Colonia no válida"
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full">
                                <select
                                    id="NUM_COL"
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'form-update', payload: { field: 'NUM_COL', value: e.target.value } })
                                    }}
                                >
                                    <option value={1}>Ninguno</option>
                                    <option value={2}>Fresas</option>
                                </select>

                                {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                            </div>
                        )}
                    />

                </div>

                <div className="xl:flex gap-2 items-center">
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
                                    disabled
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

                <div className="xl:flex gap-2 items-center">
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
                                    disabled

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

                <div className='xl:flex gap-2 items-center'>
                    <label htmlFor="NUM_LOCAL" className="w-full xl:w-20">Localidad:</label>

                    <Controller
                        name='NUM_LOCAL'
                        control={control}
                        rules={{
                            required: "Localidad no válida"
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full">
                                <select
                                    id="NUM_LOCAL"
                                    disabled

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

                <div className='xl:flex gap-2 items-center'>
                    <label htmlFor="TIP_LOCAL" className="w-full xl:w-28">Tipo Localidad:</label>

                    <Controller
                        name='TIP_LOCAL'
                        control={control}
                        rules={{
                            required: "Tipo de Localidad no válida"
                        }}

                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-44">
                                <select
                                    id="TIP_LOCAL"
                                    disabled

                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'form-update', payload: { field: 'TIP_LOCAL', value: e.target.value } })
                                    }}
                                >
                                    <option value={1}>Ninguno</option>
                                    <option value={2}>Localidad</option>
                                </select>

                                {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                            </div>
                        )}
                    />
                </div>
            </section>

        </fieldset>
    )
}
