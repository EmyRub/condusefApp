import styles from './Form.module.css';

export default function EditarDirForm() {
    return (

        <form className={`${styles.bgModal} fixed top-0 left-0 w-full h-full`} data-formulario>

            <fieldset className={`${styles.modal} absolute left-1/2 top-1/2 w-3/5`}>

                <legend className='w-3/4'>Actualización de Dirección</legend>

                <div className="flex justify-between items-center flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-5/12">
                        <label htmlFor="cp" className="w-8">C.P.</label>
                        <input type="text" name="cp" id="cp" className="w-4/5" />
                    </div>

                    <div className="basis-1/2">
                        <label htmlFor="loc" className="w-20">Localidad:</label>
                        <input type="text" name="loc" id="loc" className="w-3/4" />
                    </div>

                    <div className="basis-5/12">
                        <label htmlFor="edo" className="w-14">Estado:</label>
                        <input type="text" name="edo" id="edo" className="w-4/5" />
                    </div>

                    <div className="basis-1/2">
                        <label htmlFor="muni" className="w-20">Municipio:</label>
                        <input type="text" name="muni" id="muni" className="w-3/4" />
                    </div>



                </div>

                <div className="flex justify-center">
                    <input type="submit" value="Guardar" className='bg-teal-400 text-teal-800 py-2 px-8 rounded-xl border-none uppercase font-semibold w-3/5 mt-12 cursor-pointer hover:bg-teal-600 hover:text-white' />
                </div>
            </fieldset>
        </form>
    )
}
