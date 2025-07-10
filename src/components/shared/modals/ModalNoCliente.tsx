import clsx from 'clsx';
import '@/css/Form.module.css';
import { Dispatch } from 'react';
import { noClientForm } from '@/types/zod';
import styles from '@/css/Form.module.css';
import { useGlobal } from '@/hooks/useGlobal';
import { Controller, useForm } from 'react-hook-form';

import ErrorMessage from '../../ui/ErrorMessage';

export default function ModalNoCliente({ setModal }: { setModal: Dispatch<React.SetStateAction<boolean>> }) {

    const { dispatch } = useGlobal()
    //Se le debe agregar el <DrafnoClient> para que no dé error el onSubmit (generar, y registrar)
    const { handleSubmit, control } = useForm<noClientForm>()

    const registerNoClient = (data: noClientForm) => {
        console.log('re',data)
        setModal(false)
    }
4
    return (

        <form
            data-formulario
            autoComplete='true'
            className={styles.bgModal}
            onSubmit={handleSubmit(registerNoClient)}
        >

            <fieldset className={styles.modal}>

                <legend className={styles.legend}>Registro No Cliente</legend>

                <div className="flex justify-center xl:justify-between flex-wrap gap-6 mb-10">

                    <div className="w-full xl:w-auto xl:flex ">

                        <label htmlFor="NOM_CoEnt" className="w-full xl:w-44">Nombre de la Persona:</label>

                        <Controller
                            name='NOM_CoEnt'
                            control={control}
                            rules={{
                                required: 'El nombre es obligatorio.',
                                minLength: {
                                    value: 2,
                                    message: 'Nombre no válido.'
                                }
                            }}

                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-[27rem]">
                                    <input
                                        id="NOM_CoEnt"
                                        type="text"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NOM_CoEnt', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message as string}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className="basis-full xl:basis-1/5 flex gap-3 items-center justify-center xl:justify-start">

                        <label htmlFor="CVE_SEXO" className="xl:w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <label htmlFor="femenino">M</label>

                            <Controller
                                name='CVE_SEXO'
                                control={control}
                                rules={{ required: 'Seleccione un género' }}
                                render={({ field }) => (

                                    <input
                                        id="femenino"
                                        type="radio"

                                        {...field}
                                        value='femenino'
                                        checked={field.value === 'femenino'}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'CVE_SEXO', value: e.target.value } })
                                        }}

                                    />

                                )}
                            />
                        </div>

                        <div className="flex gap-1">
                            <label htmlFor="masculino">H</label>

                            <Controller
                                name='CVE_SEXO'
                                control={control}

                                render={({ field }) => (
                                    <input
                                        id="masculino"
                                        type="radio"

                                        {...field}
                                        value='masculino'
                                        checked={field.value === 'masculino'}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'CVE_SEXO', value: e.target.value } })
                                        }}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.gridColumns, 'gap-y-10 mb-10')}>

                    <div className='xl:flex gap-2'>
                        <label htmlFor="TIP_Corre" className="w-full xl:w-16">Correo:</label>

                        <Controller
                            name='TIP_Corre'
                            control={control}
                            rules={{
                                required: 'Correo Obligatorio.',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Formato no válido'
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <input
                                        type="email"
                                        id="TIP_Corre"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'TIP_Corre', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message as string}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex gap-2'>
                        <label htmlFor="NUM_Tlfno" className="w-full xl:w-20">Teléfono:</label>

                        <Controller
                            name='NUM_Tlfno'
                            control={control}
                            rules={{
                                required: 'El teléfono es obligatorio',
                                minLength: 5
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <input
                                        id="NUM_Tlfno"
                                        type="tel"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_Tlfno', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex gap-2'>
                        <label htmlFor="TIP_ENTE" className="w-full xl:w-32">Tipo de Cliente:</label>

                        <Controller
                            name='TIP_ENTE'
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-72">
                                    <select
                                        id="TIP_ENTE"


                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'TIP_ENTE', value: e.target.value } })
                                        }}
                                    >
                                        <option value='moral'>Moral</option>
                                        <option value="fisica">Física</option>
                                    </select>
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                    <div className='xl:flex gap-2'>
                        <label htmlFor="NUM_EDAD" className="w-full xl:w-12">Edad:</label>

                        <Controller
                            name='NUM_EDAD'
                            control={control}
                            rules={{
                                required: 'Agregar una edad',
                                min: 18
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full">
                                    <input
                                        id="NUM_EDAD"
                                        type="number"

                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'form-update', payload: { field: 'NUM_EDAD', value: e.target.value } })
                                        }}
                                    />
                                    {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                                </div>
                            )}
                        />
                    </div>

                </div>

                <div className={clsx(styles.gridColumns, 'gap-y-6')}>
                    <input
                        type="submit"
                        value="Guardar"
                        className={styles.btnForm} />

                    <input
                        type="button"
                        value="Cancelar"
                        onClick={() => setModal(false)}
                        className={styles.btnForm} />
                </div>

            </fieldset>

        </form>

    )
}
