import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import FragmentComunicacion from "./FragmentComunicacion";
import FragmentInstitucion from './FragmentInstitucion';
import { searchCat, SearchCategory } from "../../types";
import SearchButton from "../SearchButton";
import { useModal } from "../../hooks/useModal";

export default function RedecoForm() {

    const { state, dispatch } = useModal()

    return (

        <form autoComplete="on" data-formulario>

            <fieldset className="flex justify-between items-center flex-wrap gap-12 md:gap-12 p-6 lg:p-12">

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

                    <input type="number" name="ente" id="ente" className="w-full lg:w-1/2" readOnly disabled />
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

                    <input type="number" name="sucur" id="sucur" className="w-full  lg:w-3/5" readOnly disabled />
                </div>

            </fieldset>

            <fieldset className='p-6 lg:p-12'>

                <legend className='w-full md:w-1/2 xl:px-4'>Datos de la persona</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-full">
                        <label htmlFor="cliente" className="w-full lg:w-36 text-center lg:text-left">Nombre del Cliente:</label>
                        <input type="text" name="cliente" id="cliente" className="w-full lg:w-3/4" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-64">
                        <label htmlFor="tel" className="w-full lg:w-20 text-center lg:text-left mb-2">Teléfono:</label>
                        <input type="tel" name="tel" id="tel" className="w-full lg:w-36" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-1/2">
                        <label htmlFor="email" className="w-full lg:w-16 text-center lg:text-left mb-2">Correo:</label>
                        <input type="email" name="email" id="email" className="w-full lg:w-80" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-32">
                        <label htmlFor="age" className="w-full lg:w-12 text-center lg:text-left mb-2">Edad:</label>
                        <input type="number" name="age" id="age" className="w-full lg:w-20" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-1/5 flex gap-3 items-center justify-center lg:justify-start">
                        <label htmlFor="sex" className="lg:w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="m" readOnly disabled />
                            <label htmlFor="m">M</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="h" readOnly disabled />
                            <label htmlFor="h">H</label>
                        </div>
                    </div>

                    <div className="basis-full lg:basis-80">
                        <label htmlFor="typePer" className="w-full lg:w-36 text-center lg:text-left mb-2">Tipo de Persona:</label>

                        <select name="typePer" id="typePer" className="w-full lg:w-36 text-center lg:text-left" disabled>
                            <option value="">Física</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-32">
                        <label htmlFor="pori" className="w-full lg:w-12 text-center lg:text-left mb-2">PORI:</label>
                        <input type="checkbox" name="pori" id="pori" className='lg:w-12 w-full' />
                    </div>
                </div>
            </fieldset>

            <FragmentComunicacion />

            <FragmentInstitucion />

        </form>
    )
}
