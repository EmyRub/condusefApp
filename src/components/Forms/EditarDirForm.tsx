import styles from './Form.module.css';

export default function EditarDirForm() {
    return (

        <form className={`${styles.bgModal} fixed top-0 left-0 w-full h-full`} data-formulario>

            <fieldset className={`${styles.modal} absolute left-1/2 top-1/2 w-11/12 lg:w-3/5 p-6 lg:p-12`}>

                <legend className='w-full lg:w-3/4 xl:px-4'>Actualización de Dirección</legend>

                <div className="flex justify-between items-center flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="cp" className="w-full lg:w-8 text-center lg:text-left">C.P.</label>
                        <input type="text" name="cp" id="cp" className="w-full lg:w-4/5" />
                    </div>

                    <div className="basis-full lg:basis-1/2">
                        <label htmlFor="loc" className="w-full lg:w-20 text-center lg:text-left">Localidad:</label>
                        <input type="text" name="loc" id="loc" className="w-full lg:w-3/4" />
                    </div>

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="edo" className="w-full lg:w-14 text-center lg:text-left">Estado:</label>
                        <input type="text" name="edo" id="edo" className="w-full lg:w-4/5" />
                    </div>

                    <div className="basis-full lg:basis-1/2">
                        <label htmlFor="muni" className="w-full lg:w-20 text-center lg:text-left">Municipio:</label>
                        <input type="text" name="muni" id="muni" className="w-full lg:w-3/4" />
                    </div>

                </div>

                <div className="flex justify-center">
                    <input type="submit" value="Guardar" className='bg-teal-400 text-teal-800 py-2 px-8 rounded-xl border-none uppercase font-semibold w-3/5 mt-12 cursor-pointer hover:bg-teal-600 hover:text-white' />
                </div>
            </fieldset>
        </form>
    )
}
