
import clsx from 'clsx';
import { useEffect } from 'react';
import '../../css/Form.module.css';
import styles from '../../css/Form.module.css';
import { Controller, useForm } from 'react-hook-form';

import { reuneDataType } from '../../types';
import SharedForm from '../shared/SharedForm';
import { useGlobal } from '../../hooks/useGlobal';
import { dataFormatted } from '../../hooks/dataFormat';
import FragmentInstitucion from '../shared/FragmentInstitucion';


export default function ReuneForm() {

    //Dispatch.- función especial que permite ejecutar acciones cuando se le llame   
    const { state, dispatch } = useGlobal()
    const { numberFormat } = dataFormatted()

    const { handleSubmit, formState: { errors }, setValue, control, watch } = useForm<reuneDataType>({
        //defaultValues es clave para cargar valores iniciales en el formulario.
        defaultValues: state.reuneStateG.reuneData
    })

    //Sincronizar datos del formulario con el estado global
    const reuneSubmit = (data: reuneDataType) => {
        console.log(data)
        //const newClient = dispatch({ type: 'client-add', payload: { data } })
    }

    const handleError = () => {
        console.log(errors)
    }

    //Efecto para cargar datos iniciales
    useEffect(() => {
        //key es de tipo string (derivado de Object.entries)
        Object.entries(state.reuneStateG.reuneData).forEach(([key, value]) => {
            setValue(key as keyof reuneDataType, value)
        })
    }, [state.reuneStateG.reuneData, setValue])


    // Observa valor dinámico del select
    const edoReg = watch('edoReg')
    const claimStatus = watch('queja')
    const reclChecked = watch('recl')

    const claimType = claimStatus !== 'consulta';
    const concluido = edoReg === 'pendiente' || 'concluido';


    return (

        <form
            onSubmit={handleSubmit(reuneSubmit, handleError)}
            autoComplete="on"
            data-formulario>

            <SharedForm />

            {claimType && (
                <>
                    <fieldset>

                        <legend>Datos Generales</legend>

                        <section className="flex flex-col xl:flex-row justify-center  items-center gap-y-6 xl:gap-x-10 xl:mb-10 border-b-2 border-teal-300 pb-7">

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

                            <section className={clsx(styles.gridColumns3, 'gap-y-12 mt-16 xl:mt-0')}>

                                <div className="basis-full xl:flex">

                                    <label htmlFor="fecNot" className="w-full xl:w-52">Fecha de Notificación:</label>

                                    <Controller
                                        name='fecNot'
                                        control={control}
                                        rules={{
                                            required: 'Seleccione una fecha'
                                        }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div className="w-full xl:w-3/5">
                                                <input
                                                    id="fecNot"
                                                    type="date"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        dispatch({ type: 'client-update', payload: { field: 'fecNot', value: e.target.value } })
                                                    }}
                                                />
                                            </div>
                                        )}
                                    />
                                </div>

                                <div className="basis-full xl:flex">
                                    <label htmlFor="fecReso" className="w-full xl:w-52">Fecha de Resolución:</label>
                                    <Controller
                                        name='fecReso'
                                        control={control}
                                        rules={{
                                            required: 'Seleccione una fecha'
                                        }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div className="w-full xl:w-3/5">
                                                <input
                                                    id="fecReso"
                                                    type="date"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        dispatch({ type: 'client-update', payload: { field: 'fecReso', value: e.target.value } })
                                                    }}
                                                />
                                            </div>
                                        )}
                                    />
                                </div>

                                <div className="basis-full xl:flex">
                                    <label htmlFor="typeRe" className="w-full xl:w-52">Tipo de Resolución:</label>

                                    <Controller
                                        name='typeRe'
                                        control={control}
                                        rules={{
                                            required: 'Seleccione tipo de resolución'
                                        }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div className="w-full xl:w-3/5">
                                                <select
                                                    id="typeRe"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        dispatch({ type: 'client-update', payload: { field: 'typeRe', value: e.target.value } })
                                                    }}
                                                >
                                                    <option value="1">Demandar</option>
                                                    <option value="2">Acusarlo con tu mamá</option>
                                                </select>
                                            </div>
                                        )}
                                    />
                                </div>
                            </section>
                        )}

                        {/** 
                        <div className={styles.gridColumns}>

                            <section className="flex flex-col items-center xl:items-start justify-center gap-y-6 gap-x-1">

                                {claimType && concluido && (
                                    <span className='flex flex-col items-center xl:items-start justify-center gap-y-8 gap-x-1'>

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
                                    </span>
                                )}

                                {claimStatus === 'aclaracion' && (
                                    <>

                                        <hr className="w-44 xl:w-96 " />

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
                                    </>
                                )}

                            </section>

                            {claimType && edoReg === 'concluido' && (

                                <section className={clsx(styles.flexColumns, 'mt-16 xl:mt-0')}>

                                    <div className="basis-full xl:flex">
                                        <label htmlFor="fecNot" className="w-full xl:w-2/5">Fecha de Notificación:</label>
                                        <Controller
                                            name='fecNot'
                                            control={control}
                                            rules={{
                                                required: 'Seleccione una fecha'
                                            }}
                                            render={({ field, fieldState: { error } }) => (
                                                <div className="w-full xl:w-3/5">
                                                    <input
                                                        id="fecNot"
                                                        type="date"
                                                        {...field}
                                                        onChange={(e) => {
                                                            field.onChange(e)
                                                            dispatch({ type: 'client-update', payload: { field: 'fecNot', value: e.target.value } })
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div className="basis-full xl:flex">
                                        <label htmlFor="fecReso" className="w-full xl:w-2/5">Fecha de Resolución:</label>
                                        <Controller
                                            name='fecReso'
                                            control={control}
                                            rules={{
                                                required: 'Seleccione una fecha'
                                            }}
                                            render={({ field, fieldState: { error } }) => (
                                                <div className="w-full xl:w-3/5">
                                                    <input
                                                        id="fecReso"
                                                        type="date"
                                                        {...field}
                                                        onChange={(e) => {
                                                            field.onChange(e)
                                                            dispatch({ type: 'client-update', payload: { field: 'fecReso', value: e.target.value } })
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div className="basis-full xl:flex">
                                        <label htmlFor="typeRe" className="w-full xl:w-2/5">Tipo de Resolución:</label>

                                        <Controller
                                            name='typeRe'
                                            control={control}
                                            rules={{
                                                required: 'Seleccione tipo de resolución'
                                            }}
                                            render={({ field, fieldState: { error } }) => (
                                                <div className="w-full xl:w-3/5">
                                                    <select
                                                        id="typeRe"
                                                        {...field}
                                                        onChange={(e) => {
                                                            field.onChange(e)
                                                            dispatch({ type: 'client-update', payload: { field: 'typeRe', value: e.target.value } })
                                                        }}
                                                    >
                                                        <option value="1">Demandar</option>
                                                        <option value="2">Acusarlo con tu mamá</option>
                                                    </select>
                                                </div>
                                            )}
                                        />
                                    </div>
                                </section>
                            )}
                        </div>*/}

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

            <input
                type="submit"
                value="Guardar"
                className="mt-9 uppercase"
            />

        </form>

    )

}
