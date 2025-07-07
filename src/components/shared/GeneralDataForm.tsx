import clsx from "clsx"
import '../../css/Form.module.css';
import styles from '../../css/Form.module.css';
import { Controller, useForm } from "react-hook-form"
import { useGlobal } from "../../hooks/useGlobal";

export default function GeneralDataForm() {

    const { state, dispatch } = useGlobal()
    const { register, handleSubmit, control } = useForm()


    return (
        <fieldset>

            <legend>Datos Generales</legend>

            <section className={clsx(styles.gridColumns3, 'gap-y-12 mt-16 xl:mt-0')}>

                <div className="basis-full xl:flex">

                    <label htmlFor="fecNot" className="w-full xl:w-52">Fecha de Notificación:</label>

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
                    <label htmlFor="fecReso" className="w-full xl:w-52">Fecha de Resolución:</label>
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
                    <label htmlFor="typeRe" className="w-full xl:w-52">Tipo de Resolución:</label>

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

        </fieldset>
    )
}
