import { useForm } from "react-hook-form"
import { useGlobal } from "../../hooks/useGlobal"

export default function FragmentInstitucion() {

    const { register } = useForm()
    const { state, dispatch } = useGlobal()

    return (

        <fieldset className='p-6 xl:p-12 xl:basis-1/2'>

            <legend className='w-full md:w-1/2 xl:px-4'>Datos de la institución</legend>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 gap-x-1">

                <div>
                    <label htmlFor="inst" className="w-full xl:w-48 text-center xl:text-left mb-2">Nombre de la institución:</label>
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
                    <label htmlFor="sector" className="w-full xl:w-14 text-center xl:text-left mb-2">Sector:</label>
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

                <div className="basis-full xl:basis-48">
                    <label htmlFor="cp" className="w-full xl:w-8 text-center xl:text-left mb-2">C.P.</label>
                    <input
                        id="cp"
                        type="text"
                        className="w-full xl:w-32"
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
                    <label htmlFor="col" className="w-full xl:w-16 text-center xl:text-left">Colonia:</label>
                    <input
                        id="col"
                        type="number"
                        className="w-full xl:w-12 mb-2 xl:mb-0"
                        value={state.reuneStateG.reuneData.col}

                        readOnly disabled
                        {...register('col', {
                            required: "El tipo de localidad es obligatoria",
                            minLength: {
                                value: 0,
                                message: 'Colonia no válida'
                            }
                        })}

                    />
                    <select
                        id=""
                        className="w-full xl:w-72 text-center"
                        value={state.reuneStateG.reuneData.col2}
                        {...register('col2', {
                            required: "Colonia no válida"
                        })}
                    >
                        <option value="1">Ninguno</option>
                        <option value="2">Fresas</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="edo" className="w-full xl:w-14 text-center xl:text-left mb-2">Estado:</label>
                    <input
                        id="edo"
                        type="text"
                        className="w-full xl:w-52"
                        value={state.reuneStateG.reuneData.edo}

                        readOnly disabled
                        {...register('edo', {
                            required: "El Estado es obligatorio",
                            minLength: {
                                value: 3,
                                message: 'Estado no válido'
                            }
                        })}
                    />
                </div>

                <div>
                    <label htmlFor="muni" className="w-full xl:w-20 text-center xl:text-left mb-2">Municipio:</label>
                    <input
                        id="muni"
                        type="text"
                        className="w-full xl:w-auto"
                        value={state.reuneStateG.reuneData.muni}

                        readOnly disabled
                        {...register('muni', {
                            required: "El Municipio es obligatorio",
                            minLength: {
                                value: 2,
                                message: 'Municipio no válido'
                            }
                        })}
                    />
                </div>

                <div>
                    <label htmlFor="loc" className="w-full xl:w-20 text-center xl:text-left mb-2">Localidad:</label>
                    <input
                        id="loc"
                        type="text"
                        className="w-full xl:w-auto"
                        value={state.reuneStateG.reuneData.loc}

                        readOnly disabled
                        {...register('loc', {
                            required: "La localidad es obligatoria",
                            minLength: {
                                value: 0,
                                message: 'Localidad no válida'
                            }
                        })}
                    />
                </div>

                <div>
                    <label htmlFor="tyLoc" className="w-full xl:w-28 text-center xl:text-left mb-2">Tipo Localidad:</label>
                    <input
                        id="tyLoc"
                        type="text"
                        className="w-full xl:w-40"
                        value={state.reuneStateG.reuneData.tyLoc}

                        readOnly disabled
                        {...register('tyLoc', {
                            required: "El tipo de localidad es obligatoria",
                            minLength: {
                                value: 0,
                                message: 'Localidad no válida'
                            }
                        })}
                    />
                </div>
            </section>

        </fieldset>

    )
}
