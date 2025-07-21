import clsx from 'clsx';
import { useState } from 'react';
import styles from '@/css/Form.module.css';
import { useGlobal } from '@/hooks/useGlobal';
import { Control, Controller } from 'react-hook-form';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { datacausaForm, dataClientForm, dataDirectionForm, redecoForm, reuneForm } from '@/types/zod';
import { causaData, searchCat, SearchCategory, sucursalesData, usuariosData } from '@/types/index';

import SearchModal from '../ui/SearchModal';
import ErrorMessage from '../ui/ErrorMessage';

export type SharedFormProps = {
    control: Control<reuneForm, redecoForm>
}

export default function SharedForm({ control }: SharedFormProps) {

    const { state, dispatch } = useGlobal()
    const [causa] = useState<datacausaForm[]>(causaData)
    const [clients] = useState<dataClientForm[]>(usuariosData)
    const [sucurs] = useState<dataDirectionForm[]>(sucursalesData)

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
                            <SearchModal
                                data={clients}
                                label={searchCat.cliente}
                            />
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
                                        dispatch({ type: 'form-update', payload: { field: 'NUM_ENTE', value: e.target.value } })
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
                            <SearchModal
                                data={sucurs}
                                label={searchCat.sucursal}
                            />
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
                                        dispatch({ type: 'form-update', payload: { field: 'CVE_SUCUR', value: e.target.value } })
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
                                        dispatch({ type: 'form-update', payload: { field: 'NOM_CoEnt', value: e.target.value } })
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
                                            dispatch({ type: 'form-update', payload: { field: 'TIP_Corre', value: e.target.value } })
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
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_Tlfno', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className="flex gap-3 items-center xl:items-start justify-center">
                        <label className="xl:w-12">Sexo:</label>

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

                                        {...field}
                                        value='femenino'
                                        checked={field.value === 'femenino'}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'CVE_SEXO', value: e.target.value } })
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

                                        {...field}
                                        value='masculino'
                                        checked={field.value === 'masculino'}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'CVE_SEXO', value: e.target.value } })
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
                                            dispatch({ type: 'form-update', payload: { field: 'TIP_ENTE', value: e.target.value } })
                                        }}
                                    >
                                        <option value='moral'>Moral</option>
                                        <option value="fisica">Física</option>
                                    </select>
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />

                    </div>

                    <div className="xl:flex">
                        <label htmlFor="NUM_EDAD" className="w-full xl:w-12">Edad:</label>
                        <Controller
                            name='NUM_EDAD'
                            control={control}
                            rules={{
                                required: 'Agregar una edad',
                                min: 18
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <input
                                        id="NUM_EDAD"
                                        type="number"
                                        readOnly

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_EDAD', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />

                    </div>

                    <div className="flex flex-wrap gap-3 items-start justify-center">

                        <label htmlFor="BAN_PORI" className="w-full xl:w-12">PORI:</label>

                        <Controller
                            name='BAN_PORI'
                            control={control}
                            render={({ field, fieldState: { error } }) => (

                                <div className="w-full xl:w-12">
                                    <input
                                        id="BAN_PORI"
                                        type="checkbox"

                                        onChange={(e) => {
                                            field.onChange(e.target.checked)
                                            dispatch({
                                                type: 'form-update',
                                                payload: { field: 'BAN_PORI', value: e.target.checked }
                                            })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
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

                        <label htmlFor="CVE_TRIM" className="w-full xl:w-10">Mes:</label>

                        <Controller
                            name='CVE_TRIM'
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
                                        id="CVE_TRIM"
                                        type="number"
                                        readOnly

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'CVE_TRIM', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex gap-1'>
                        <label htmlFor="NUM_PRODU" className="w-full xl:w-40">Número de Producto:</label>

                        <Controller
                            name='NUM_PRODU'
                            control={control}
                            rules={{
                                required: "Elija un producto",
                                minLength: {
                                    value: 0,
                                    message: 'N° de Producto No Válido.'
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-28">
                                    <input
                                        id="NUM_PRODU"
                                        type="text"
                                        readOnly

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_PRODU', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />

                        <div className="w-full xl:w-40">
                            <select id="nProdS">
                                <option value="1">Crédito Simple Auto</option>
                                <option value="2">Crédito Simple CN</option>
                            </select>
                        </div>

                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="FEC_REGIS" className="w-full xl:w-36">Fecha de Registro:</label>

                        <Controller
                            name='FEC_REGIS'
                            control={control}
                            rules={{
                                required: 'Seleccionar Fecha de Registro.'
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <input
                                        id="FEC_REGIS"
                                        type="date"
                                        value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'FEC_REGIS', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="FEC_ATEN" className="w-full xl:w-36">Fecha de Atención</label>

                        <Controller
                            name='FEC_ATEN'
                            control={control}
                            rules={{
                                required: 'Seleccionar Fecha de Atención.'
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <input
                                        id="FEC_ATEN"
                                        type="date"
                                        value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}

                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({
                                                type: 'form-update',
                                                payload: { field: 'FEC_ATEN', value: e.target.value }
                                            })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />

                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="NUM_FOLIO" className="w-full xl:w-36">Folio de Atención</label>

                        <Controller
                            name='NUM_FOLIO'
                            control={control}
                            rules={{
                                required: true,
                                minLength: 1
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <input
                                        id="NUM_FOLIO"
                                        type="text"
                                        readOnly

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_FOLIO', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="NUM_FOCON" className="w-full xl:w-36">Folio condusef:</label>

                        <Controller
                            name='NUM_FOCON'
                            control={control}
                            rules={{
                                required: true,
                                minLength: 1
                            }}

                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <input
                                        id="NUM_FOCON"
                                        type="text"
                                        readOnly

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_FOCON', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    {/*Cambiar a numero*/}
                    <div className='xl:flex'>
                        <label htmlFor="CVE_Queja" className="w-full xl:w-36">Tipo de Queja</label>

                        <Controller
                            name='CVE_Queja'
                            control={control}
                            rules={{
                                required: 'Seleccione un tipo de queja'
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <select
                                        id="CVE_Queja"

                                        {...field}
                                        onChange={(e) => {
                                            const numericValue = Number(e.target.value)
                                            field.onChange(numericValue)
                                            dispatch({
                                                type: 'form-update',
                                                payload: { field: 'CVE_Queja', value: numericValue }
                                            })
                                        }}
                                    >
                                        <option value={1}>Consulta</option>
                                        <option value={2}>Reclamo</option>
                                        <option value={3}>Aclaración</option>
                                        <option value={4}>Queja</option>

                                    </select>
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="CVE_EDOCP" className="w-full xl:w-36">Estado de registro</label>

                        <Controller
                            name='CVE_EDOCP'
                            control={control}
                            rules={{
                                required: 'Seleccione un estado de registro'
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <select id="CVE_EDOCP"

                                        {...field}
                                        onChange={(e) => {
                                            const numericValue = Number(e.target.value)
                                            field.onChange(numericValue)
                                            dispatch({ type: 'form-update', payload: { field: 'CVE_EDOCP', value: numericValue } })
                                        }}
                                    >
                                        <option value={1}>Pendiente</option>
                                        <option value={2}>Concluido</option>

                                    </select>
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="CVE_NIVAT" className="w-full xl:w-36">Nivel de Atención:</label>

                        <Controller
                            name='CVE_NIVAT'
                            control={control}
                            rules={{
                                required: 'Seleccionar nivel de atención'
                            }}

                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <select
                                        id="CVE_NIVAT"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'CVE_NIVAT', value: e.target.value } })
                                        }}
                                    >
                                        <option value={1}>Vía Eletrónica</option>
                                        <option value={2}>Vía Teléfonica</option>

                                    </select>
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex'>
                        <label htmlFor="NUM_MEDRC" className="w-full xl:w-48">Medio de Comunicación:</label>

                        <Controller
                            name='NUM_MEDRC'
                            control={control}
                            rules={{
                                required: 'Seleccione un medio de comunicación'
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-60">
                                    <select
                                        id="NUM_MEDRC"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_MEDRC', value: e.target.value } })
                                        }}
                                    >
                                        <option value={1}>Correo Electrónico</option>
                                        <option value={2}>Página web</option>

                                    </select>
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                </section>

                <div className={clsx(styles.divForm, 'pt-16')}>

                    <label htmlFor="TIP_CAUSA" className="w-12">Causa:</label>

                    <div
                        className='relative'
                        onClick={(e) => dispatch({ type: 'modal-open', payload: { event: e, category: SearchCategory.Causa } })}
                    >
                        <button
                            className={styles.buttonSearch}>
                            <MagnifyingGlassIcon className={styles.iconSearch} />
                        </button>

                        {SearchCategory.Causa === state.modalStateG.modalState.id && state.modalStateG.modalState.modal && (
                            <SearchModal
                                data={causa}
                                label={searchCat.causa}
                            />
                        )}

                    </div>

                    <Controller
                        name='TIP_CAUSA'
                        control={control}
                        rules={{
                            required: true,
                            minLength: 1
                        }}

                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full xl:w-4/5">
                                <input
                                    id="TIP_CAUSA"
                                    type="text"
                                    readOnly

                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e)
                                        dispatch({ type: 'form-update', payload: { field: 'TIP_CAUSA', value: e.target.value } })
                                    }}
                                />
                                {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                            </div>
                        )}
                    />
                </div>

            </fieldset>

        </>
    )
}
