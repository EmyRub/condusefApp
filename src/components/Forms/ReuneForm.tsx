import './form.module.css';
import FragmentComunicacion from './FragmentComunicacion';
import FragmentInstitucion from './FragmentInstitucion';
import SearchButton from '../SearchButton';
import { searchCat, SearchCategory } from '../../types';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useSearchBox } from '../../hooks/useSearchBox';
import { useModal } from '../../hooks/useModal';

export default function ReuneForm() {

    const { activeSearch, handleOpenSearch, modalRef, handleCloseSearch } = useSearchBox()

    //Dispatch.- función especial que permite ejecutar acciones cuando se le llame   
    const { state, dispatch } = useModal()

    return (

        <form autoComplete="on" data-formulario>

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
                            <SearchButton
                                label={searchCat.cliente}
                                modalRef={modalRef}
                                activeSearch={activeSearch}
                                handleCloseSearch={handleCloseSearch}
                            />
                        )}

                    </div>

                    <input type="number" name="ente" id="ente" className="w-full lg:w-1/2" readOnly />

                </div>

                <div className="basis-full lg:basis-2/5 flex gap-1 flex-wrap justify-center lg:justify-start items-center">
                    <label htmlFor="sucur" className="w-16 text-center lg:text-left">Sucursal:</label>

                    <div
                        className='relative'
                        onClick={(e) => handleOpenSearch(e, SearchCategory.Sucursal)}
                    >
                        <button
                            className="bg-teal-400 hover:bg-teal-500 p-2 rounded-md shadow ">
                            <MagnifyingGlassIcon className="w-4 text-white" />
                        </button>

                        {SearchCategory.Sucursal === activeSearch.id && activeSearch.modal && (
                            <SearchButton
                                label={searchCat.sucursal}
                                modalRef={modalRef}
                                activeSearch={activeSearch}
                                handleCloseSearch={handleCloseSearch}
                            />
                        )}

                    </div>

                    <input type="number" name="sucur" id="sucur" className="w-full  lg:w-3/5" readOnly disabled />
                </div>

                <div className="basis-full lg:basis-1/2">
                    <label htmlFor="recl" className="w-full lg:w-56 text-center">¿El reclamo o Aclaración es de objeto monetario?</label>
                    <input type="checkbox" name="recl" id="recl" className='w-full lg:w-1/5' />
                </div>

                <div className="basis-full lg:basis-2/5">
                    <label htmlFor="rever" className="w-full lg:w-16 text-center xl:text-left">Rever:</label>
                    <input type="checkbox" name="rever" id="rever" className='w-full lg:w-1/6' />
                </div>

            </fieldset>

            <fieldset className='p-6 lg:p-12'>

                <legend className='w-full md:w-1/2 xl:px-4'>Datos de la persona</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-full">
                        <label htmlFor="cliente" className="w-full lg:w-36 text-center lg:text-left">Nombre del Cliente:</label>
                        <input type="text" name="cliente" id="cliente" className="w-full lg:w-3/4" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-1/2">
                        <label htmlFor="email" className="w-full lg:w-16 text-center lg:text-left">Correo:</label>
                        <input type="email" name="email" id="email" className="w-full lg:w-3/4" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="tel" className="w-full lg:w-20 text-center xl:text-left">Teléfono:</label>
                        <input type="tel" name="tel" id="tel" className="w-full lg:w-3/5" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-1/5">
                        <label htmlFor="age" className="w-full lg:w-12 text-center lg:text-left">Edad:</label>
                        <input type="number" name="age" id="age" className="w-full lg:w-1/2" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-1/5 flex gap-3 items-center justify-center lg:justify-start">
                        <label htmlFor="sex" className="lg:w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="m" />
                            <label htmlFor="m">M</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="h" />
                            <label htmlFor="h">H</label>
                        </div>
                    </div>

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="typePer" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Tipo de Persona:</label>

                        <select name="typePer" id="typePer" className="w-full lg:w-2/5 text-center lg:text-left">
                            <option value="">Física</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="pori" className="w-full lg:w-12 text-center lg:text-left">PORI:</label>
                        <input type="checkbox" name="pori" id="pori" className='lg:w-12 w-full' />
                    </div>

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="exg" className="w-full lg:w-40 text-center lg:text-left">Si es del extranjero:</label>
                        <input type="checkbox" name="exg" id="exg" className='w-full lg:w-12' />
                    </div>

                </div>
            </fieldset>

            <FragmentComunicacion
                modalRef={modalRef}
                activeSearch={activeSearch}
                handleCloseSearch={handleCloseSearch}
            />

            <div className="flex flex-col lg:flex-row gap-2 justify-between items-start mb-8">

                <fieldset className="p-6 lg:p-12 lg:basis-1/2">

                    <legend className='w-full lg:w-11/12 lg:px-4'>Datos Generales</legend>

                    <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

                        <div className="basis-full">
                            <label htmlFor="fnot" className="w-full lg:w-2/5 text-center lg:text-left mb-2">Fecha de Notificación:</label>
                            <input type="date" name="fnot" id="fnot" className="w-full lg:w-3/5 text-center" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="freso" className="w-full lg:w-2/5 text-center lg:text-left mb-2">Fecha de Resolución:</label>
                            <input type="date" name="freso" id="freso" className="w-full lg:w-3/5 text-center" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="tre" className="w-full lg:w-2/5 text-center lg:text-left mb-2">Tipo de Resolución:</label>
                            <select name="tre" id="tre" className="w-full lg:w-3/5 text-center">
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
                            <input type="number" name="montRe" id="montRe" className="w-full lg:w-1/2 text-center" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="fAbon" className="w-full lg:w-1/2 text-center lg:text-left mb-2">Fecha de Abono:</label>
                            <input type="date" name="fAbon" id="fAbon" className="w-full lg:w-1/2 text-center" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="mAbo" className="w-full lg:w-1/2 text-center lg:text-left mb-2">Monto Abonado:</label>
                            <input type="number" name="mAbo" id="mAbo" className="w-full lg:w-1/2 text-center" />
                        </div>
                    </div>
                </fieldset>

            </div>

            <FragmentInstitucion />

        </form>

    )

}
