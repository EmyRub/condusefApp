import styles from './Form.module.css';

export default function RegistroNoCliente({ setModal }: any) {

    const handleModal = () => {
        setModal(false)
    }

    return (

        <form className={`${styles.bgModal} fixed top-0 left-0 w-full h-full overflow-y-scroll py-12`} data-formulario>

            <fieldset className={`${styles.modal} absolute left-1/2 top-1/2 w-11/12 lg:w-3/5 p-6 lg:p-12 `}>

                <legend className='w-full lg:w-3/4 xl:px-4'>Registro No Cliente</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-full">
                        <label htmlFor="name" className="w-full lg:w-44 text-center lg:text-left">Nombre de la Persona:</label>
                        <input type="text" name="name" id="name" className="w-full lg:w-3/4" />
                    </div>

                    <div className="basis-full lg:basis-80">
                        <label htmlFor="email" className="w-full lg:w-16 text-center lg:text-left">Correo:</label>
                        <input type="email" name="email" id="email" className="w-full lg:w-64" />
                    </div>

                    <div className="basis-full lg:basis-64">
                        <label htmlFor="tel" className="w-full lg:w-20 text-center lg:text-left">Teléfono:</label>
                        <input type="tel" name="tel" id="tel" className="w-full lg:w-36" />
                    </div>

                    <div className="basis-full lg:basis-32">
                        <label htmlFor="age" className="w-full lg:w-12 text-center lg:text-left mb-2">Edad:</label>
                        <input type="number" name="age" id="age" className="w-full lg:w-20" />
                    </div>

                    <div className="basis-full lg:basis-72">
                        <label htmlFor="typePer" className="w-full lg:w-32 text-center lg:text-left">Tipo de Cliente:</label>

                        <select name="typePer" id="typePer" className="w-full lg:w-32 text-center">
                            <option value="">0</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-1/5 flex gap-3 items-center justify-center lg:justify-start">
                        <label htmlFor="sex" className="lg:w-12">Sexo:</label>

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

                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-12">
                    <input
                        type="submit"
                        value="Guardar"
                        className='bg-teal-400 text-white py-2 px-8 rounded-xl border-none uppercase font-semibold inline-block w-3/5 lg:w-2/5 cursor-pointer hover:bg-teal-600 hover:text-white' />

                    <input
                        type="submit"
                        value="Cancelar"
                        onClick={handleModal}
                        className='bg-teal-400 text-white py-2 px-8 rounded-xl border-none uppercase font-semibold inline-block w-3/5 lg:w-2/5 cursor-pointer hover:bg-teal-600 hover:text-white' />
                </div>


            </fieldset>
        </form>

    )
}
