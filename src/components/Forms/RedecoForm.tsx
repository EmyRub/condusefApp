import './form.module.css';
import styles from './form.module.css';
import { Controller, useForm } from "react-hook-form";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

import SearchButton from "../SearchButton";
import FragmentComunicacion from "./FragmentComunicacion";
import FragmentInstitucion from './FragmentInstitucion';

import { useGlobal } from "../../hooks/useGlobal";
import { searchCat, SearchCategory } from "../../types";
import clsx from 'clsx';


export default function RedecoForm() {

    const { state, dispatch } = useGlobal()
    const { register, handleSubmit, control } = useForm()

    const redeSubmit = () => { }

    return (

        <form
            onSubmit={handleSubmit(redeSubmit)}
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

            {
                /**
                 * <FragmentComunicacion register={register} />
                 *    <FragmentInstitucion register={register} />
                 */
            }

            <input
                type="submit"
                value="Guardar"
                className="bg-teal-900 rounded-3xl block w-full mt-9 p-3 cursor-pointer uppercase text-white hover:bg-teal-950"
            />

        </form>
    )
}
