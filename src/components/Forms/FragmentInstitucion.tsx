import './form.module.css';
import styles from './form.module.css';

import { UseFormRegister } from "react-hook-form"
import { useGlobal } from "../../hooks/useGlobal"
import { reuneDataType } from "../../types"
import clsx from 'clsx';


type FragmentInstitucionProps = {
    register: UseFormRegister<reuneDataType>
}

export default function FragmentInstitucion({ register }: FragmentInstitucionProps) {

    const { state } = useGlobal()

    return (

        <fieldset className='xl:basis-1/2'>

            <legend>Datos de la institución</legend>

            <div className={clsx(styles.gridColumns, 'gap-y-10')}>

                <div>
                    <label htmlFor="inst" className="w-full xl:w-48">Nombre de la institución:</label>
                    <input
                        id="inst"
                        type="text"
                        className="w-full xl:w-1/2"
                        value={state.reuneStateG.reuneData.inst}
                        readOnly disabled
                        {...register('inst', {
                            required: 'La institución es requerida'
                        })}
                    />
                </div>

                <div>
                    <label htmlFor="sector" className="w-full xl:w-14">Sector:</label>
                    <input
                        id="sect"
                        type="text"
                        className="w-full xl:w-4/5"
                        value={state.reuneStateG.reuneData.sector}
                        readOnly disabled
                        {...register('sector', {
                            required: 'El sector es requerido'
                        })}
                    />
                </div>

            </div>

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-y-16 gap-x-10 pt-16">

                <div>
                    <label htmlFor="cp" className="w-full xl:w-8">C.P.</label>
                    <input
                        id="cp"
                        type="text"
                        className="w-full xl:w-auto"
                        value={state.reuneStateG.reuneData.cp}

                        readOnly disabled
                        {...register('cp', {
                            required: "El C.P. es obligatorio",
                            minLength: {
                                value: 5,
                                message: "Formato de C.P. no válido."
                            }
                        })}
                    />
                </div>

                <div className="xl:flex gap-2 items-center">
                    <label htmlFor="colNumber" className="w-full xl:w-16">Colonia:</label>
                    <input
                        id="colNumber"
                        type="number"
                        className="w-full xl:w-12"
                        value={state.reuneStateG.reuneData.colNumber}
                        readOnly disabled
                        {...register('colNumber', {
                            required: "El tipo de localidad es obligatoria",
                            minLength: {
                                value: 0,
                                message: 'Colonia no válida'
                            }
                        })}
                    />

                    <select
                        id="colName"
                        className="w-full xl:w-72"
                        value={state.reuneStateG.reuneData.colName}
                        {...register('colName', {
                            required: "Colonia no válida"
                        })}
                    >
                        <option value="1">Ninguno</option>
                        <option value="2">Fresas</option>
                    </select>

                </div>

                <div className="xl:flex gap-2 items-center">
                    <label htmlFor="edo" className="w-full xl:w-14">Estado:</label>

                    <input
                        id="edo"
                        type="number"
                        className="w-full xl:w-12"
                        value={state.reuneStateG.reuneData.edoNumber}
                        readOnly disabled
                        {...register('edoNumber', {
                            required: "El Estado es obligatorio",
                            minLength: {
                                value: 3,
                                message: 'Estado no válido'
                            }
                        })}
                    />

                    <select
                        id="edoName"
                        className="w-full xl:w-52"
                        value={state.reuneStateG.reuneData.edoName}
                        {...register('edoName', {
                            required: "Estado no válido"
                        })}
                    >
                        <option value="1">Ninguno</option>
                        <option value="2">Benito Juarez</option>
                        <option value="3">Tlalpan</option>
                    </select>
                </div>

                <div className="xl:flex gap-2 items-center">
                    <label htmlFor="muniNumber" className="w-full xl:w-20">Municipio:</label>
                    <input
                        id="muniNumber"
                        type="number"
                        className="w-full xl:w-12"
                        value={state.reuneStateG.reuneData.muniNumber}
                        readOnly disabled
                        {...register('muniNumber', {
                            required: "El Municipio es obligatorio",
                            minLength: {
                                value: 2,
                                message: 'Municipio no válido'
                            }
                        })}
                    />
                    
                    <select
                        id="muniName"
                        className="w-full xl:w-72"
                        value={state.reuneStateG.reuneData.edoName}
                        {...register('muniName', {
                            required: "Municipio no válido"
                        })}
                    >
                        <option value="1">Ninguno</option>
                        <option value="2">cdmx</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="locNumber" className="w-full xl:w-20">Localidad:</label>
                    <input
                        id="locNumber"
                        type="number"
                        className="w-full xl:w-12"
                        value={state.reuneStateG.reuneData.locNumber}
                        readOnly disabled
                        {...register('locNumber', {
                            required: "La localidad es obligatoria",
                            minLength: {
                                value: 0,
                                message: 'Localidad no válida'
                            }
                        })}
                    />
                       <select
                        id="muniName"
                        className="w-full xl:w-36"
                        value={state.reuneStateG.reuneData.locName}
                        {...register('locName', {
                            required: "Localidad no válida"
                        })}
                    >
                        <option value="1">Ninguno</option>
                        <option value="2">cdmx</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="tyLocNumber" className="w-full xl:w-28">Tipo Localidad:</label>
                    <input
                        id="tyLocNumber"
                        type="number"
                        className="w-full xl:w-12"
                        value={state.reuneStateG.reuneData.tyLocNumber}
                        readOnly disabled
                        {...register('tyLocNumber', {
                            required: "El tipo de localidad es obligatoria",
                            minLength: {
                                value: 0,
                                message: 'Tipo de Localidad no válida'
                            }
                        })}
                    />
                    <select
                        id="tyLocName"
                        className="w-full xl:w-28"
                        value={state.reuneStateG.reuneData.tyLocName}
                        {...register('tyLocName', {
                            required: "Tipo de Localidad no válida"
                        })}
                    >
                        <option value="1">Ninguno</option>
                        <option value="2">Localidad</option>
                    </select>
                </div>
            </section>

        </fieldset>

    )
}
