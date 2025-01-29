
import './form.module.css';
import styles from './form.module.css';
import { Controller, useForm } from 'react-hook-form';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

import SearchButton from '../SearchButton';
import FragmentInstitucion from './FragmentInstitucion';

import { useGlobal } from '../../hooks/useGlobal';
import { reuneDataType, searchCat, SearchCategory } from '../../types';
import { dataFormatted } from '../../hooks/dataFormat';
import { useEffect, useMemo } from 'react';
import clsx from 'clsx';


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

                    <div>

                        <label htmlFor="mes" className="w-full xl:w-10">Mes:</label>
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


                        <input
                            id="mes"
                            type="number"
                            disabled
                            className="w-full xl:w-4/5"
                            value={state.reuneStateG.reuneData.mes}

                            {...register('mes', {
                                required: "El mes es obligatorio",
                                minLength: {
                                    value: 1,
                                    message: "Formato de mes no válido."
                                },
                                maxLength: {
                                    value: 12,
                                    message: "Formato de mes no válido."
                                }

                            })}
                        />

                    </div>

                    <div>
                        <label htmlFor="nProd" className="w-full xl:w-40">Número de Producto:</label>

                        <input
                            id="nProdn"
                            type="text"
                            className="w-full xl:w-28"
                            value={state.reuneStateG.reuneData.nProdn}
                            readOnly disabled

                            {...register('nProdn', {
                                required: "El tipo de localidad es obligatoria",
                                minLength: {
                                    value: 0,
                                    message: 'N° de Producto No Válido.'
                                }
                            })} />

                        <select
                            id="nProdS"
                            className="w-full xl:w-40"
                            value={state.reuneStateG.reuneData.nProdS}

                            {...register('nProdS', {
                                required: true
                            })}
                        >
                            <option value="1">Crédito Simple Auto</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="fecReg" className="w-full xl:w-36">Fecha de Registro:</label>
                        <input
                            id="fecReg"
                            type="date"
                            className="w-full xl:w-72"
                            {...register('fecReg', {
                                required: 'Seleccionar Fecha de Registro.'
                            })}
                        />
                    </div>

                    <div>
                        <label htmlFor="fecAtn" className="w-full xl:w-36">Fecha de Atención</label>
                        <input
                            id="fecAtn"
                            type="date"
                            className="w-full xl:w-72"
                            {...register('fecAtn', {
                                required: 'Seleccionar Fecha de Atención.'
                            })}
                        />
                    </div>

                    <div>
                        <label htmlFor="folAtn" className="w-full xl:w-36">Folio de Atención</label>
                        <input
                            id="folAtn"
                            type="text"
                            className="w-full xl:w-72"
                            value={state.reuneStateG.reuneData.folAtn}
                            readOnly disabled
                            {...register('folAtn', {
                                required: true,
                                minLength: 1
                            })}
                        />
                    </div>

                    <div>
                        <label htmlFor="folConduf" className="w-full xl:w-36">Folio condusef:</label>
                        <input
                            id="folConduf"
                            type="text"
                            className="w-full xl:w-72"
                            value={state.reuneStateG.reuneData.folConduf}
                            readOnly disabled
                            {...register('folConduf', {
                                required: true,
                                minLength: 1
                            })}
                        />
                    </div>




                    <div>
                        <label htmlFor="queja" className="w-full xl:w-36">Tipo de Queja</label>

                        <select
                            id="queja"
                            value={state.reuneStateG.reuneData.queja}
                            className="w-full xl:w-72"
                            {...register('queja', {
                                required: true
                            })}
                        >
                            <option value="consulta">Consulta</option>
                            <option value="reclamo">Reclamo</option>
                            <option value="aclaracion">Aclaración</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="edoReg" className="w-full xl:w-36">Estado de registro</label>

                        <select
                            id="edoReg"
                            className="w-full xl:w-72"
                            value={state.reuneStateG.reuneData.edoReg}
                            {...register('edoReg', {
                                required: true
                            })}
                        >
                            <option value="ninguno">Ninguno</option>
                            <option value="pendiente">Pendiente</option>
                            <option value="concluido">Concluido</option>
                        </select>
                    </div>




                    <div>
                        <label htmlFor="nvlAtn" className="w-full xl:w-36">Nivel de Atención:</label>

                        <select
                            id="nvlAtn"
                            className="w-full xl:w-72"
                            value={state.reuneStateG.reuneData.nvlAtn}
                            {...register('nvlAtn', {
                                required: 'Seleccionar nivel de atención'
                            })}
                        >
                            <option value="1">Vía Eletrónica</option>
                            <option value="2">Vía Teléfonica</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="medioCmn" className="w-full xl:w-48">Medio de Comunicación:</label>

                        <select
                            id="medioCmn"
                            className="w-full xl:w-60"
                            value={state.reuneStateG.reuneData.medioCmn}
                            {...register('medioCmn', {
                                required: true
                            })}
                        >
                            <option value="email">Correo Electrónico</option>
                            <option value="web">Página web</option>
                        </select>
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

                    <input
                        id="causa"
                        type="text"
                        className="basis-full xl:basis-4/5"
                        value={state.reuneStateG.reuneData.causa}
                        readOnly disabled
                        {...register('causa', {
                            required: true,
                            minLength: 1
                        })}
                    />
                </div>

            </fieldset>

            <fieldset>

                <legend>Datos Generales</legend>

                <div className={styles.gridColumns}>

                    <section className="flex flex-col items-center xl:items-start justify-center gap-y-10 gap-x-1">

                        {isRever && (
                            <span className='flex flex-col items-center xl:items-start justify-center gap-y-10 gap-x-1'>

                                <div>
                                    <label htmlFor="rever" className="w-full xl:w-16">Reversa:</label>
                                    <input
                                        id="rever"
                                        type="checkbox"
                                        value="true"
                                        checked={state.reuneStateG.reuneData.rever === true}
                                        className='w-full xl:w-4'
                                        {...register('rever')}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="recl" className="w-full xl:w-96">¿El reclamo o Aclaración es de objeto monetario?</label>
                                    <input
                                        id="recl"
                                        type="checkbox"
                                        value='true'
                                        checked={state.reuneStateG.reuneData.recl === true}
                                        className='w-full xl:w-4'
                                        {...register('recl')}
                                    />
                                </div>
                            </span>
                        )}

                        <div>
                            <hr className="pb-4 w-44 xl:w-96 " />
                            <label htmlFor="exg" className="w-full xl:w-40">Si es del extranjero:</label>
                            <input
                                id="exg"
                                type="checkbox"
                                value='true'
                                checked={state.reuneStateG.reuneData.exg === true}
                                className='w-full xl:w-4'
                                {...register('exg')}
                            />
                        </div>

                    </section>

                    <section className={clsx(styles.flexColumns, 'mt-16 xl:mt-0')}>

                        <div className="basis-full">
                            <label htmlFor="fecNot" className="w-full xl:w-2/5">Fecha de Notificación:</label>
                            <input
                                id="fecNot"
                                type="date"
                                className="w-full xl:w-3/5"
                                {...register('fecNot', {
                                    required: true
                                })}
                            />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="fecReso" className="w-full xl:w-2/5">Fecha de Resolución:</label>
                            <input
                                id="fecReso"
                                type="date"
                                className="w-full xl:w-3/5"
                                {...register('fecReso', {
                                    required: true
                                })}
                            />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="typeRe" className="w-full xl:w-2/5">Tipo de Resolución:</label>
                            <select
                                id="typeRe"
                                className="w-full xl:w-3/5"
                                value={state.reuneStateG.reuneData.typeRe}
                                {...register('typeRe', {
                                    required: true
                                })}
                            >
                                <option value="1">Demandar</option>
                                <option value="2">Acusarlo con tu mamá</option>
                            </select>
                        </div>
                    </section>
                </div>

            </fieldset>

            <fieldset >

                <legend>Datos del Reclamo por Abono</legend>

                <div className={styles.flexColumns}>

                    <div className="basis-full xl:basis-72">
                        <label htmlFor="montRe" className="w-full xl:w-1/2">Monto Reclamado:</label>
                        <input
                            id="montRe"
                            type="number"
                            className="w-full xl:w-1/2"
                            value={state.reuneStateG.reuneData.montRe}
                            {...register('montRe', {
                                required: true,
                                minLength: 0
                            })}
                        />
                    </div>

                    <div className="basis-full xl:basis-72">
                        <label htmlFor="fecAbo" className="w-full xl:w-32">Fecha de Abono:</label>
                        <input
                            id="fecAbo"
                            type="date"
                            className="w-full xl:w-1/2"
                            {...register('fecAbo', {
                                required: true
                            })}
                        />
                    </div>

                    <div className="basis-full xl:basis-72">
                        <label htmlFor="montAbo" className="w-full xl:w-32">Monto Abonado:</label>
                        <input
                            type="number"
                            id="montAbo"
                            className="w-full xl:w-1/2"
                            value={state.reuneStateG.reuneData.montAbo}
                            {...register('montAbo', {
                                required: true,
                                minLength: 0
                            })}
                        />
                    </div>
                </div>

            </fieldset>

            <FragmentInstitucion register={register} />

            <input
                type="submit"
                value="Guardar"
                className="mt-9 uppercase"
            />

        </form>

    )

}
