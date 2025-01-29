
import clsx from 'clsx';
import './form.module.css';
import styles from './form.module.css';
import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

import SearchButton from '../SearchButton';
import { useGlobal } from '../../hooks/useGlobal';
import { reuneDataType, searchCat, SearchCategory } from '../../types';
import { dataFormatted } from '../../hooks/dataFormat';


export default function ReuneForm() {

    //Dispatch.- función especial que permite ejecutar acciones cuando se le llame   
    const { state, dispatch } = useGlobal()
    const { numberFormat } = dataFormatted()
    const { register, watch, handleSubmit, formState: { errors }, setValue, control } = useForm<reuneDataType>({
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
    const claimType = watch('queja')
    const isRever = useMemo(() => claimType === 'reclamo' && edoReg === 'pendiente', [claimType, edoReg])


    return (

        <form
            onSubmit={handleSubmit(reuneSubmit, handleError)}
            autoComplete="on"
            data-formulario>

            <fieldset className='flex justify-between items-center flex-wrap gap-10 md:gap-12'>

                <div className={clsx(styles.divForm, 'basis-full xl:basis-1/2')}>

                    <label htmlFor="ente" className="w-32">Número del ente:</label>

                    <div
                        className='relative'
                        onClick={(e) => dispatch({ type: 'modal-open', payload: { event: e, category: SearchCategory.Cliente } })}
                    >
                        <button
                            className={styles.buttonSearch}>
                            <MagnifyingGlassIcon className={styles.iconSearch} />
                        </button>

                        {SearchCategory.Cliente === state.modalStateG.modalState.id && state.modalStateG.modalState.modal && (
                            <SearchButton label={searchCat.cliente} />
                        )}

                    </div>

                    <Controller
                        name='ente'
                        control={control}// Este es el objeto de control que React Hook Form necesita para gestionar el campo
                        rules={{
                            required: 'Seleccione N° de Ente',
                            min: 1
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-1/2">
                                <input
                                    id="ente"
                                    type="number"

                                    {...field} // Propiedades del input controlado por React Hook Form
                                    onChange={(e) => {
                                        field.onChange(e)//Actualiza hook con el nuevo valor
                                        dispatch({ type: 'client-update', payload: { field: 'ente', value: e.target.value } })
                                    }}
                                />
                                {error && <p>{error.message}</p>}
                            </div>
                        )}
                    />
                </div>

                <div className={clsx(styles.divForm, 'basis-full xl:basis-2/5')}>

                    <label htmlFor="sucursal" className="w-16">Sucursal:</label>

                    <div
                        className='relative'
                        onClick={(e) => dispatch({ type: 'modal-open', payload: { event: e, category: SearchCategory.Sucursal } })}
                    >
                        <button
                            className={styles.buttonSearch}>
                            <MagnifyingGlassIcon className={styles.iconSearch} />
                        </button>

                        {SearchCategory.Sucursal === state.modalStateG.modalState.id && state.modalStateG.modalState.modal && (
                            <SearchButton label={searchCat.sucursal} />
                        )}

                    </div>
                    <Controller
                        name='sucursal'
                        control={control}
                        rules={{
                            required: 'Seleccione una sucursal',
                            min: 1
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-3/5">
                                <input
                                    id="sucursal"
                                    type="number"
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'sucursal', value: e.target.value } })
                                    }}
                                />
                            </div>
                        )}
                    />

                </div>

            </fieldset>

            <fieldset>

                <legend>Datos de la persona</legend>

                <div className="w-full mb-16">

                    <label htmlFor="cliente" className="w-full xl:w-36">Nombre del Cliente:</label>

                    <Controller
                        name='cliente'
                        control={control}
                        rules={{
                            required: 'El nombre es obligatorio.',
                            minLength: {
                                value: 2,
                                message: 'Nombre no válido'
                            }
                        }}
                        render={({ field, fieldState: { error } }) => (

                            <span className="w-full xl:w-5/6 inline-block">
                                <input
                                    id="cliente"
                                    type="text"
                                    disabled

                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'cliente', value: e.target.value } })
                                    }}
                                />
                            </span>
                        )}
                    />
                </div>

                <section className={clsx(styles.gridColumns3, 'gap-y-16 gap-x-2')}>

                    <div className="xl:flex">
                        <label htmlFor="email" className="w-full xl:w-16">Correo:</label>

                        <Controller
                            name='email'
                            control={control}
                            rules={{
                                required: 'El correo es obligatorio',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Email No Válido'
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <input
                                        id="email"
                                        type="email"

                                        {...field}
                                        disabled
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'email', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                    </div>

                    <div className="xl:flex">

                        <label htmlFor="tel" className="w-full xl:w-20">Teléfono:</label>

                        <Controller
                            name='telefono'
                            control={control}
                            rules={{
                                required: 'El teléfono es obligatorio',
                                minLength: 5
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <input
                                        id="tel"
                                        type="tel"
                                        disabled

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'telefono', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                    </div>

                    <div className="flex gap-3 items-center xl:items-start justify-center">
                        <label htmlFor="genero" className="xl:w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <label htmlFor="f">M</label>

                            <Controller
                                name='genero'
                                control={control}
                                rules={{ required: 'Seleccione un género' }}
                                render={({ field, fieldState: { error } }) => (

                                    <input
                                        id="genero"
                                        type="radio"
                                        disabled

                                        {...field}
                                        value='femenino'
                                        checked={field.value === 'femenino'}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'genero', value: e.target.value } })
                                        }}
                                    />
                                )}
                            />
                        </div>

                        <div className="flex gap-1">
                            <label htmlFor="m">H</label>

                            <Controller
                                name='genero'
                                control={control}

                                render={({ field, fieldState: { error } }) => (
                                    <input
                                        id="m"
                                        type="radio"
                                        disabled

                                        {...field}
                                        value='masculino'
                                        checked={field.value === 'masculino'}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'genero', value: e.target.value } })
                                        }}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div className="xl:flex">
                        <label htmlFor="typePer" className="w-full xl:w-32">Tipo de Persona:</label>

                        <Controller
                            name='typePer'
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-40">
                                    <select
                                        id="typePer"
                                        disabled

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'typePer', value: e.target.value } })
                                        }}
                                    >
                                        <option value='moral'>Moral</option>
                                        <option value="fisica">Física</option>
                                    </select>
                                </div>
                            )}
                        />

                    </div>

                    <div className="xl:flex">
                        <label htmlFor="age" className="w-full xl:w-12">Edad:</label>
                        <Controller
                            name='age'
                            control={control}
                            rules={{
                                required: 'Agregar una edad',
                                min: 18
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <input
                                        id="age"
                                        type="number"
                                        disabled

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'age', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />

                    </div>

                    <div className="flex flex-wrap gap-3 items-start justify-center">

                        <label htmlFor="pori" className="w-full xl:w-12">PORI:</label>

                        <Controller
                            name='pori'
                            control={control}

                            render={({ field, fieldState: { error } }) => (

                                <div className="w-full xl:w-12">
                                    <input
                                        id="pori"
                                        type="checkbox"
                                        checked={field.value}
                                        onChange={(e) => {
                                            field.onChange(e.target.checked)
                                            dispatch({
                                                type: 'client-update',
                                                payload: { field: 'pori', value: e.target.checked }
                                            })
                                        }}
                                    />
                                </div>
                            )}
                        />
                    </div>
                </section>

            </fieldset>

            <fieldset>

                <legend>Datos de Comunicación</legend>

                <section className={clsx(styles.gridColumns, 'gap-y-16')}>

                    <div className='xl:flex'>

                        <label htmlFor="mes" className="w-full xl:w-10">Mes:</label>

                        <Controller
                            name='mes'
                            control={control}
                            rules={{
                                required: "El mes es obligatorio",
                                min: {
                                    value: 1,
                                    message: "Formato de mes no válido."
                                },
                                max: {
                                    value: 12,
                                    message: "Formato de mes no válido."
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-4/5">
                                    <input
                                        id="mes"
                                        type="number"
                                        disabled

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'mes', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex gap-1'>
                        <label htmlFor="nProd" className="w-full xl:w-40">Número de Producto:</label>

                        <Controller
                            name='nProdn'
                            control={control}
                            rules={{
                                required: "El tipo de localidad es obligatoria",
                                minLength: {
                                    value: 0,
                                    message: 'N° de Producto No Válido.'
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-28">
                                    <input
                                        id="nProdn"
                                        type="text"
                                        disabled

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'nProdn', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />

                        <Controller
                            name='nProdS'
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-40">
                                    <select
                                        id="nProdS"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'nProdS', value: e.target.value } })
                                        }}
                                    >
                                        <option value="1">Crédito Simple Auto</option>
                                        <option value="2">Crédito Simple CN</option>

                                    </select>
                                </div>
                            )}
                        />

                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="fecReg" className="w-full xl:w-36">Fecha de Registro:</label>

                        <Controller
                            name='fecReg'
                            control={control}
                            rules={{
                                required: 'Seleccionar Fecha de Registro.'
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <input
                                        id="fecReg"
                                        type="date"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'fecReg', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="fecAtn" className="w-full xl:w-36">Fecha de Atención</label>

                        <Controller
                            name='fecAtn'
                            control={control}
                            rules={{
                                required: 'Seleccionar Fecha de Atención.'
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <input
                                        id="fecAtn"
                                        type="date"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'fecAtn', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />

                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="folAtn" className="w-full xl:w-36">Folio de Atención</label>

                        <Controller
                            name='folAtn'
                            control={control}
                            rules={{
                                required: true,
                                minLength: 1
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <input
                                        id="folAtn"
                                        type="text"
                                        disabled

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'folAtn', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="folConduf" className="w-full xl:w-36">Folio condusef:</label>
                        <Controller
                            name='folConduf'
                            control={control}
                            rules={{
                                required: true,
                                minLength: 1
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <input
                                        id="folConduf"
                                        type="text"
                                        disabled

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'folConduf', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="queja" className="w-full xl:w-36">Tipo de Queja</label>

                        <Controller
                            name='queja'
                            control={control}
                            rules={{
                                required: 'Seleccione un tipo de queja'
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <select
                                        id="queja"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'queja', value: e.target.value } })
                                        }}
                                    >
                                        <option value="consulta">Consulta</option>
                                        <option value="reclamo">Reclamo</option>
                                        <option value="aclaracion">Aclaración</option>

                                    </select>
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="edoReg" className="w-full xl:w-36">Estado de registro</label>

                        <Controller
                            name='edoReg'
                            control={control}
                            rules={{
                                required: 'Seleccione un estado de registro'
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <select
                                        id="edoReg"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'edoReg', value: e.target.value } })
                                        }}
                                    >
                                        <option value="ninguno">Ninguno</option>
                                        <option value="pendiente">Pendiente</option>
                                        <option value="concluido">Concluido</option>

                                    </select>
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="nvlAtn" className="w-full xl:w-36">Nivel de Atención:</label>

                        <Controller
                            name='nvlAtn'
                            control={control}
                            rules={{
                                required: 'Seleccionar nivel de atención'
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <select
                                        id="nvlAtn"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'nvlAtn', value: e.target.value } })
                                        }}
                                    >
                                        <option value="1">Vía Eletrónica</option>
                                        <option value="2">Vía Teléfonica</option>

                                    </select>
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="medioCmn" className="w-full xl:w-48">Medio de Comunicación:</label>

                        <Controller
                            name='medioCmn'
                            control={control}
                            rules={{
                                required: 'Seleccione un medio de comunicación'
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-60">
                                    <select
                                        id="medioCmn"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'medioCmn', value: e.target.value } })
                                        }}
                                    >
                                        <option value="email">Correo Electrónico</option>
                                        <option value="web">Página web</option>

                                    </select>
                                </div>
                            )}
                        />
                    </div>

                </section>

                <div className={clsx(styles.divForm, 'pt-16')}>

                    <label htmlFor="causa" className="w-12">Causa:</label>

                    <div
                        className='relative'
                        onClick={(e) => dispatch({ type: 'modal-open', payload: { event: e, category: SearchCategory.Causa } })}
                    >
                        <button
                            className={styles.buttonSearch}>
                            <MagnifyingGlassIcon className={styles.iconSearch} />
                        </button>

                        {SearchCategory.Causa === state.modalStateG.modalState.id && state.modalStateG.modalState.modal && (
                            <SearchButton
                                label={searchCat.causa}
                            />
                        )}

                    </div>

                    <Controller
                        name='causa'
                        control={control}
                        rules={{
                            required: true,
                            minLength: 1
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-4/5">
                                <input
                                    id="causa"
                                    type="text"
                                    disabled
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'causa', value: e.target.value } })
                                    }}
                                />
                            </div>
                        )}
                    />
                </div>

            </fieldset>

            <fieldset>

                <legend>Datos Generales</legend>

                <div className={styles.gridColumns}>

                    <section className="flex flex-col items-center xl:items-start justify-center gap-y-6 gap-x-1">

                        {isRever && (
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

                    </section>

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
                </div>

            </fieldset>

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

            <input
                type="submit"
                value="Guardar"
                className="mt-9 uppercase"
            />

        </form>

    )

}
