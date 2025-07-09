import clsx from 'clsx';
import styles from '@/css/Form.module.css';
import { useGlobal } from '@/hooks/useGlobal';
import { Controller, useForm } from 'react-hook-form';
import { searchCat, SearchCategory } from '@/types/index';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

import ErrorMessage from '../ui/ErrorMessage';
import { reuneForm } from '@/types/zod';
import SearchButton from '../ui/SearchButton';

export default function SharedForm() {

    const { state, dispatch } = useGlobal()
    const { control } = useForm<reuneForm>()


    return (
        <>
            <fieldset className='flex justify-between items-center flex-wrap gap-10 md:gap-12'>

                <div className={clsx(styles.divForm, 'basis-full xl:basis-1/2')}>

                    <label htmlFor="NUM_ENTE" className="w-32">Número del ente:</label>

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
                        name='NUM_ENTE'
                        control={control}// Este es el objeto de control que React Hook Form necesita para gestionar el campo
                        rules={{
                            required: 'Seleccione N° de Ente',
                            min: 1
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-1/2">
                                <input
                                    id="NUM_ENTE"
                                    type="number"
                                    readOnly

                                    {...field} // Propiedades del input controlado por React Hook Form
                                    onChange={(e) => {
                                        field.onChange(e)//Actualiza hook con el nuevo valor
                                        dispatch({ type: 'client-update', payload: { field: 'NUM_ENTE', value: e.target.value } })
                                    }}
                                />
                                {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                            </div>
                        )}
                    />
                </div>

                <div className={clsx(styles.divForm, 'basis-full xl:basis-2/5')}>

                    <label htmlFor="CVE_SUCUR" className="w-16">Sucursal:</label>

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
                        name='CVE_SUCUR'
                        control={control}
                        rules={{
                            required: 'Seleccione una sucursal',
                            min: 1
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-3/5">
                                <input
                                    id="CVE_SUCUR"
                                    type="number"
                                    readOnly

                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'CVE_SUCUR', value: e.target.value } })
                                    }}
                                />
                                {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                            </div>
                        )}
                    />

                </div>

            </fieldset>

            <fieldset>

                <legend>Datos de la persona</legend>

                <div className="w-full mb-16">

                    <label htmlFor="NOM_CoEnt" className="w-full xl:w-36">Nombre del Cliente:</label>

                    <Controller
                        name='NOM_CoEnt'
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
                                    id="NOM_CoEnt"
                                    type="text"
                                    readOnly

                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'client-update', payload: { field: 'NOM_CoEnt', value: e.target.value } })
                                    }}
                                />
                                {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                            </span>
                        )}
                    />
                </div>

                <section className={clsx(styles.gridColumns3, 'gap-y-16 gap-x-2')}>

                    <div className="xl:flex">
                        <label htmlFor="TIP_Corre" className="w-full xl:w-16">Correo:</label>

                        <Controller
                            name='TIP_Corre'
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
                                        id="TIP_Corre"
                                        type="email"
                                        {...field}
                                        readOnly

                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'TIP_Corre', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className="xl:flex">

                        <label htmlFor="NUM_Tlfno" className="w-full xl:w-20">Teléfono:</label>

                        <Controller
                            name='NUM_Tlfno'
                            control={control}
                            rules={{
                                required: 'El teléfono es obligatorio',
                                minLength: 5
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <input
                                        id="NUM_Tlfno"
                                        type="tel"
                                        readOnly

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'NUM_Tlfno', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className="flex gap-3 items-center xl:items-start justify-center">
                        <label htmlFor="CVE_SEXO" className="xl:w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <label htmlFor="femenino">M</label>

                            <Controller
                                name='CVE_SEXO'
                                control={control}
                                rules={{ required: 'Seleccione un género' }}
                                render={({ field }) => (

                                    <input
                                        id="femenino"
                                        type="radio"
                                        readOnly

                                        {...field}
                                        value='femenino'
                                        checked={field.value === 'femenino'}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'CVE_SEXO', value: e.target.value } })
                                        }}

                                    />

                                )}
                            />
                        </div>

                        <div className="flex gap-1">
                            <label htmlFor="masculino">H</label>

                            <Controller
                                name='CVE_SEXO'
                                control={control}

                                render={({ field }) => (
                                    <input
                                        id="masculino"
                                        type="radio"
                                        readOnly

                                        {...field}
                                        value='masculino'
                                        checked={field.value === 'masculino'}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'CVE_SEXO', value: e.target.value } })
                                        }}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div className="xl:flex">
                        <label htmlFor="TIP_ENTE" className="w-full xl:w-32">Tipo de Persona:</label>

                        <Controller
                            name='TIP_ENTE'
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-40">
                                    <select
                                        id="TIP_ENTE"
                                        disabled

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'TIP_ENTE', value: e.target.value } })
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
                                        <option value="queja">Queja</option>
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

        </>
    )
}
