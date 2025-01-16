import './form.module.css';
import FragmentComunicacion from './FragmentComunicacion';
import FragmentInstitucion from './FragmentInstitucion';
import SearchButton from '../SearchButton';
import { searchCat, SearchCategory } from '../../types';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useModal } from '../../hooks/useModal';
import { useForm } from 'react-hook-form';

export default function ReuneForm() {

    //Dispatch.- función especial que permite ejecutar acciones cuando se le llame   
    const { state, dispatch } = useModal()
    const { register, handleSubmit } = useForm()

    const reuneSubmit = (data: any) => {
        console.log(data)
    }

    return (

        <form
            onSubmit={handleSubmit(reuneSubmit)}
            autoComplete="on"
            data-formulario>

            <fieldset className="flex justify-between items-center flex-wrap gap-10 md:gap-12 p-6 lg:p-12">

                <div className="basis-full lg:basis-1/2 flex gap-1 flex-wrap justify-center lg:justify-start items-center">

                    <label htmlFor="ente" className="w-32 text-center lg:text-left">Número del ente:</label>

                    <div
                        className='relative'
                        onClick={(e) => dispatch({ type: 'open-modal', payload: { event: e, category: SearchCategory.Cliente } })}
                    >
                        <button
                            className="bg-teal-400 hover:bg-teal-500 p-2 rounded-md shadow ">
                            <MagnifyingGlassIcon className="w-4 text-white" />
                        </button>

                        {SearchCategory.Cliente === state.modalState.id && state.modalState.modal && (
                            <SearchButton label={searchCat.cliente} />
                        )}

                    </div>

                    <input
                        id="ente"
                        type="number"
                        className="w-full lg:w-1/2"
                        {...register('ente', {
                            required: 'Seleccione N° de Ente',
                            minLength: 1
                        })}
                    />

                </div>

                <div className="basis-full lg:basis-2/5 flex gap-1 flex-wrap justify-center lg:justify-start items-center">
                    <label htmlFor="sucur" className="w-16 text-center lg:text-left">Sucursal:</label>

                    <div
                        className='relative'
                        onClick={(e) => dispatch({ type: 'open-modal', payload: { event: e, category: SearchCategory.Sucursal } })}
                    >
                        <button
                            className="bg-teal-400 hover:bg-teal-500 p-2 rounded-md shadow ">
                            <MagnifyingGlassIcon className="w-4 text-white" />
                        </button>

                        {SearchCategory.Sucursal === state.modalState.id && state.modalState.modal && (
                            <SearchButton label={searchCat.sucursal} />
                        )}

                    </div>

                    <input
                        id="sucur"
                        type="number"
                        className="w-full lg:w-3/5"
                        {...register('sucur', {
                            required: 'Seleccione una sucursal'
                        })}
                    />
                </div>

            </fieldset>

            <fieldset className='p-6 lg:p-12'>

                <legend className='w-full md:w-1/2 xl:px-4'>Datos de la persona</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-full">
                        <label htmlFor="cliente" className="w-full lg:w-36 text-center lg:text-left">Nombre del Cliente:</label>
                        <input
                            id="cliente"
                            type="text"
                            className="w-full lg:w-5/6"
                            disabled
                            {...register('cliente', {
                                required: 'El nombre es obligatorio.'
                            })}
                        />
                    </div>

                    <div className="basis-full lg:basis-96">
                        <label htmlFor="email" className="w-full lg:w-16 text-center lg:text-left">Correo:</label>
                        <input
                            id="email"
                            type="email"
                            disabled
                            className="w-full lg:w-80"
                            {...register('email', {
                                required: 'El correo es obligatorio',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Email No Válido'
                                }
                            })}
                        />
                    </div>

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="tel" className="w-full lg:w-20 text-center xl:text-left">Teléfono:</label>
                        <input
                            id="tel"
                            type="tel"
                            disabled
                            className="w-full lg:w-3/5"
                            {...register('tel', {
                                required: 'El teléfono es obligatorio',
                                minLength: 5
                            })}
                        />
                    </div>

                    <div className="basis-full lg:basis-1/5">
                        <label htmlFor="age" className="w-full lg:w-12 text-center lg:text-left">Edad:</label>
                        <input
                            id="age"
                            type="number"
                            className="w-full lg:w-1/2"
                            disabled
                            {...register('age', {
                                required: 'Agregar una edad',
                                minLength: 18
                            })}
                        />
                    </div>

                    <div className="basis-full lg:basis-96 flex gap-3 items-center justify-center lg:justify-start">
                        <label htmlFor="sex" className="lg:w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <input
                                id="m"
                                type="radio"
                                {...register('sex')}
                                disabled
                            />
                            <label htmlFor="m">M</label>
                        </div>
                        <div className="flex gap-1">
                            <input
                                id="h"
                                type="radio"
                                disabled
                                {...register('sex')}
                            />
                            <label htmlFor="h">H</label>
                        </div>
                    </div>

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="typePer" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Tipo de Persona:</label>

                        <select
                            id="typePer"
                            disabled
                            className="w-full lg:w-2/5 text-center lg:text-left"
                            {...register('typePer', {
                                required: true
                            })}
                        >
                            <option value="">Moral</option>
                            <option value="">Física</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-1/5">
                        <label htmlFor="pori" className="w-full lg:w-12 text-center lg:text-left">PORI:</label>
                        <input
                            id="pori"
                            type="checkbox"
                            className='lg:w-12 w-full'
                            {...register('pori')}
                        />
                    </div>                

                </div>
            </fieldset>

            <FragmentComunicacion />

            <div className="flex flex-col lg:flex-row gap-2 justify-between items-start mb-8">

                <fieldset className="p-6 lg:p-12 lg:basis-1/2">

                    <legend className='w-full lg:w-11/12 lg:px-4'>Datos Generales</legend>

                    <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

                        <div className="basis-full">
                            <label htmlFor="fecNot" className="w-full lg:w-2/5 text-center lg:text-left mb-2">Fecha de Notificación:</label>
                            <input
                                id="fecNot"
                                type="date"
                                className="w-full lg:w-3/5 text-center"
                                {...register('fecNot', {
                                    required: true
                                })}
                            />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="fecReso" className="w-full lg:w-2/5 text-center lg:text-left mb-2">Fecha de Resolución:</label>
                            <input
                                id="fecReso"
                                type="date"
                                className="w-full lg:w-3/5 text-center"
                                {...register('fecReso', {
                                    required: true
                                })}
                            />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="typeRe" className="w-full lg:w-2/5 text-center lg:text-left mb-2">Tipo de Resolución:</label>
                            <select
                                id="typeRe"
                                className="w-full lg:w-3/5 text-center"
                                {...register('typeRe', {
                                    required: true
                                })}
                            >
                                <option value=""></option>
                            </select>
                        </div>

                    </div>
                </fieldset>

                <fieldset className="p-6 lg:p-12 lg:basis-1/2">

                    <legend className="w-full lg:w-11/12 lg:px-4">Datos del Reclamo por Abono</legend>

                    <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

                        <div className="basis-full">
                            <label htmlFor="montRe" className="w-full lg:w-1/2 text-center lg:text-left mb-2">Monto Reclamado:</label>
                            <input
                                id="montRe"
                                type="number"
                                className="w-full lg:w-1/2 text-center"
                                {...register('montRe', {
                                    required: true,
                                    minLength: 0
                                })}
                            />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="fecAbo" className="w-full lg:w-1/2 text-center lg:text-left mb-2">Fecha de Abono:</label>
                            <input
                                id="fecAbo"
                                type="date"
                                className="w-full lg:w-1/2 text-center"
                                {...register('fecAbo', {
                                    required: true
                                })}
                            />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="montAbo" className="w-full lg:w-1/2 text-center lg:text-left mb-2">Monto Abonado:</label>
                            <input
                                type="number"

                                id="montAbo"
                                className="w-full lg:w-1/2 text-center"
                                {...register('montAbo', {
                                    required: true,
                                    minLength: 0
                                })}
                            />
                        </div>
                    </div>
                </fieldset>

            </div>

            <FragmentInstitucion />

            <input
                type="submit"
                value="Guardar"
                className="bg-teal-900 rounded-3xl block w-full mt-9 p-3 cursor-pointer uppercase text-white hover:bg-teal-950"
            />

        </form>

    )

}
