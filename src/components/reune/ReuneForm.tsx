import '@/css/Form.module.css';
import { useEffect } from 'react';
import { reuneForm } from '@/types/zod';
import styles from '@/css/Form.module.css';
import { useGlobal } from '@/hooks/useGlobal';
import { Controller, useForm } from 'react-hook-form';

import FragmentInstitucion from '../shared/FragmentInstitucion';
import GeneralDataForm from '../shared/GeneralDataForm';
import SharedForm from '../shared/SharedForm';


export default function ReuneForm() {
    //Dispatch.- función especial que permite ejecutar acciones cuando se le llame   
    const { state, dispatch } = useGlobal()

    const { handleSubmit, formState: { errors }, setValue, control, watch } = useForm<reuneForm>({
        //defaultValues es clave para cargar valores iniciales en el formulario.
       // defaultValues: state.reuneStateG.reuneData
    })

    // Observa valor dinámico del select
    const edoReg = watch('edoReg')
    const claimStatus = watch('queja')
    const reclChecked = watch('recl')

    const claimType = claimStatus !== 'consulta';
    const concluido = edoReg === 'pendiente' || 'concluido';

    console.log(edoReg)


    //Efecto para cargar datos iniciales
    useEffect(() => {
        //key es de tipo string (derivado de Object.entries)
        Object.entries(state.reuneStateG.reuneData).forEach(([key, value]) => {
            setValue(key as keyof reuneDataType, value)
        })
    }, [state.reuneStateG.reuneData, setValue])



    //Sincronizar datos del formulario con el estado global
    const reuneSubmit = (data: reuneForm) => {
        console.log(data)
        //const newClient = dispatch({ type: 'client-add', payload: { data } })
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

            <SharedForm />

            {claimType && (
                <>
                    <fieldset>

                        <legend>Datos Generales</legend>

                        <section className="flex flex-col xl:flex-row justify-center items-center gap-y-6 xl:gap-x-10 xl:mb-10 border-b-2 border-teal-300 pb-7">

                            {claimType && concluido && (
                                <>

                                    <div className='xl:flex'>
                                        <label htmlFor="recl" className="w-full xl:w-96">¿El reclamo o Aclaración es de objeto monetario?</label>
                                        <Controller
                                            name='recl'
                                            control={control}
                                            render={({ field, fieldState: { error } }) => (

                                                <div className="w-full xl:w-4">
                                                    <input
                                                        id="recl"
                                                        type="checkbox"
                                                        checked={field.value}
                                                        onChange={(e) => {
                                                            field.onChange(e.target.checked)
                                                            dispatch({
                                                                type: 'client-update',
                                                                payload: { field: 'recl', value: e.target.checked }
                                                            })
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div className='xl:flex'>
                                        <label htmlFor="rever" className="w-full xl:w-16">Reversa:</label>

                                        <Controller
                                            name='rever'
                                            control={control}
                                            render={({ field, fieldState: { error } }) => (

                                                <div className="w-full xl:w-4">
                                                    <input
                                                        id="rever"
                                                        type="checkbox"
                                                        checked={field.value}
                                                        onChange={(e) => {
                                                            field.onChange(e.target.checked)
                                                            dispatch({
                                                                type: 'client-update',
                                                                payload: { field: 'rever', value: e.target.checked }
                                                            })
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>

                                </>
                            )}

                            {claimStatus === 'aclaracion' && (

                                <div className='xl:flex'>

                                    <label htmlFor="exg" className="w-full xl:w-40">Si es del extranjero:</label>

                                    <Controller
                                        name='exg'
                                        control={control}
                                        render={({ field, fieldState: { error } }) => (

                                            <div className="w-full xl:w-4">
                                                <input
                                                    id="exg"
                                                    type="checkbox"
                                                    checked={field.value}
                                                    onChange={(e) => {
                                                        field.onChange(e.target.checked)
                                                        dispatch({
                                                            type: 'client-update',
                                                            payload: { field: 'exg', value: e.target.checked }
                                                        })
                                                    }}
                                                />
                                            </div>
                                        )}
                                    />
                                </div>

                            )}

                        </section>

                        {claimType && edoReg === 'concluido' && (
                            <GeneralDataForm />
                        )}

                    </fieldset>

                    {reclChecked && (

                        <fieldset >

                            <legend>Datos del Reclamo por Abono</legend>

                            <div className={styles.flexColumns}>

                                <div className="basis-full xl:basis-72 xl:flex">
                                    <label htmlFor="montRe" className="w-full xl:w-1/2">Monto Reclamado:</label>
                                    <Controller
                                        name='montRe'
                                        control={control}
                                        rules={{
                                            required: 'Agregar monto reclamado',
                                            min: 0
                                        }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div className="w-full xl:w-1/2">
                                                <input
                                                    id="montRe"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        dispatch({ type: 'client-update', payload: { field: 'montRe', value: e.target.value } })
                                                    }}
                                                />
                                            </div>
                                        )}
                                    />
                                </div>

                                <div className="basis-full xl:basis-72 xl:flex">
                                    <label htmlFor="fecAbo" className="w-full xl:w-32">Fecha de Abono:</label>

                                    <Controller
                                        name='fecAbo'
                                        control={control}
                                        rules={{
                                            required: 'Agregar fecha de abono',
                                            minLength: 0
                                        }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div className="w-full xl:w-1/2">
                                                <input
                                                    id="fecAbo"
                                                    type="date"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        dispatch({ type: 'client-update', payload: { field: 'fecAbo', value: e.target.value } })
                                                    }}
                                                />
                                            </div>
                                        )}
                                    />
                                </div>

                                <div className="basis-full xl:basis-72 xl:flex">
                                    <label htmlFor="montAbo" className="w-full xl:w-32">Monto Abonado:</label>
                                    <Controller
                                        name='montAbo'
                                        control={control}
                                        rules={{
                                            required: 'Agregar monto abonado',
                                            min: 0
                                        }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div className="w-full xl:w-1/2">
                                                <input
                                                    id="montAbo"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        dispatch({ type: 'client-update', payload: { field: 'montAbo', value: e.target.value } })
                                                    }}
                                                />
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>

                        </fieldset>
                    )}
                </>
            )}

            <FragmentInstitucion />


            <input type="submit" value="Guardar" className="mt-9 uppercase" />

        </form>

    )

}
