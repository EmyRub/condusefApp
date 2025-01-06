import { useForm } from "react-hook-form"

export default function FragmentInstitucion() {

    const { register } = useForm()

    return (

        <fieldset className='p-6 lg:p-12 lg:basis-1/2'>

            <legend className='w-full md:w-1/2 lg:px-4'>Datos de la institución</legend>

            <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

                <div className="basis-full">
                    <label htmlFor="inst" className="w-full lg:w-1/5 text-center lg:text-left mb-2">Nombre de la institución:</label>
                    <input
                        id="inst"
                        type="text"
                        className="w-full lg:w-4/5"
                        readOnly disabled
                        {...register('inst', {
                            required: 'La institución es requerida'
                        })}
                    />
                </div>

                <div className="basis-full lg:basis-4/6">
                    <label htmlFor="sector" className="w-full lg:w-14 text-center lg:text-left mb-2">Sector:</label>
                    <input
                        id="sect"
                        type="text"
                        className="w-full lg:w-4/5"
                        readOnly disabled
                        {...register('sector', {
                            required: 'El sector es requerido'
                        })}
                    />
                </div>

                <div className="basis-full lg:basis-48">
                    <label htmlFor="cp" className="w-full lg:w-8 text-center lg:text-left mb-2">C.P.</label>
                    <input
                        id="cp"
                        type="text"
                        className="w-full lg:w-32"
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

                <div className="basis-full lg:basis-60">
                    <label htmlFor="edo" className="w-full lg:w-14 text-center lg:text-left mb-2">Estado:</label>
                    <input
                        id="edo"
                        type="text"
                        className="w-full lg:w-36"
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

                <div className="basis-full lg:basis-60">
                    <label htmlFor="muni" className="w-full lg:w-20 text-center lg:text-left mb-2">Municipio:</label>
                    <input
                        id="muni"
                        type="text"
                        className="w-full lg:w-36"
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

                <div className="basis-full lg:basis-60">
                    <label htmlFor="loc" className="w-full lg:w-20 text-center lg:text-left mb-2">Localidad:</label>
                    <input
                        id="loc"
                        type="text"
                        className="w-full lg:w-36"
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

                <div className="basis-full lg:basis-64">
                    <label htmlFor="tyLoc" className="w-full lg:w-28 text-center lg:text-left mb-2">Tipo Localidad:</label>
                    <input
                        id="tyLoc"
                        type="text"
                        className="w-full lg:w-36"
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

                <div className="basis-full lg:basis-1/2 lg:flex gap-2 items-center">
                    <label htmlFor="col" className="w-full lg:w-16 text-center lg:text-left">Colonia:</label>
                    <input
                        id="col"
                        type="text"
                        className="w-full lg:w-12 mb-2"
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
                        className="w-full lg:w-72 text-center"
                        {...register('col2', {
                            required: "Colonia no válida"
                        })}
                    >
                        <option value="">Ninguno</option>
                    </select>
                </div>

            </div>

        </fieldset>
    )
}
