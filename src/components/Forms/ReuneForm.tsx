
import './form.module.css';
import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

import SearchButton from '../SearchButton';
import FragmentComunicacion from './FragmentComunicacion';
import FragmentInstitucion from './FragmentInstitucion';

import { useGlobal } from '../../hooks/useGlobal';
import { reuneDataType, searchCat, SearchCategory } from '../../types';
import { dataFormatted } from '../../hooks/dataFormat';
import { useEffect } from 'react';
import clsx from 'clsx';


export default function ReuneForm() {

    //Dispatch.- función especial que permite ejecutar acciones cuando se le llame   
    const { state, dispatch } = useGlobal()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<reuneDataType>({
        //defaultValues es clave para cargar valores iniciales en el formulario.
        defaultValues: state.reuneStateG.reuneData
    })

    useEffect(() => {
        //key es de tipo string (derivado de Object.entries)
        Object.entries(state.reuneStateG.reuneData).forEach(([key, value]) => {
            setValue(key as keyof reuneDataType, value)
        })
    }, [state.reuneStateG.reuneData, setValue])

    const reuneSubmit = (data: reuneDataType) => {
        console.log(data)
        //const newClient = dispatch({ type: 'client-add', payload: { data } })
    }

    const handleError = () => {
        console.log(errors)
    }
    const { numberFormat } = dataFormatted()

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

                    <input
                        id="ente"
                        type="number"
                        value={state.reuneStateG.reuneData.ente}
                        className="w-full xl:w-1/2"
                        {...register('ente', {
                            required: 'Seleccione N° de Ente',
                            minLength: 1
                        })}
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

                    <input
                        id="sucursal"
                        type="number"
                        value={state.reuneStateG.reuneData.sucursal}
                        className="w-full xl:w-3/5"
                        {...register('sucursal', {
                            required: 'Seleccione una sucursal'
                        })}
                    />
                </div>

            </fieldset>

            <fieldset>

                <legend>Datos de la persona</legend>

                <div className="flex justify-between flex-wrap gap-y-16 gap-x-2">

                    <div className="basis-full">

                        <label htmlFor="cliente" className="w-full xl:w-36">Nombre del Cliente:</label>

                        <input
                            id="cliente"
                            type="text"
                            value={state.reuneStateG.reuneData.cliente}
                            className="w-full xl:w-5/6"
                            disabled
                            {...register('cliente', {
                                required: 'El nombre es obligatorio.'
                            })}
                        />

                    </div>

                    <div className="basis-full xl:basis-96">
                        <label htmlFor="email" className="w-full xl:w-16">Correo:</label>
                        <input
                            id="email"
                            type="email"
                            disabled
                            value={state.reuneStateG.reuneData.email}
                            className="w-full xl:w-80"
                            {...register('email', {
                                required: 'El correo es obligatorio',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Email No Válido'
                                }
                            })}
                        />
                    </div>

                    <div className="basis-full xl:basis-56">
                        <label htmlFor="tel" className="w-full xl:w-20">Teléfono:</label>
                        <input
                            id="tel"
                            type="tel"
                            disabled
                            value={numberFormat(state.reuneStateG.reuneData.telefono)}
                            className="w-full xl:w-3/5"
                            {...register('telefono', {
                                required: 'El teléfono es obligatorio',
                                minLength: 5
                            })}
                        />
                    </div>

                    <div className="basis-full xl:basis-1/5">
                        <label htmlFor="age" className="w-full xl:w-12">Edad:</label>
                        <input
                            id="age"
                            type="number"
                            value={state.reuneStateG.reuneData.age}
                            className="w-full xl:w-1/2"
                            disabled
                            {...register('age', {
                                required: 'Agregar una edad',
                                min: 18
                            })}
                        />
                    </div>

                    <div className="basis-full xl:basis-5/12">
                        <label htmlFor="typePer" className="w-full xl:w-36">Tipo de Persona:</label>

                        <select
                            id="typePer"
                            disabled
                            value={state.reuneStateG.reuneData.typePer}
                            className="w-full xl:w-2/5"
                            {...register('typePer', {
                                required: true
                            })}
                        >
                            <option value='moral'>Moral</option>
                            <option value="fisica">Física</option>
                        </select>
                    </div>

                    <div className="basis-full xl:basis-56 flex gap-3 items-center justify-center xl:justify-start">
                        <label htmlFor="genero" className="xl:w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <input
                                id="genero"
                                type="radio"
                                {...register('genero')}
                                value='femenino'
                                checked={state.reuneStateG.reuneData.genero === 'femenino'}
                                disabled
                            />
                            <label htmlFor="f">M</label>
                        </div>

                        <div className="flex gap-1">
                            <input
                                id="m"
                                type="radio"
                                disabled
                                value='masculino'
                                checked={state.reuneStateG.reuneData.genero === 'masculino'}
                                {...register('genero')}
                            />
                            <label htmlFor="m">H</label>
                        </div>
                    </div>

                    <div className="basis-full xl:basis-1/5">
                        <label htmlFor="pori" className="w-full xl:w-12">PORI:</label>
                        <input
                            id="pori"
                            type="checkbox"
                            value='true'
                            className='xl:w-12 w-full'
                            checked={state.reuneStateG.reuneData.pori === true}
                            {...register('pori')}
                        />
                    </div>

                </div>

            </fieldset>

            <FragmentComunicacion register={register} />

            <FragmentInstitucion register={register} />

            <input
                type="submit"
                value="Guardar"
                className="bg-teal-900 rounded-3xl block w-full mt-9 p-3 cursor-pointer uppercase text-white hover:bg-teal-950"
            />

        </form>

    )

}
