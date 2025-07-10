import '@/css/Form.module.css';
import { useEffect } from 'react';
import { reuneForm } from '@/types/zod';
import styles from '@/css/Form.module.css';
import { useGlobal } from '@/hooks/useGlobal';
import { Controller, useForm } from 'react-hook-form';

import FragmentInstitucion from '../shared/FragmentInstitucion';
import GeneralDataForm from '../shared/GeneralDataForm';
import SharedForm from '../shared/SharedForm';
import ErrorMessage from '../ui/ErrorMessage';


export default function ReuneForm() {
    //Dispatch.- función especial que permite ejecutar acciones cuando se le llame   
    const { state, dispatch } = useGlobal()

    const { handleSubmit, formState: { errors }, setValue, control, watch } = useForm<reuneForm>({
        //defaultValues es clave para cargar valores iniciales en el formulario.
         defaultValues: state.formStateG.reuneData
    })

    // Observa valor dinámico del select
    const CVE_EDOCP = watch('CVE_EDOCP')
    const CVE_Queja = watch('CVE_Queja')
    const BAN_MONET = watch('BAN_MONET')

    const tipo_Queja = CVE_Queja !== 1;


    //Efecto para cargar datos iniciales
    useEffect(() => {
        //key es de tipo string (derivado de Object.entries)
        Object.entries(state.formStateG.reuneData).forEach(([key, value]) => {
            setValue(key as keyof reuneForm, value)
        })
    }, [state.formStateG.reuneData, setValue])


    //Sincronizar datos del formulario con el estado global
    const reuneSubmit = (data: reuneForm) => {
        console.log(data)
        //const newClient = dispatch({ type: 'form-add', payload: { data } })
    }

    const handleError = () => {
        console.log(errors)
    }

    return (

        <form
            data-formulario
            autoComplete="on"
            onSubmit={handleSubmit(reuneSubmit, handleError)}
        >

            <SharedForm control={control} />

            {tipo_Queja && (
                <>
                    <fieldset>

                        <legend>Datos Generales</legend>

                        <section className="flex flex-col xl:flex-row justify-center items-center gap-y-6 xl:gap-x-10 xl:mb-10 border-b-2 border-teal-300 pb-7">

                            {tipo_Queja && (
                                <>
                                    <div className='xl:flex'>
                                        <label htmlFor="BAN_MONET" className="w-full xl:w-96">¿El reclamo o Aclaración es de objeto monetario?</label>

                                        <Controller
                                            name='BAN_MONET'
                                            control={control}
                                            render={({ field }) => (

                                                <div className="w-full xl:w-4">
                                                    <input
                                                        id="BAN_MONET"
                                                        type="checkbox"
                                                        checked={field.value}

                                                        onChange={(e) => {
                                                            field.onChange(e.target.checked)
                                                            dispatch({
                                                                type: 'form-update',
                                                                payload: { field: 'BAN_MONET', value: e.target.checked }
                                                            })
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div className='xl:flex'>
                                        <label htmlFor="BAN_REVER" className="w-full xl:w-16">Reversa:</label>

                                        <Controller
                                            name='BAN_REVER'
                                            control={control}
                                            render={({ field }) => (

                                                <div className="w-full xl:w-4">
                                                    <input
                                                        id="BAN_REVER"
                                                        type="checkbox"
                                                        checked={field.value}
                                                        onChange={(e) => {
                                                            field.onChange(e.target.checked)
                                                            dispatch({
                                                                type: 'form-update',
                                                                payload: { field: 'BAN_REVER', value: e.target.checked }
                                                            })
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>
                                </>
                            )}

                            {CVE_Queja === 3 && (

                                <div className='xl:flex'>

                                    <label htmlFor="BAN_OPEXT" className="w-full xl:w-40">Si es del extranjero:</label>

                                    <Controller
                                        name='BAN_OPEXT'
                                        control={control}
                                        render={({ field }) => (

                                            <div className="w-full xl:w-4">
                                                <input
                                                    id="BAN_OPEXT"
                                                    type="checkbox"
                                                    checked={field.value}
                                                    onChange={(e) => {
                                                        field.onChange(e.target.checked)
                                                        dispatch({
                                                            type: 'form-update',
                                                            payload: { field: 'BAN_OPEXT', value: e.target.checked }
                                                        })
                                                    }}
                                                />
                                            </div>
                                        )}
                                    />
                                </div>

                            )}

                        </section>

                        {tipo_Queja && CVE_EDOCP === 2 && (
                            <GeneralDataForm control={control} />
                        )}

                    </fieldset>

                    {BAN_MONET && (

                        <fieldset >

                            <legend>Datos del Reclamo por Abono</legend>

                            <div className={styles.flexColumns}>

                                <div className="basis-full xl:basis-72 xl:flex">
                                    <label htmlFor="MONT_RECLA" className="w-full xl:w-1/2">Monto Reclamado:</label>

                                    <Controller
                                        name='MONT_RECLA'
                                        control={control}
                                        rules={{
                                            required: 'Agregar monto reclamado',
                                            min: 0
                                        }}

                                        render={({ field, fieldState: { error } }) => (
                                            <div className="w-full xl:w-1/2">
                                                <input
                                                    id="MONT_RECLA"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        dispatch({ type: 'form-update', payload: { field: 'MONT_RECLA', value: e.target.value } })
                                                    }}
                                                />
                                                {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                            </div>
                                        )}
                                    />
                                </div>

                                <div className="basis-full xl:basis-72 xl:flex">
                                    <label htmlFor="FEC_ABONO" className="w-full xl:w-32">Fecha de Abono:</label>

                                    <Controller
                                        name='FEC_ABONO'
                                        control={control}
                                        rules={{
                                            required: 'Agregar fecha de abono',
                                            minLength: 0
                                        }}

                                        render={({ field, fieldState: { error } }) => (
                                            <div className="w-full xl:w-1/2">
                                                <input
                                                    id="FEC_ABONO"
                                                    type="date"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        dispatch({ type: 'form-update', payload: { field: 'FEC_ABONO', value: e.target.value } })
                                                    }}
                                                />
                                                {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                            </div>
                                        )}
                                    />
                                </div>

                                <div className="basis-full xl:basis-72 xl:flex">
                                    <label htmlFor="MONT_ABOUS" className="w-full xl:w-32">Monto Abonado:</label>

                                    <Controller
                                        name='MONT_ABOUS'
                                        control={control}
                                        rules={{
                                            required: 'Agregar monto abonado',
                                            min: 0
                                        }}

                                        render={({ field, fieldState: { error } }) => (
                                            <div className="w-full xl:w-1/2">
                                                <input
                                                    id="MONT_ABOUS"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        dispatch({ type: 'form-update', payload: { field: 'MONT_ABOUS', value: e.target.value } })
                                                    }}
                                                />
                                                {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>

                        </fieldset>
                    )}
                </>
            )}

            <FragmentInstitucion control={control} />


            <input type="submit" value="Guardar" className="mt-9 uppercase" />

        </form>

    )

}
