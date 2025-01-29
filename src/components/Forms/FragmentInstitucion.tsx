import './form.module.css';
import styles from './form.module.css';

import { Controller, useForm, UseFormRegister } from "react-hook-form"
import { useGlobal } from "../../hooks/useGlobal"
import { reuneDataType } from "../../types"
import clsx from 'clsx';


type FragmentInstitucionProps = {
    register: UseFormRegister<reuneDataType>
}

export default function FragmentInstitucion({ register }: FragmentInstitucionProps) {

    const { state, dispatch } = useGlobal()
    const { control } = useForm();

    return (


        <fieldset>

            <legend>Datos de la institución</legend>

            <div className={clsx(styles.gridColumns, 'gap-y-10')}>

                <div className='xl:flex'>
                    <label htmlFor="inst" className="w-full xl:w-48">Nombre de la institución:</label>

                    <Controller
                        name='inst'
                        control={control}
                        rules={{
                            required: 'La institución es requerida'
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-1/2">
                                <input
                                    id="inst"
                                    type="text"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'inst', value: e.target.value } })
                                    }}
                                />
                            </div>
                        )}
                    />

                </div>

                <div className='xl:flex'>
                    <label htmlFor="sector" className="w-full xl:w-14">Sector:</label>
                    <Controller
                        name='sector'
                        control={control}
                        rules={{
                            required: 'El sector es requerido'
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-4/5">
                                <input
                                    id="sect"
                                    type="text"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'sector', value: e.target.value } })
                                    }}
                                />
                            </div>
                        )}
                    />
                </div>

            </div>

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-y-16 gap-x-10 pt-16">

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
                            <div className="w-full xl:w-auto">
                                <input
                                    id="cp"
                                    type="text"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'cp', value: e.target.value } })
                                    }}
                                />
                            </div>
                        )}
                    />
                </div>

                <div className="xl:flex gap-2 items-center">
                    <label htmlFor="colNumber" className="w-full xl:w-16">Colonia:</label>
                    <Controller
                        name='colNumber'
                        control={control}
                        rules={{
                            required: "El tipo de localidad es obligatoria",
                            minLength: {
                                value: 0,
                                message: 'Colonia no válida'
                            }
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-12">
                                <input
                                    id="colNumber"
                                    type="number"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'colNumber', value: e.target.value } })
                                    }}
                                />
                            </div>
                        )}
                    />

                    <Controller
                        name='colName'
                        control={control}
                        rules={{
                            required: "Colonia no válida"
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-72">
                                <select
                                    id="colName"
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'colName', value: e.target.value } })
                                    }}
                                >
                                    <option value="1">Ninguno</option>
                                    <option value="2">Fresas</option>
                                </select>
                            </div>
                        )}
                    />

                </div>

                <div className="xl:flex gap-2 items-center">
                    <label htmlFor="edo" className="w-full xl:w-14">Estado:</label>

                    <Controller
                        name='edoNumber'
                        control={control}
                        rules={{
                            required: "El Estado es obligatorio",
                            minLength: {
                                value: 3,
                                message: 'Estado no válido'
                            }
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-12">
                                <input
                                    id="edo"
                                    type="number"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'edoNumber', value: e.target.value } })
                                    }}
                                />
                            </div>
                        )}
                    />

                    <Controller
                        name='edoName'
                        control={control}
                        rules={{
                            required: "Estado no válido"
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-52">
                                <select
                                    id="edoName"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'edoName', value: e.target.value } })
                                    }}
                                >
                                    <option value="1">Ninguno</option>
                                    <option value="2">Benito Juarez</option>
                                    <option value="3">Tlalpan</option>
                                </select>
                            </div>
                        )}
                    />
                </div>

                <div className="xl:flex gap-2 items-center">
                    <label htmlFor="muniNumber" className="w-full xl:w-20">Municipio:</label>

                    <Controller
                        name='muniNumber'
                        control={control}
                        rules={{
                            required: "El Municipio es obligatorio",
                            minLength: {
                                value: 2,
                                message: 'Municipio no válido'
                            }
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-16">
                                <input
                                    id="muniNumber"
                                    type="number"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'muniNumber', value: e.target.value } })
                                    }}
                                />
                            </div>
                        )}
                    />

                    <Controller
                        name='muniName'
                        control={control}
                        rules={{
                            required: "Municipio no válido"
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-72">
                                <select
                                    id="muniName"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'muniName', value: e.target.value } })
                                    }}
                                >
                                    <option value="1">Ninguno</option>
                                    <option value="2">cdmx</option>
                                </select>
                            </div>
                        )}
                    />
                </div>

                <div className='xl:flex gap-2 items-center'>
                    <label htmlFor="locNumber" className="w-full xl:w-20">Localidad:</label>

                    <Controller
                        name='locNumber'
                        control={control}
                        rules={{
                            required: "La localidad es obligatoria",
                            minLength: {
                                value: 0,
                                message: 'Localidad no válida'
                            }
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-12">
                                <input
                                    id="locNumber"
                                    type="number"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'locNumber', value: e.target.value } })
                                    }}
                                />
                            </div>
                        )}
                    />

                    <Controller
                        name='locName'
                        control={control}
                        rules={{
                            required: "Localidad no válida"
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-36">
                                <select
                                    id="locName"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'locName', value: e.target.value } })
                                    }}
                                >
                                    <option value="1">Ninguno</option>
                                    <option value="2">cdmx</option>
                                </select>
                            </div>
                        )}
                    />
                </div>

                <div className='xl:flex gap-2 items-center'>
                    <label htmlFor="tyLocNumber" className="w-full xl:w-28">Tipo Localidad:</label>
                    <Controller
                        name='tyLocNumber'
                        control={control}
                        rules={{
                            required: "El tipo de localidad es obligatoria",
                            minLength: {
                                value: 0,
                                message: 'Tipo de Localidad no válida'
                            }
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-12">
                                <input
                                    id="tyLocNumber"
                                    type="number"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'tyLocNumber', value: e.target.value } })
                                    }}
                                />
                            </div>
                        )}
                    />

                    <Controller
                        name='tyLocName'
                        control={control}
                        rules={{
                            required: "Tipo de Localidad no válida"
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-28">
                                <select
                                    id="tyLocName"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'tyLocName', value: e.target.value } })
                                    }}
                                >
                                    <option value="1">Ninguno</option>
                                    <option value="2">Localidad</option>
                                </select>
                            </div>
                        )}
                    />
                </div>
            </section>

        </fieldset>
    )
}
