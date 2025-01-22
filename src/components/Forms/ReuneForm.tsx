import './form.module.css';
import FragmentComunicacion from './FragmentComunicacion';
import FragmentInstitucion from './FragmentInstitucion';
import SearchButton from '../SearchButton';
import { reuneData, searchCat, SearchCategory } from '../../types';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useGlobal } from '../../hooks/useGlobal';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function ReuneForm() {

    //Dispatch.- función especial que permite ejecutar acciones cuando se le llame   
    const { state, dispatch } = useGlobal()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const reuneSubmit = (data: any) => {
        console.log(data)
    }

    const handleError = () => {

   

    }

    const [reuneData, setReuneData] = useState<reuneData>({
        ente: 0,
        sucursal: 0,
        cliente: 'Perez',
        email: 'prueba@grudis.com',
        telefono: 77712458,
        age: 18,
        sexo: '',
        typePer: '',
        pori: 0,
        mes: 0,
        fecReg: '',
        fecAtn: '',
        folAtn: '',
        folConduf: 0,
        queja: '',
        edoReg: '',
        nProd: 0,
        nProdS: '',
        nvlAtn: '',
        medioCmn: '',
        causa: '',
        rever: 0,
        recl: 0,
        exg: 0,
        fecNot: '',
        fecReso: '',
        typeRe: '',
        montRe: 0,
        fecAbo: '',
        montAbo: 0,
        inst: '',
        sector: '',
        cp: '',
        edo: '',
        muni: '',
        loc: '',
        tyLoc: '',
        col: ''
    })


    return (

        <form
            onSubmit={handleSubmit(reuneSubmit, handleError)}
            autoComplete="on"
            data-formulario>

            <fieldset className="flex justify-between items-center flex-wrap gap-10 md:gap-12 p-6 lg:p-12">

                <div className="basis-full lg:basis-1/2 flex gap-1 flex-wrap justify-center lg:justify-start items-center">

                    <label htmlFor="ente" className="w-32 text-center lg:text-left">Número del ente:</label>

                    <div
                        className='relative'
                        onClick={(e) => dispatch({ type: 'modal-open', payload: { event: e, category: SearchCategory.Cliente } })}
                    >
                        <button
                            className="bg-teal-400 hover:bg-teal-500 p-2 rounded-md shadow ">
                            <MagnifyingGlassIcon className="w-4 text-white" />
                        </button>

                        {SearchCategory.Cliente === state.modalStateG.modalState.id && state.modalStateG.modalState.modal && (
                            <SearchButton label={searchCat.cliente} />
                        )}

                    </div>

                    <input
                        id="ente"
                        type="number"
                        value={reuneData.ente}
                        className="w-full text-center lg:w-1/2"
                        {...register('ente', {
                            required: 'Seleccione N° de Ente',
                            minLength: 1
                        })}
                    />

                </div>

                <div className="basis-full lg:basis-2/5 flex gap-1 flex-wrap justify-center lg:justify-start items-center">

                    <label htmlFor="sucursal" className="w-16 text-center lg:text-left">Sucursal:</label>

                    <div
                        className='relative'
                        onClick={(e) => dispatch({ type: 'modal-open', payload: { event: e, category: SearchCategory.Sucursal } })}
                    >
                        <button
                            className="bg-teal-400 hover:bg-teal-500 p-2 rounded-md shadow ">
                            <MagnifyingGlassIcon className="w-4 text-white" />
                        </button>

                        {SearchCategory.Sucursal === state.modalStateG.modalState.id && state.modalStateG.modalState.modal && (
                            <SearchButton label={searchCat.sucursal} />
                        )}

                    </div>

                    <input
                        id="sucursal"
                        type="number"
                        value={reuneData.sucursal}
                        className="w-full text-center lg:w-3/5"
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
                        <label htmlFor="cliente" className="w-full xl:w-36 text-center xl:text-left">Nombre del Cliente:</label>
                        <input
                            id="cliente"
                            type="text"
                            value={reuneData.cliente}
                            className="w-full xl:w-5/6 text-center"
                            disabled
                            {...register('cliente', {
                                required: 'El nombre es obligatorio.'
                            })}
                        />
                    </div>

                    <div className="basis-full xl:basis-96">
                        <label htmlFor="email" className="w-full xl:w-16 text-center xl:text-left">Correo:</label>
                        <input
                            id="email"
                            type="email"
                            disabled
                            value={reuneData.email}
                            className="w-full xl:w-80 text-center"
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
                        <label htmlFor="tel" className="w-full xl:w-20 text-center xl:text-left">Teléfono:</label>
                        <input
                            id="tel"
                            type="tel"
                            disabled
                            value={reuneData.telefono}
                            className="w-full xl:w-3/5 text-center"
                            {...register('tel', {
                                required: 'El teléfono es obligatorio',
                                minLength: 5
                            })}
                        />
                    </div>

                    <div className="basis-full xl:basis-1/5">
                        <label htmlFor="age" className="w-full xl:w-12 text-center xl:text-left">Edad:</label>
                        <input
                            id="age"
                            type="number"
                            value={reuneData.age}
                            className="w-full xl:w-1/2 text-center"
                            disabled
                            {...register('age', {
                                required: 'Agregar una edad',
                                minLength: 18
                            })}
                        />
                    </div>

                    <div className="basis-full xl:basis-56 flex gap-3 items-center justify-center xl:justify-start">
                        <label htmlFor="sex" className="xl:w-12">Sexo:</label>

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

                    <div className="basis-full xl:basis-5/12">
                        <label htmlFor="typePer" className="w-full xl:w-36 text-center xl:text-left mb-2 xl:mb-0">Tipo de Persona:</label>

                        <select
                            id="typePer"
                            disabled
                            value={reuneData.typePer}
                            className="w-full xl:w-2/5 text-center xl:text-left"
                            {...register('typePer', {
                                required: true
                            })}
                        >
                            <option value="1">Moral</option>
                            <option value="2">Física</option>
                        </select>
                    </div>

                    <div className="basis-full xl:basis-1/5">
                        <label htmlFor="pori" className="w-full xl:w-12 text-center xl:text-left">PORI:</label>
                        <input
                            id="pori"
                            type="checkbox"
                            value={reuneData.pori}
                            className='xl:w-12 w-full'
                            {...register('pori')}
                        />
                    </div>

                </div>
            </fieldset>

            <FragmentComunicacion />

            <FragmentInstitucion />

            <input
                type="submit"
                value="Guardar"
                className="bg-teal-900 rounded-3xl block w-full mt-9 p-3 cursor-pointer uppercase text-white hover:bg-teal-950"
            />

        </form>

    )

}
