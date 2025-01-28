import './form.module.css';
import styles from './form.module.css';

import SearchButton from "../SearchButton";

import { useGlobal } from "../../hooks/useGlobal";
import { UseFormRegister } from "react-hook-form";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { reuneDataType, searchCat, SearchCategory } from "../../types";
import clsx from 'clsx';

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

      <fieldset>

        <legend>Datos de Comunicación</legend>

        <section className={clsx(styles.gridColumns, 'gap-y-16')}>

          <div>

            <label htmlFor="mes" className="w-full xl:w-10">Mes:</label>
            <input
              id="mes"
              type="number"
              disabled
              className="w-full xl:w-4/5"
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
            <label htmlFor="nProd" className="w-full xl:w-40">Número de Producto:</label>

            <input
              id="nProdn"
              type="text"
              className="w-full xl:w-28"
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
              className="w-full xl:w-40"
              value={state.reuneStateG.reuneData.nProdS}

              {...register('nProdS', {
                required: true
              })}
            >
              <option value="1">Crédito Simple Auto</option>
            </select>
          </div>

          <div>
            <label htmlFor="fecReg" className="w-full xl:w-36">Fecha de Registro:</label>
            <input
              id="fecReg"
              type="date"
              className="w-full xl:w-72"

              {...register('fecReg', {
                required: 'Seleccionar Fecha de Registro.'
              })}
            />
          </div>

          <div>
            <label htmlFor="fecAtn" className="w-full xl:w-36">Fecha de Atención</label>
            <input
              id="fecAtn"
              type="date"
              className="w-full xl:w-72"
              {...register('fecAtn', {
                required: 'Seleccionar Fecha de Atención.'
              })}
            />
          </div>

          <div>
            <label htmlFor="folAtn" className="w-full xl:w-36">Folio de Atención</label>
            <input
              id="folAtn"
              type="text"
              className="w-full xl:w-72"
              value={state.reuneStateG.reuneData.folAtn}
              readOnly disabled
              {...register('folAtn', {
                required: true,
                minLength: 1
              })}
            />
          </div>

          <div>
            <label htmlFor="folConduf" className="w-full xl:w-36">Folio condusef:</label>
            <input
              id="folConduf"
              type="text"
              className="w-full xl:w-72"
              value={state.reuneStateG.reuneData.folConduf}
              readOnly disabled
              {...register('folConduf', {
                required: true,
                minLength: 1
              })}
            />
          </div>

          <div>
            <label htmlFor="queja" className="w-full xl:w-36">Tipo de Queja</label>

            <select
              id="queja"
              value={state.reuneStateG.reuneData.queja}
              className="w-full xl:w-72"
              {...register('queja', {
                required: true
              })}
            >
              <option value="consulta">Consulta</option>
              <option value="reclamo">Reclamo</option>
              <option value="aclaracion">Aclaración</option>
            </select>
          </div>

          <div>
            <label htmlFor="edoReg" className="w-full xl:w-36">Estado de registro</label>

            <select
              id="edoReg"
              className="w-full xl:w-72"
              value={state.reuneStateG.reuneData.edoReg}
              {...register('edoReg', {
                required: true
              })}
            >
              <option value="ninguno">Ninguno</option>
              <option value="pendiente">Pendiente</option>
              <option value="concluido">Concluido</option>
            </select>
          </div>

          <div>
            <label htmlFor="nvlAtn" className="w-full xl:w-36">Nivel de Atención:</label>

            <select
              id="nvlAtn"
              className="w-full xl:w-72"
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
            <label htmlFor="medioCmn" className="w-full xl:w-48">Medio de Comunicación:</label>

            <select
              id="medioCmn"
              className="w-full xl:w-60"
              value={state.reuneStateG.reuneData.medioCmn}
              {...register('medioCmn', {
                required: true
              })}
            >
              <option value="email">Correo Electrónico</option>
              <option value="web">Página web</option>
            </select>
          </div>

        </section>

        <div className={clsx(styles.divForm, 'pt-16')}>

          <label htmlFor="causa" className="w-12">Causa:</label>

          <div
            className='relative'
            onClick={(e) => dispatch({ type: 'modal-open', payload: { event: e, category: SearchCategory.Causa } })}
          >
            <button
              className={styles.buttonSearch}>
              <MagnifyingGlassIcon className={styles.iconSearch} />
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
            className="basis-full xl:basis-4/5"
            value={state.reuneStateG.reuneData.causa}
            readOnly disabled
            {...register('causa', {
              required: true,
              minLength: 1
            })}
          />
        </div>

      </fieldset>

      <fieldset >

        <legend>Datos Generales</legend>

        <div className={styles.gridColumns}>

          <section className="flex flex-col items-center xl:items-start justify-center gap-y-10 gap-x-1">

            <div>
              <label htmlFor="rever" className="w-full xl:w-16">Reversa:</label>
              <input
                id="rever"
                type="checkbox"
                value="true"
                checked={state.reuneStateG.reuneData.rever === true}
                className='w-full xl:w-4'
                {...register('rever')}
              />
            </div>

            <div>
              <label htmlFor="recl" className="w-full xl:w-96">¿El reclamo o Aclaración es de objeto monetario?</label>
              <input
                id="recl"
                type="checkbox"
                value='true'
                checked={state.reuneStateG.reuneData.recl === true}
                className='w-full xl:w-4'
                {...register('recl')}
              />
            </div>

            <div>
              <hr className="pb-4 w-44 xl:w-96 " />
              <label htmlFor="exg" className="w-full xl:w-40">Si es del extranjero:</label>
              <input
                id="exg"
                type="checkbox"
                value='true'
                checked={state.reuneStateG.reuneData.exg === true}
                className='w-full xl:w-4'
                {...register('exg')}
              />
            </div>
          </section>

          <section className= {clsx(styles.flexColumns, 'mt-16 xl:mt-0')}>

            <div className="basis-full">
              <label htmlFor="fecNot" className="w-full xl:w-2/5">Fecha de Notificación:</label>
              <input
                id="fecNot"
                type="date"
                className="w-full xl:w-3/5"
                {...register('fecNot', {
                  required: true
                })}
              />
            </div>

            <div className="basis-full">
              <label htmlFor="fecReso" className="w-full xl:w-2/5">Fecha de Resolución:</label>
              <input
                id="fecReso"
                type="date"
                className="w-full xl:w-3/5"
                {...register('fecReso', {
                  required: true
                })}
              />
            </div>

            <div className="basis-full">
              <label htmlFor="typeRe" className="w-full xl:w-2/5">Tipo de Resolución:</label>
              <select
                id="typeRe"
                className="w-full xl:w-3/5"
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

      <fieldset >

        <legend>Datos del Reclamo por Abono</legend>

        <div className={styles.flexColumns}>

          <div className="basis-full xl:basis-72">
            <label htmlFor="montRe" className="w-full xl:w-1/2">Monto Reclamado:</label>
            <input
              id="montRe"
              type="number"
              className="w-full xl:w-1/2"
              value={state.reuneStateG.reuneData.montRe}
              {...register('montRe', {
                required: true,
                minLength: 0
              })}
            />
          </div>

          <div className="basis-full xl:basis-72">
            <label htmlFor="fecAbo" className="w-full xl:w-32">Fecha de Abono:</label>
            <input
              id="fecAbo"
              type="date"
              className="w-full xl:w-1/2"
              {...register('fecAbo', {
                required: true
              })}
            />
          </div>

          <div className="basis-full xl:basis-72">
            <label htmlFor="montAbo" className="w-full xl:w-32">Monto Abonado:</label>
            <input
              type="number"

              id="montAbo"
              className="w-full xl:w-1/2"
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
