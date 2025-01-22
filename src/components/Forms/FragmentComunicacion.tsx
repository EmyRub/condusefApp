import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { searchCat, SearchCategory } from "../../types";
import SearchButton from "../SearchButton";
import { useGlobal } from "../../hooks/useGlobal";
import { useForm } from "react-hook-form";
import { useMemo } from "react";


export default function FragmentComunicacion() {

  const { state, dispatch } = useGlobal()
  const { register } = useForm()

 // const claimType = useMemo(()=>{

 // })

  return (
    <>
      <fieldset className='p-6 lg:p-12'>

        <legend className='w-full md:w-1/2 lg:px-4'>Datos de Comunicación</legend>

        <div className="flex justify-center lg:justify-between align-middle flex-wrap gap-y-16 gap-x-2">

          <div className="basis-full xl:basis-24">

            <label htmlFor="mes" className="w-full xl:w-10 text-center xl:text-left">Mes:</label>
            <input
              id="mes"
              type="number"
              disabled
              
              className="w-full xl:w-14"
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

          <div className="basis-full xl:basis-72">
            <label htmlFor="fecReg" className="w-full xl:w-36 text-center xl:text-left mb-2 xl:mb-0">Fecha de Registro:</label>
            <input
              id="fecReg"
              type="date"
              className="w-full xl:w-36 text-center"
              {...register('fecReg', {
                required: 'Seleccionar Fecha de Registro.'
              })}
            />
          </div>

          <div className="basis-full xl:basis-72">
            <label htmlFor="fecAtn" className="w-full xl:w-36 text-center xl:text-left mb-2 xl:mb-0">Fecha de Atención</label>
            <input
              id="fecAtn"
              type="date"
              className="w-full xl:w-36 text-center"
              {...register('fecAtn', {
                required: 'Seleccionar Fecha de Atención.'
              })}
            />
          </div>

          <div className="basis-full xl:basis-64">
            <label htmlFor="folAtn" className="w-full xl:w-36 text-center xl:text-left">Folio de Atención</label>
            <input
              id="folAtn"
              type="number"
              className="w-full xl:w-24"
              readOnly disabled
              {...register('folAtn', {
                required: true,
                minLength: 1
              })}
            />
          </div>

          <div className="basis-full xl:basis-60">
            <label htmlFor="folConduf" className="w-full xl:w-28 text-center xl:text-left">Folio condusef:</label>
            <input
              id="folConduf"
              type="number"
              className="w-full xl:w-28"
              readOnly disabled
              {...register('folConduf', {
                required: true,
                minLength: 1
              })}
            />
          </div>

          <div className="basis-full xl:basis-64">
            <label htmlFor="queja" className="w-full xl:w-28 text-center xl:text-left mb-2 xl:mb-0">Tipo de Queja</label>

            <select
              id="queja"
              className="w-full xl:w-36 text-center"
              {...register('queja', {
                required: true
              })}
            >
              <option value="1">Consulta</option>
              <option value="2">Reclamo</option>
              <option value="3">Aclaración</option>
            </select>
          </div>

          <div className="basis-full xl:basis-72">
            <label htmlFor="edoReg" className="w-full xl:w-36 text-center xl:text-left mb-2 xl:mb-0">Estado de registro</label>

            <select
              id="edoReg"
              className="w-full xl:w-36 text-center"
              {...register('eReg', {
                required: true
              })}
            >
              <option value="">Ninguno</option>
              <option value="">Pendiente</option>
              <option value="">Concluido</option>
            </select>
          </div>

          <div className="basis-full xl:basis-auto">
            <label htmlFor="nProd" className="w-full xl:w-40 text-center xl:text-left mb-2 xl:mb-0">Número de Producto:</label>

            <input
              id="nProd"
              type="number"
              className="w-full xl:w-32 mb-2"
              readOnly disabled
              {...register('nProd', {
                required: "El tipo de localidad es obligatoria",
                minLength: {
                  value: 0,
                  message: 'N° de Producto No Válido.'
                }
              })} />

            <select
              id="nProdS"
              className="w-full xl:w-44 text-center"
              {...register('nProd', {
                required: true
              })}
            >
              <option value="">Crédito Simple Auto</option>
            </select>
          </div>

          <div className="basis-full xl:basis-96">
            <label htmlFor="nvlAtn" className="w-full xl:w-36 text-center xl:text-left mb-2 xl:mb-0">Nivel de Atención:</label>

            <select
              id="nvlAtn"
              className="w-full xl:w-52 text-center"
              {...register('nvlAtn', {
                required: 'Seleccionar nivel de atención'
              })}
            >
              <option value="">Vía Eletrónica</option>
            </select>
          </div>

          <div className="basis-full xl:basis-96">
            <label htmlFor="medioCmn" className="w-full xl:w-48 text-center xl:text-left mb-2 xl:mb-0">Medio de Comunicación:</label>

            <select
              id="medioCmn"
              className="w-full xl:w-48 text-center"
              {...register('medioCmn', {
                required: true
              })}
            >
              <option value="">Correo Electrónico</option>
            </select>
          </div>

          <div className="basis-full flex gap-1 flex-wrap justify-center xl:justify-start items-center">
           
            <label htmlFor="causa" className="w-12 text-center xl:text-left">Causa:</label>

            <div
              className='relative'
              onClick={(e) => dispatch({ type: 'modal-open', payload: { event: e, category: SearchCategory.Causa } })}
            >
              <button
                className="bg-teal-400 hover:bg-teal-500 p-2 rounded-md shadow ">
                <MagnifyingGlassIcon className="w-4 text-white" />
              </button>

              {SearchCategory.Causa === state.modalStateG.modalState.id && state.modalStateG.modalState.modal && (
                <SearchButton
                  label={searchCat.causa}
                />
              )}

            </div>

            <input
              id="causa"
              type="number"
              className="basis-full xl:w-3/4 text-center"
              readOnly disabled
              {...register('causa', {
                required: true,
                minLength: 1
              })}
            />
          </div>

        </div>

      </fieldset>

      <fieldset className="p-6 lg:p-12">

        <legend className='w-full md:w-1/2 lg:px-4'>Datos Generales</legend>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <section className="flex flex-col items-center lg:items-start justify-center gap-y-10 gap-x-2">

            <div className="">
              <label htmlFor="rever" className="w-full lg:w-16  xl:text-left">Reversa:</label>
              <input
                id="rever"
                type="checkbox"
                className='w-full lg:w-4'
                {...register('rever')}
              />
            </div>

            <div className="">
              <label htmlFor="recl" className="w-full lg:w-96 ">¿El reclamo o Aclaración es de objeto monetario?</label>
              <input
                id="recl"
                type="checkbox"
                className='w-full lg:w-4'
                {...register('recl')}
              />
            </div>

            <div className="">
              <hr className="pb-2 w-96 " />
              <label htmlFor="exg" className="w-full lg:w-40  lg:text-left">Si es del extranjero:</label>
              <input
                id="exg"
                type="checkbox"
                className='w-full lg:w-4'
                {...register('exg')}
              />
            </div>
          </section>

          <section className="flex justify-between flex-wrap gap-y-10 gap-x-1">

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
          </section>


        </div>

      </fieldset>

      <fieldset className="p-6 lg:p-12">

        <legend className='w-full md:w-1/2 lg:px-4'>Datos del Reclamo por Abono</legend>


        <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

          <div className="basis-full xl:basis-72">
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

          <div className="basis-full xl:basis-72">
            <label htmlFor="fecAbo" className="w-full lg:w-32 text-center lg:text-left mb-2">Fecha de Abono:</label>
            <input
              id="fecAbo"
              type="date"
              className="w-full lg:w-1/2 text-center"
              {...register('fecAbo', {
                required: true
              })}
            />
          </div>

          <div className="basis-full xl:basis-72">
            <label htmlFor="montAbo" className="w-full lg:w-32 text-center lg:text-left mb-2">Monto Abonado:</label>
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
    </>
  )
}
