import clsx from 'clsx';
import '@/css/Form.module.css';
import { useEffect } from 'react';
import { redecoForm } from '@/types/zod';
import styles from '@/css/Form.module.css';
import { useGlobal } from '@/hooks/useGlobal';
import { Controller, useForm } from "react-hook-form";

import SharedForm from '../shared/SharedForm';
import GeneralDataForm from '../shared/GeneralDataForm';
import FragmentInstitucion from '../shared/FragmentInstitucion';
import ErrorMessage from '../ui/ErrorMessage';


export default function RedecoForm() {

    const { state, dispatch } = useGlobal()
    const { handleSubmit, control, watch, setValue, formState: { errors } } = useForm<redecoForm>({
        //defaultValues es clave para cargar valores iniciales en el formulario.
        defaultValues: state.formStateG.redecoData
    })

    const CVE_EDOCP = watch('CVE_EDOCP')
    const enableGeneralDta = CVE_EDOCP === 2

    const redeSubmit = (data: redecoForm) => { console.log('REDE',data) }
    const handleError = () => { console.log(errors) }

    useEffect(() => {
        Object.entries(state.formStateG.redecoData).forEach(([key, value]) => {
            setValue(key as keyof redecoForm, value)
        })
    }, [state.formStateG.redecoData, setValue])

    return (

        <form
            data-formulario
            autoComplete="on"
            onSubmit={handleSubmit(redeSubmit, handleError)}
        >

            <SharedForm control={control} />

            {enableGeneralDta && (
                <fieldset>
                    <legend>Datos Generales</legend>
                    <GeneralDataForm control={control} />
                </fieldset>
            )}

            <fieldset>

                <legend>Penalizaciones</legend>

                <section className={clsx(styles.gridColumns, 'gap-y-16')}>

                    <div className='xl:flex'>

                        <label htmlFor="NUM_QuPen" className="w-full xl:w-56">Número de Penalizaciones:</label>

                        <Controller
                            name='NUM_QuPen'
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
                                        id="NUM_QuPen"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_QuPen', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>

                        <Controller
                            name='NUM_IdPen'
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
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_IdPen', value: e.target.value } })
                                        }}
                                    >
                                        <option value={1}>Contractuales</option>
                                        <option value={2}>Reclamo</option>
                                        <option value={3}>Económicas</option>
                                    </select>

                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                </section>

            </fieldset>


            <FragmentInstitucion control={control} />

            <input
                type="submit"
                value="Guardar"
                className="bg-teal-900 rounded-3xl block w-full mt-9 p-3 cursor-pointer uppercase text-white hover:bg-teal-950"
            />

        </form>
    )
}
