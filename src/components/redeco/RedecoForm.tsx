import clsx from 'clsx';
import '@/css/Form.module.css';
import styles from '@/css/Form.module.css';
import { useGlobal } from '@/hooks/useGlobal';
import { Controller, useForm } from "react-hook-form";

import SharedForm from '../shared/SharedForm';
import GeneralDataForm from '../shared/GeneralDataForm';
import FragmentInstitucion from '../shared/FragmentInstitucion';


export default function RedecoForm() {

    const { state, dispatch } = useGlobal()
    const { register, handleSubmit, control, watch } = useForm()

    const edoReclaim = watch('edoReg')
    const enableGeneralDta = edoReclaim === 'concluido';

    console.log(edoReclaim)
    console.log(enableGeneralDta)

    const redeSubmit = () => { }

    return (

        <form
            data-formulario
            autoComplete="on"
            onSubmit={handleSubmit(redeSubmit)}
        >

            <SharedForm />

            {enableGeneralDta && (
                <fieldset>
                    <legend>Datos Generales</legend>
                    <GeneralDataForm />
                </fieldset>
            )}

            <fieldset>

                <legend>Penalizaciones</legend>

                <section className={clsx(styles.gridColumns, 'gap-y-16')}>

                    <div className='xl:flex'>

                        <label htmlFor="penalizacion" className="w-full xl:w-56">Número de Penalizaciones:</label>

                        <Controller
                            name='nPenalizacion'
                            control={control}
                            rules={{
                                required: "Número de penalización vacío.",
                                min: {
                                    value: 1,
                                    message: "Número no válido."
                                }
                            }}

                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-48">
                                    <input
                                        type="number"
                                        id="penalizacion"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'nPenalizacion', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>

                        <Controller
                            name='tipoPenalizacion'
                            control={control}
                            rules={{
                                required: 'Seleccione un tipo de penalización'
                            }}

                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <select

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'tipoPenalizacion', value: e.target.value } })
                                        }}
                                    >
                                        <option value="contractuales">Contractuales</option>
                                        <option value="reclamo">Reclamo</option>
                                        <option value="economicas">Económicas</option>

                                    </select>
                                </div>
                            )}
                        />
                    </div>

                </section>

            </fieldset>


            <FragmentInstitucion register={register} />

            <input
                type="submit"
                value="Guardar"
                className="bg-teal-900 rounded-3xl block w-full mt-9 p-3 cursor-pointer uppercase text-white hover:bg-teal-950"
            />

        </form>
    )
}
