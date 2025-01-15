import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { searchCat, SearchCategory } from "../../types";
import SearchButton from "../SearchButton";
import { useModal } from "../../hooks/useModal";
import { useForm } from "react-hook-form";


export default function FragmentComunicacion() {

  const { state, dispatch } = useModal()
  const { register } = useForm()

  return (

    <fieldset className='p-6 lg:p-12'>

      <legend className='w-full md:w-1/2 lg:px-4'>Datos de Comunicación</legend>

      <div className="flex justify-between flex-wrap gap-y-16 gap-x-2">

        <div className="basis-full lg:basis-24">
          <label htmlFor="mes" className="w-full lg:w-10 text-center lg:text-left">Mes:</label>
          <input
            id="mes"
            type="number"
            disabled
            className="w-full lg:w-14"
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

        <div className="basis-full lg:basis-72">
          <label htmlFor="fecReg" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Fecha de Registro:</label>
          <input
            id="fecReg"
            type="date"
            className="w-full lg:w-36 text-center"
            {...register('fecReg', {
              required: 'Seleccionar Fecha de Registro.'
            })}
          />
        </div>

        <div className="basis-full lg:basis-72">
          <label htmlFor="fecAtn" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Fecha de Atención</label>
          <input
            id="fecAtn"
            type="date"
            className="w-full lg:w-36 text-center"
            {...register('fecAtn', {
              required: 'Seleccionar Fecha de Atención.'
            })}
          />
        </div>

        <div className="basis-full lg:basis-72">
          <label htmlFor="eReg" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Estado de registro</label>

          <select
            id="eReg"
            className="w-full lg:w-36 text-center"
            {...register('eReg', {
              required: true
            })}
          >
            <option value="">Ninguno</option>
            <option value="">Pendiente</option>
            <option value="">Concluido</option>
          </select>
        </div>

        <div className="basis-full lg:basis-96">
          <label htmlFor="nvlAtn" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Nivel de Atención:</label>

          <select
            id="nvlAtn"
            className="w-full lg:w-52 text-center"
            {...register('nvlAtn', {
              required: 'Seleccionar nivel de atención'
            })}
          >
            <option value="">Vía Eletrónica</option>
          </select>
        </div>

        <div className="basis-full lg:basis-64">
          <label htmlFor="queja" className="w-full lg:w-28 text-center lg:text-left mb-2 lg:mb-0">Tipo de Queja</label>

          <select
            id="queja"
            className="w-full lg:w-36 text-center"
            {...register('queja', {
              required: true
            })}
          >
            <option value="">Consulta</option>
          </select>
        </div>

        <div className="basis-full lg:basis-60">
          <label htmlFor="folAtn" className="w-full lg:w-36 text-center lg:text-left">Folio de Atención</label>
          <input
            id="folAtn"
            type="number"
            className="w-full lg:w-24"
            readOnly disabled
            {...register('folAtn', {
              required: true,
              minLength: 1
            })}
          />
        </div>

        <div className="basis-full lg:basis-60">
          <label htmlFor="folConduf" className="w-full lg:w-28 text-center lg:text-left">Folio condusef:</label>
          <input
            id="folConduf"
            type="number"
            className="w-full lg:w-28"
            readOnly disabled
            {...register('folConduf', {
              required: true,
              minLength: 1
            })}
          />
        </div>

        <div className="basis-full lg:basis-96">
          <label htmlFor="medioCmn" className="w-full lg:w-48 text-center lg:text-left mb-2 lg:mb-0">Medio de Comunicación:</label>

          <select
            id="medioCmn"
            className="w-full lg:w-48 text-center"
            {...register('medioCmn', {
              required: true
            })}
          >
            <option value="">Correo Electrónico</option>
          </select>
        </div>

        <div className="basis-full lg:basis-2/5">
          <label htmlFor="nProd" className="w-full lg:w-40 text-center lg:text-left mb-2 lg:mb-0">Número de Producto:</label>

          <input
            id="nProd"
            type="number"
            className="w-full lg:w-32 mb-2"
            readOnly disabled
            {...register('nProd', {
              required: "El tipo de localidad es obligatoria",
              minLength: {
                value: 0,
                message: 'N° de Producto No Válido.'
              }
            })} />

          <select
            id="nProd"
            className="w-full lg:w-44 text-center"
            {...register('nProd', {
              required: true
            })}
          >
            <option value="">Crédito Simple Auto</option>
          </select>
        </div>

        <div className="basis-full flex gap-1 flex-wrap justify-center lg:justify-start items-center">
          <label htmlFor="causa" className="w-12 text-center lg:text-left">Causa:</label>

          <div
            className='relative'
            onClick={(e) => dispatch({ type: 'open-modal', payload: { event: e, category: SearchCategory.Causa } })}
          >
            <button
              className="bg-teal-400 hover:bg-teal-500 p-2 rounded-md shadow ">
              <MagnifyingGlassIcon className="w-4 text-white" />
            </button>

            {SearchCategory.Causa === state.modalState.id && state.modalState.modal && (
              <SearchButton
                label={searchCat.causa}
              />
            )}

          </div>

          <input
            id="causa"
            type="number"
            className="w-3/4"
            readOnly disabled
            {...register('causa', {
              required: true,
              minLength: 1
            })}
          />
        </div>
   
      </div>

    </fieldset>
  )
}
