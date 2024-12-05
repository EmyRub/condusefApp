import styles from './Form.module.css';
import { XCircleIcon } from "@heroicons/react/16/solid";


export default function RegistroNoCliente() {
    return (

        <form className={`${styles.bgModal} fixed top-0 left-0 w-full h-full`} data-formulario>

            <fieldset className={`${styles.modal} absolute left-1/2 top-1/2`}>

                <legend className='w-1/2'>Datos de la persona</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-full">
                        <label htmlFor="name" className="w-44">Nombre de la Persona:</label>
                        <input type="text" name="name" id="name" className="w-3/4" />
                    </div>

                    <div className="basis-5/12">
                        <label htmlFor="email" className="w-16">Correo:</label>
                        <input type="email" name="email" id="email" className="w-3/4" />
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="tel" className="w-20">Teléfono:</label>
                        <input type="tel" name="tel" id="tel" className="w-8/12" />
                    </div>

                    <div className="basis-1/5">
                        <label htmlFor="age" className="w-12">Edad:</label>
                        <input type="number" name="age" id="age" className="w-1/2" />
                    </div>

                    <div className="basis-3/4">
                        <label htmlFor="typePer" className="w-36">Tipo de Cliente:</label>

                        <select name="typePer" id="typePer" className="w-1/2">
                            <option value="">0</option>
                        </select>
                    </div>

                    <div className="basis-1/5 flex gap-3 items-center">
                        <label htmlFor="sex" className="w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="m" />
                            <label htmlFor="m">M</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="h" />
                            <label htmlFor="h">H</label>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center">
                    <input type="submit" value="Guardar" className='bg-teal-400 text-teal-800 py-2 px-8 rounded-xl border-none uppercase font-semibold w-3/5 mt-12 cursor-pointer hover:bg-teal-600 hover:text-white' />
                </div>

                <XCircleIcon className={`${styles.close} absolute w-12 h-12 top-1/2 text-teal-500 cursor-pointer hover:text-teal-600`} />

            </fieldset>
        </form>

    )
}
