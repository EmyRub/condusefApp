import { Dispatch } from 'react';
import Error from "../Error";
import { useForm } from "react-hook-form";
import styles from './Form.module.css';
import { DrafteditDirection } from '../../types';
import clsx from 'clsx';

export default function ModalEditarDir({ setModal }: { setModal: Dispatch<React.SetStateAction<boolean>> }) {

    const { register, handleSubmit, formState: { errors } } = useForm<DrafteditDirection>({

        defaultValues: {
            cp: '123456',
            loc: 'se llenara conforme la base de datos',
            edo: '',
            muni: ''
        }
    });

    const editDirection = (data: DrafteditDirection) => {
        console.log(data)
    }

    return (

        <form
            onSubmit={handleSubmit(editDirection)}
            className={styles.bgModal} data-formulario>

            <fieldset className={styles.modal}>

                <legend className={styles.legend}>
                    Actualización de Dirección</legend>


                <div className={clsx(styles.gridColumns, 'gap-y-10 mb-10')}>

                    <div>

                        <label htmlFor="cp" className="w-full xl:w-8">C.P.</label>
                        <input
                            id="cp"
                            type="text"
                            className="w-full xl:w-4/5"
                            {...register('cp', {
                                required: "El C.P. es obligatorio",
                                minLength: {
                                    value: 5,
                                    message: "Formato de C.P. no válido."
                                }
                            })}
                        />
                        {errors.cp && (<Error>{errors.cp?.message as string}</Error>)}
                    </div>

                    <div>
                        <label htmlFor="loc" className="w-full xl:w-20">Localidad:</label>
                        <input
                            id="loc"
                            type="text"
                            className="w-full xl:w-3/4"
                            {...register('loc', {
                                required: "La localidad es obligatoria",
                                minLength: {
                                    value: 2,
                                    message: 'Localidad no válida'
                                }
                            })}
                        />
                        {errors.loc && (<Error>{errors.loc?.message as string}</Error>)}
                    </div>

                    <div>
                        <label htmlFor="edo" className="w-full xl:w-14">Estado:</label>
                        <input
                            id="edo"
                            type="text"
                            className="w-full xl:w-4/5"
                            {...register('edo', {
                                required: "El Estado es obligatorio",
                                minLength: {
                                    value: 3,
                                    message: 'Estado no válido'
                                }
                            })}
                        />
                        {errors.edo && (<Error>{errors.edo?.message as string}</Error>)}
                    </div>

                    <div className="basis-full xl:basis-1/2">
                        <label htmlFor="muni" className="w-full xl:w-20">Municipio:</label>
                        <input
                            id="muni"
                            type="text"
                            className="w-full xl:w-3/4"
                            {...register('muni', {
                                required: "El Municipio es obligatorio",
                                minLength: {
                                    value: 2,
                                    message: 'Municipio no válido'
                                }
                            })}
                        />
                        {errors.muni && (<Error>{errors.muni?.message as string}</Error>
                        )}
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
