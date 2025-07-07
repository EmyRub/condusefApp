import clsx from 'clsx';
import Error from "../Error";
import { Dispatch } from 'react';
import '../../../css/Form.module.css';
import styles from '../../../css/Form.module.css';
import { DraftnoClient } from '../../../types';
import { useGlobal } from '../../../hooks/useGlobal';
import { Controller, useForm } from 'react-hook-form';

export default function ModalNoCliente({ setModal }: { setModal: Dispatch<React.SetStateAction<boolean>> }) {

    const { dispatch } = useGlobal()
    //Se le debe agregar el <DrafnoClient> para que no dé error el onSubmit (generar, y registrar)
    const { register, handleSubmit, formState: { errors }, control } = useForm<DraftnoClient>()

    const registerNoClient = (data: DraftnoClient) => { }

    return (

        <form
            onSubmit={handleSubmit(registerNoClient)}
            className={styles.bgModal} data-formulario>

            <fieldset className={styles.modal}>

                <legend className={styles.legend}>Registro No Cliente</legend>

                <div className="flex justify-center flex-wrap gap-6 mb-10">

                    <div className="xl:flex">

                        <label htmlFor="name" className="w-full xl:w-44">Nombre de la Persona:</label>

                        <Controller
                            name='name'
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
                                        id="name"
                                        type="text"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'name', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                        {errors.name && (<Error>{errors.name?.message as string}</Error>)}
                    </div>

                    <div className="basis-full xl:basis-1/5 flex gap-3 items-center justify-center xl:justify-start">

                        <label htmlFor="genre" className="xl:w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <input
                                id="m"
                                type="radio"
                                {...register('genre')}
                            />
                            <label htmlFor="m" className='m-0'>M</label>
                        </div>
                        <div className="flex gap-1">
                            <input
                                id="h"
                                type="radio"
                                {...register('genre')}
                            />
                            <label htmlFor="h" className='m-0'>H</label>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.gridColumns, 'gap-y-10 mb-10')}>

                    <div>
                        <label htmlFor="email" className="w-full xl:w-16">Correo:</label>

                        <Controller
                            name='email'
                            control={control}
                            rules={{
                                required: 'Correo Obligatorio.',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Formato no válido'
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <div className="w-full xl:w-[19rem]">
                                    <input
                                        type="email"
                                        id="email"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e)
                                            dispatch({ type: 'client-update', payload: { field: 'email', value: e.target.value } })
                                        }}
                                    />
                                </div>
                            )}
                        />
                        {errors.email && (<Error>{errors.email?.message as string}</Error>)}
                    </div>

                    <div>
                        <label htmlFor="tel" className="w-full xl:w-20">Teléfono:</label>

                        <input
                            id="phone"
                            type="tel"
                            className="w-full xl:w-64"
                            {...register('phone', {
                                required: 'Teléfono Obligatorio',
                                minLength: {
                                    value: 5,
                                    message: 'Teléfono no válido.'
                                }
                            })}
                        />
                        {errors.phone && (<Error>{errors.phone?.message as string}</Error>)}
                    </div>

                    <div>
                        <label htmlFor="typePer" className="w-full xl:w-32">Tipo de Cliente:</label>

                        <select
                            id="typePer"
                            className="w-full xl:w-60"
                            {...register('typePer', {
                                required: 'Campo requerido.'
                            }
                            )}
                        >
                            <option value="1">0</option>
                        </select>

                        {errors.typePer && (<Error>{errors.typePer?.message as string}</Error>)}
                    </div>

                    <div>
                        <label htmlFor="age" className="w-full xl:w-12">Edad:</label>

                        <input
                            id="age"
                            type="number"
                            className="w-full xl:w-72"
                            {...register('age', {
                                required: 'Edad requerida.',
                                minLength: {
                                    value: 18,
                                    message: 'Edad no válida.'
                                }
                            }
                            )}
                        />
                        {errors.age && (<Error>{errors.age?.message as string}</Error>)}
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
