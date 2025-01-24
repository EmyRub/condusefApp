import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { reuneDataType, searchCat, SearchCategory } from "../../types";
import SearchButton from "../SearchButton";
import { useGlobal } from "../../hooks/useGlobal";
import { UseFormRegister } from "react-hook-form";

type FragmentComunicationProps = {
  register: UseFormRegister<reuneDataType>
}
export default function FragmentComunicacion({ register }: FragmentComunicationProps) {

  /**
   * No se puede llamar a otro register directamente porque sería como una dependencia nueva 
   * El uso simultáneo de value (estado controlado) y register (estado no controlado) no es compatible. React lanzará advertencias o ignorará el manejo de los valores.
   * */
  //const { register } = useForm()
  const { state, dispatch } = useGlobal()


  // const claimType = useMemo(()=>{

  // })

  return (
    <>

      <fieldset className='p-6 lg:p-12'>

        <legend className='w-full md:w-1/2 lg:px-4'>Datos de Comunicación</legend>

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-y-16 gap-x-10">

          <div>

            <label htmlFor="mes" className="w-full xl:w-10 text-center xl:text-left">Mes:</label>
            <input
              id="mes"
              type="number"
              disabled
              className="w-full xl:w-4/5 text-center"
              value={state.reuneStateG.reuneData.mes}

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

          <div>
            <label htmlFor="nProd" className="w-full xl:w-40 text-center xl:text-left mb-2 xl:mb-0">Número de Producto:</label>

            <input
              id="nProdn"
              type="text"
              className="w-full xl:w-32 mb-2 text-center"
              value={state.reuneStateG.reuneData.nProdn}
              readOnly disabled

              {...register('nProdn', {
                required: "El tipo de localidad es obligatoria",
                minLength: {
                  value: 0,
                  message: 'N° de Producto No Válido.'
                }
              })} />

            <select
              id="nProdS"
              className="w-full xl:w-44 text-center"
              value={state.reuneStateG.reuneData.nProdS}

              {...register('nProdS', {
                required: true
              })}
            >
              <option value="1">Crédito Simple Auto</option>
            </select>
          </div>

          <div>
            <label htmlFor="fecReg" className="w-full xl:w-36 text-center xl:text-left mb-2 xl:mb-0">Fecha de Registro:</label>
            <input
              id="fecReg"
              type="date"

              className="w-full xl:w-72 text-center"

              {...register('fecReg', {
                required: 'Seleccionar Fecha de Registro.'
              })}
            />
          </div>

          <div>
            <label htmlFor="fecAtn" className="w-full xl:w-36 text-center xl:text-left mb-2 xl:mb-0">Fecha de Atención</label>
            <input
              id="fecAtn"
              type="date"
              className="w-full xl:w-72 text-center"
              {...register('fecAtn', {
                required: 'Seleccionar Fecha de Atención.'
              })}
            />
          </div>

          <div>
            <label htmlFor="folAtn" className="w-full xl:w-36 text-center xl:text-left">Folio de Atención</label>
            <input
              id="folAtn"
              type="text"
              className="w-full xl:w-72 text-center"
              value={state.reuneStateG.reuneData.folAtn}
              readOnly disabled
              {...register('folAtn', {
                required: true,
                minLength: 1
              })}
            />
          </div>

          <div>
            <label htmlFor="folConduf" className="w-full xl:w-36 text-center xl:text-left">Folio condusef:</label>
            <input
              id="folConduf"
              type="text"
              className="w-full xl:w-72 text-center"
              value={state.reuneStateG.reuneData.folConduf}
              readOnly disabled
              {...register('folConduf', {
                required: true,
                minLength: 1
              })}
            />
          </div>

          <div>
            <label htmlFor="queja" className="w-full xl:w-36 text-center xl:text-left mb-2 xl:mb-0">Tipo de Queja</label>

            <select
              id="queja"
              value={state.reuneStateG.reuneData.queja}
              className="w-full xl:w-72 text-center"
              {...register('queja', {
                required: true
              })}
            >
              <option value="1">Consulta</option>
              <option value="2">Reclamo</option>
              <option value="3">Aclaración</option>
            </select>
          </div>

          <div>
            <label htmlFor="edoReg" className="w-full xl:w-36 text-center xl:text-left mb-2 xl:mb-0">Estado de registro</label>

            <select
              id="edoReg"
              className="w-full xl:w-72 text-center"
              value={state.reuneStateG.reuneData.edoReg}
              {...register('edoReg', {
                required: true
              })}
            >
              <option value="1">Ninguno</option>
              <option value="2">Pendiente</option>
              <option value="3">Concluido</option>
            </select>
          </div>

          <div>
            <label htmlFor="nvlAtn" className="w-full xl:w-36 text-center xl:text-left mb-2 xl:mb-0">Nivel de Atención:</label>

            <select
              id="nvlAtn"
              className="w-full xl:w-72 text-center"
              value={state.reuneStateG.reuneData.nvlAtn}
              {...register('nvlAtn', {
                required: 'Seleccionar nivel de atención'
              })}
            >
              <option value="1">Vía Eletrónica</option>
              <option value="2">Vía Teléfonica</option>
            </select>
          </div>

          <div>
            <label htmlFor="medioCmn" className="w-full xl:w-48 text-center xl:text-left mb-2 xl:mb-0">Medio de Comunicación:</label>

            <select
              id="medioCmn"
              className="w-full xl:w-64 text-center"
              value={state.reuneStateG.reuneData.medioCmn}
              {...register('medioCmn', {
                required: true
              })}
            >
              <option value="1">Correo Electrónico</option>
              <option value="2">Página web</option>
            </select>
          </div>

        </section>

        <div className="pt-16 flex gap-1 flex-wrap justify-center xl:justify-start items-center">

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
            type="text"
            className="basis-full lg:basis-4/5 text-center"
            value={state.reuneStateG.reuneData.causa}
            readOnly disabled
            {...register('causa', {
              required: true,
              minLength: 1
            })}
          />
        </div>

      </fieldset>

      <fieldset className="p-6 lg:p-12">

        <legend className='w-full md:w-1/2 lg:px-4'>Datos Generales</legend>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <section className="flex flex-col items-center lg:items-start justify-center gap-y-10 gap-x-2">

            <div className="">
              <label htmlFor="rever" className="w-full lg:w-16 text-center xl:text-left">Reversa:</label>
              <input
                id="rever"
                type="checkbox"
                value="true"
                checked={state.reuneStateG.reuneData.rever === true}
                className='w-full lg:w-4'
                {...register('rever')}
              />
            </div>

            <div className="">
              <label htmlFor="recl" className="w-full lg:w-96 text-center xl:text-left">¿El reclamo o Aclaración es de objeto monetario?</label>
              <input
                id="recl"
                type="checkbox"
                value='true'
                checked={state.reuneStateG.reuneData.recl === true}
                className='w-full lg:w-4'
                {...register('recl')}
              />
            </div>

            <div className="">
              <hr className="pb-4 w-44 lg:w-96 " />
              <label htmlFor="exg" className="w-full lg:w-40 text-center lg:text-left">Si es del extranjero:</label>
              <input
                id="exg"
                type="checkbox"
                value='true'
                checked={state.reuneStateG.reuneData.exg === true}
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
                value={state.reuneStateG.reuneData.typeRe}
                {...register('typeRe', {
                  required: true
                })}
              >
                <option value="1">Demandar</option>
                <option value="2">Acusarlo con tu mamá</option>
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
              value={state.reuneStateG.reuneData.montRe}
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
              value={state.reuneStateG.reuneData.montAbo}
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
