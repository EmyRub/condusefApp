import clsx from 'clsx';
import '@/css/Form.module.css';
import styles from '@/css/Form.module.css';

import SearchButton from "../ui/SearchButton";

import { useMemo } from 'react';
import { useGlobal } from "@/hooks/useGlobal";
import { Controller, useForm, UseFormRegister } from "react-hook-form";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { reuneDataType, searchCat, SearchCategory } from "@/types/index";


type FragmentComunicationProps = {
  register: UseFormRegister<reuneDataType>,
}

export default function FragmentComunicacion({ register }: FragmentComunicationProps) {

  /**
   * No se puede llamar a otro register directamente porque sería como una dependencia nueva 
   * El uso simultáneo de value (estado controlado) y register (estado no controlado) no es compatible. React lanzará advertencias o ignorará el manejo de los valores.
   * */
  const { state, dispatch } = useGlobal()
  const { watch, control } = useForm();


  // Observa valor dinámico del select
  const edoReg = watch('edoReg')
  const claimType = watch('queja')

  const isRever = useMemo(() => claimType === 'reclamo' && edoReg === 'pendiente', [claimType, edoReg])

  console.log(edoReg)
  console.log(claimType)
  console.log(isRever)

  return (
    <>

      <fieldset>

        <legend>Datos de Comunicación</legend>

        <section className={clsx(styles.gridColumns, 'gap-y-16')}>

          <div className='xl:flex'>

            <label htmlFor="mes" className="w-full xl:w-10">Mes:</label>

            <Controller
              name='mes'
              control={control}
              rules={{
                required: "El mes es obligatorio",
                min: {
                  value: 1,
                  message: "Formato de mes no válido."
                },
                max: {
                  value: 12,
                  message: "Formato de mes no válido."
                }
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-4/5">
                  <input
                    id="mes"
                    type="number"
                    disabled

                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'mes', value: e.target.value } })
                    }}
                  />
                </div>
              )}
            />
          </div>

          <div className='xl:flex gap-1'>
            <label htmlFor="nProd" className="w-full xl:w-40">Número de Producto:</label>

            <Controller
              name='nProdn'
              control={control}
              rules={{
                required: "El tipo de localidad es obligatoria",
                minLength: {
                  value: 0,
                  message: 'N° de Producto No Válido.'
                }
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-28">
                  <input
                    id="nProdn"
                    type="text"
                    disabled

                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'nProdn', value: e.target.value } })
                    }}
                  />
                </div>
              )}
            />

            <Controller
              name='nProdS'
              control={control}
              rules={{
                required: true
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-40">
                  <select
                    id="nProdS"

                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'nProdS', value: e.target.value } })
                    }}
                  >
                    <option value="1">Crédito Simple Auto</option>
                    <option value="2">Crédito Simple CN</option>

                  </select>
                </div>
              )}
            />

          </div>

          <div className='xl:flex'>
            <label htmlFor="fecReg" className="w-full xl:w-36">Fecha de Registro:</label>

            <Controller
              name='fecReg'
              control={control}
              rules={{
                required: 'Seleccionar Fecha de Registro.'
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-72">
                  <input
                    id="fecReg"
                    type="date"

                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'fecReg', value: e.target.value } })
                    }}
                  />
                </div>
              )}
            />
          </div>

          <div className='xl:flex'>
            <label htmlFor="fecAtn" className="w-full xl:w-36">Fecha de Atención</label>

            <Controller
              name='fecAtn'
              control={control}
              rules={{
                required: 'Seleccionar Fecha de Atención.'
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-72">
                  <input
                    id="fecAtn"
                    type="date"

                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'fecAtn', value: e.target.value } })
                    }}
                  />
                </div>
              )}
            />

          </div>

          <div className='xl:flex'>
            <label htmlFor="folAtn" className="w-full xl:w-36">Folio de Atención</label>

            <Controller
              name='folAtn'
              control={control}
              rules={{
                required: true,
                minLength: 1
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-72">
                  <input
                    id="folAtn"
                    type="text"
                    disabled

                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'folAtn', value: e.target.value } })
                    }}
                  />
                </div>
              )}
            />
          </div>

          <div className='xl:flex'>
            <label htmlFor="folConduf" className="w-full xl:w-36">Folio condusef:</label>
            <Controller
              name='folConduf'
              control={control}
              rules={{
                required: true,
                minLength: 1
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-72">
                  <input
                    id="folConduf"
                    type="text"
                    disabled

                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'folConduf', value: e.target.value } })
                    }}
                  />
                </div>
              )}
            />
          </div>

          <div className='xl:flex'>
            <label htmlFor="queja" className="w-full xl:w-36">Tipo de Queja</label>

            <Controller
              name='queja'
              control={control}
              rules={{
                required: 'Seleccione un tipo de queja'
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-72">
                  <select
                    id="queja"

                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'queja', value: e.target.value } })
                    }}
                  >
                    <option value="consulta">Consulta</option>
                    <option value="reclamo">Reclamo</option>
                    <option value="aclaracion">Aclaración</option>

                  </select>
                </div>
              )}
            />
          </div>

          <div className='xl:flex'>
            <label htmlFor="edoReg" className="w-full xl:w-36">Estado de registro</label>

            <Controller
              name='edoReg'
              control={control}
              rules={{
                required: 'Seleccione un estado de registro'
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-72">
                  <select
                    id="edoReg"

                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'edoReg', value: e.target.value } })
                    }}
                  >
                    <option value="ninguno">Ninguno</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="concluido">Concluido</option>

                  </select>
                </div>
              )}
            />
          </div>

          <div className='xl:flex'>
            <label htmlFor="nvlAtn" className="w-full xl:w-36">Nivel de Atención:</label>

            <Controller
              name='nvlAtn'
              control={control}
              rules={{
                required: 'Seleccionar nivel de atención'
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-72">
                  <select
                    id="nvlAtn"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'nvlAtn', value: e.target.value } })
                    }}
                  >
                    <option value="1">Vía Eletrónica</option>
                    <option value="2">Vía Teléfonica</option>

                  </select>
                </div>
              )}
            />
          </div>

          <div className='xl:flex'>
            <label htmlFor="medioCmn" className="w-full xl:w-48">Medio de Comunicación:</label>

            <Controller
              name='medioCmn'
              control={control}
              rules={{
                required: 'Seleccione un medio de comunicación'
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-60">
                  <select
                    id="medioCmn"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'medioCmn', value: e.target.value } })
                    }}
                  >
                    <option value="email">Correo Electrónico</option>
                    <option value="web">Página web</option>

                  </select>
                </div>
              )}
            />
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

          <Controller
            name='causa'
            control={control}
            rules={{
              required: true,
              minLength: 1
            }}
            render={({ field, fieldState: { error } }) => (
              <div className="w-full xl:w-4/5">
                <input
                  id="causa"
                  type="text"
                  disabled
                  {...field}
                  onChange={(e) => {
                    field.onChange(e)
                    dispatch({ type: 'client-update', payload: { field: 'causa', value: e.target.value } })
                  }}
                />
              </div>
            )}
          />
        </div>

      </fieldset>

      <fieldset>

        <legend>Datos Generales</legend>

        <div className={styles.gridColumns}>

          <section className="flex flex-col items-center xl:items-start justify-center gap-y-6 gap-x-1">

            {isRever && (
              <span className='flex flex-col items-center xl:items-start justify-center gap-y-8 gap-x-1'>

                <div className='xl:flex'>
                  <label htmlFor="rever" className="w-full xl:w-16">Reversa:</label>

                  <Controller
                    name='rever'
                    control={control}
                    render={({ field, fieldState: { error } }) => (

                      <div className="w-full xl:w-4">
                        <input
                          id="rever"
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => {
                            field.onChange(e.target.checked)
                            dispatch({
                              type: 'client-update',
                              payload: { field: 'rever', value: e.target.checked }
                            })
                          }}
                        />
                      </div>
                    )}
                  />
                </div>

                <div className='xl:flex'>
                  <label htmlFor="recl" className="w-full xl:w-96">¿El reclamo o Aclaración es de objeto monetario?</label>
                  <Controller
                    name='recl'
                    control={control}
                    render={({ field, fieldState: { error } }) => (

                      <div className="w-full xl:w-4">
                        <input
                          id="recl"
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => {
                            field.onChange(e.target.checked)
                            dispatch({
                              type: 'client-update',
                              payload: { field: 'recl', value: e.target.checked }
                            })
                          }}
                        />
                      </div>
                    )}
                  />
                </div>
              </span>
            )}

            <hr className="w-44 xl:w-96 " />

            <div className='xl:flex'>

              <label htmlFor="exg" className="w-full xl:w-40">Si es del extranjero:</label>

              <Controller
                name='exg'
                control={control}
                render={({ field, fieldState: { error } }) => (

                  <div className="w-full xl:w-4">
                    <input
                      id="exg"
                      type="checkbox"
                      checked={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked)
                        dispatch({
                          type: 'client-update',
                          payload: { field: 'exg', value: e.target.checked }
                        })
                      }}
                    />
                  </div>
                )}
              />
            </div>

          </section>

          <section className={clsx(styles.flexColumns, 'mt-16 xl:mt-0')}>

            <div className="basis-full xl:flex">
              <label htmlFor="fecNot" className="w-full xl:w-2/5">Fecha de Notificación:</label>
              <Controller
                name='fecNot'
                control={control}
                rules={{
                  required: 'Seleccione una fecha'
                }}
                render={({ field, fieldState: { error } }) => (
                  <div className="w-full xl:w-3/5">
                    <input
                      id="fecNot"
                      type="date"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        dispatch({ type: 'client-update', payload: { field: 'fecNot', value: e.target.value } })
                      }}
                    />
                  </div>
                )}
              />
            </div>

            <div className="basis-full xl:flex">
              <label htmlFor="fecReso" className="w-full xl:w-2/5">Fecha de Resolución:</label>
              <Controller
                name='fecReso'
                control={control}
                rules={{
                  required: 'Seleccione una fecha'
                }}
                render={({ field, fieldState: { error } }) => (
                  <div className="w-full xl:w-3/5">
                    <input
                      id="fecReso"
                      type="date"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        dispatch({ type: 'client-update', payload: { field: 'fecReso', value: e.target.value } })
                      }}
                    />
                  </div>
                )}
              />
            </div>

            <div className="basis-full xl:flex">
              <label htmlFor="typeRe" className="w-full xl:w-2/5">Tipo de Resolución:</label>

              <Controller
                name='typeRe'
                control={control}
                rules={{
                  required: 'Seleccione tipo de resolución'
                }}
                render={({ field, fieldState: { error } }) => (
                  <div className="w-full xl:w-3/5">
                    <select
                      id="typeRe"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        dispatch({ type: 'client-update', payload: { field: 'typeRe', value: e.target.value } })
                      }}
                    >
                      <option value="1">Demandar</option>
                      <option value="2">Acusarlo con tu mamá</option>
                    </select>
                  </div>
                )}
              />
            </div>
          </section>
        </div>

      </fieldset>

      <fieldset >

        <legend>Datos del Reclamo por Abono</legend>

        <div className={styles.flexColumns}>

          <div className="basis-full xl:basis-72 xl:flex">
            <label htmlFor="montRe" className="w-full xl:w-1/2">Monto Reclamado:</label>
            <Controller
              name='montRe'
              control={control}
              rules={{
                required: 'Agregar monto reclamado',
                min: 0
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-1/2">
                  <input
                    id="montRe"
                    type="number"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'montRe', value: e.target.value } })
                    }}
                  />
                </div>
              )}
            />
          </div>

          <div className="basis-full xl:basis-72 xl:flex">
            <label htmlFor="fecAbo" className="w-full xl:w-32">Fecha de Abono:</label>

            <Controller
              name='fecAbo'
              control={control}
              rules={{
                required: 'Agregar fecha de abono',
                minLength: 0
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-1/2">
                  <input
                    id="fecAbo"
                    type="date"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'fecAbo', value: e.target.value } })
                    }}
                  />
                </div>
              )}
            />
          </div>

          <div className="basis-full xl:basis-72 xl:flex">
            <label htmlFor="montAbo" className="w-full xl:w-32">Monto Abonado:</label>
            <Controller
              name='montAbo'
              control={control}
              rules={{
                required: 'Agregar monto abonado',
                min: 0
              }}
              render={({ field, fieldState: { error } }) => (
                <div className="w-full xl:w-1/2">
                  <input
                    id="montAbo"
                    type="number"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      dispatch({ type: 'client-update', payload: { field: 'montAbo', value: e.target.value } })
                    }}
                  />
                </div>
              )}
            />
          </div>
        </div>

      </fieldset>
    </>
  )
}
