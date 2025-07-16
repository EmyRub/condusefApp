import clsx from "clsx"
import '@/css/Form.module.css';
import styles from '@/css/Form.module.css';
import { useGlobal } from "@/hooks/useGlobal";
import { Control, Controller } from "react-hook-form"
import { reuneForm } from "@/types/zod";
import ErrorMessage from "../ui/ErrorMessage";

export type GeneralDataFormProps = {
    control: Control<reuneForm, any>
}

export default function GeneralDataForm({ control }: GeneralDataFormProps) {

    const { dispatch } = useGlobal()


    return (

        <section className={clsx(styles.gridColumns3, 'gap-y-12 mt-16 xl:mt-0')}>

            <div className="basis-full xl:flex">

                <label htmlFor="FEC_NOTI" className="w-full xl:w-52">Fecha de Notificación:</label>

                <Controller
                    name='FEC_NOTI'
                    control={control}
                    rules={{
                        required: 'Seleccione una fecha'
                    }}

                    render={({ field, fieldState: { error } }) => (
                        <div className="w-full xl:w-3/5">
                            <input
                                id="FEC_NOTI"
                                type="date"
                                value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                                onChange={(e) => {
                                    field.onChange(e)
                                    dispatch({ type: 'form-update', payload: { field: 'FEC_NOTI', value: e.target.value } })
                                }}
                            />
                            {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                        </div>
                    )}
                />
            </div>

            <div className="basis-full xl:flex">
                <label htmlFor="FEC_RESOL" className="w-full xl:w-52">Fecha de Resolución:</label>

                <Controller
                    name='FEC_RESOL'
                    control={control}
                    rules={{
                        required: 'Seleccione una fecha'
                    }}

                    render={({ field, fieldState: { error } }) => (
                        <div className="w-full xl:w-3/5">
                            <input
                                id="FEC_RESOL"
                                type="date"
                                value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                                onChange={(e) => {
                                    field.onChange(e)
                                    dispatch({ type: 'form-update', payload: { field: 'FEC_RESOL', value: e.target.value } })
                                }}
                            />
                            {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                        </div>
                    )}
                />
            </div>

            <div className="basis-full xl:flex">
                <label htmlFor="TIP_RESOL" className="w-full xl:w-52">Tipo de Resolución:</label>

                <Controller
                    name='TIP_RESOL'
                    control={control}
                    rules={{
                        required: 'Seleccione tipo de resolución'
                    }}

                    render={({ field, fieldState: { error } }) => (
                        <div className="w-full xl:w-3/5">
                            <select
                                id="TIP_RESOL"
                                {...field}
                                onChange={(e) => {
                                    field.onChange(e)
                                    dispatch({ type: 'form-update', payload: { field: 'TIP_RESOL', value: e.target.value } })
                                }}
                            >
                                <option value={1}>Demandar</option>
                                <option value={2}>Acusarlo con tu mamá</option>
                            </select>
                            {error && (<ErrorMessage>{error.message}</ErrorMessage>)}
                        </div>
                    )}
                />
            </div>
        </section>

    )
}
