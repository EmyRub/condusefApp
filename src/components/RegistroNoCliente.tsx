
export default function RegistroNoCliente() {
    return (

        <form>

            <fieldset className="p-12 border-teal-400 border-2 rounded-2xl mb-8">

                <legend className="w-1/2 py-2 px-4 text-center bg-teal-300 rounded-full uppercase font-bold text-teal-900">Datos de la persona</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-1/2">
                        <label htmlFor="name" className="inline-block w-36">Nombre de la Persona:</label>
                        <input type="text" name="name" id="name" className="border-b-2 border-b-teal-300 w-8/12 focus:ring-teal-500 focus:border-teal-500" />
                    </div>

                    <div className="basis-5/12">
                        <label htmlFor="tel" className="inline-block w-20">Teléfono:</label>
                        <input type="tel" name="tel" id="tel" className="border-b-2 border-b-teal-300 w-9/12" readOnly disabled />
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="email" className="inline-block w-16">Correo:</label>
                        <input type="email" name="email" id="email" className="border-b-2 border-b-teal-300 w-3/4" readOnly disabled />
                    </div>

                    <div className="basis-1/5">
                        <label htmlFor="age" className="inline-block w-12">Edad:</label>
                        <input type="number" name="age" id="age" className="border-b-2 border-b-teal-300 w-1/2" readOnly disabled />
                    </div>

                    <div className="basis-1/5 flex gap-3 items-center">
                        <label htmlFor="sex" className="inline-block w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="m" />
                            <label htmlFor="m">M</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="h" />
                            <label htmlFor="h">H</label>
                        </div>
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="typePer" className="inline-block w-36">Tipo de Persona:</label>

                        <select name="typePer" id="typePer" className="inline-block w-1/2">
                            <option value="">0</option>
                        </select>
                    </div>

                    <div className="basis-1/5">
                        <label htmlFor="pori" className="inline-block w-12">PORI:</label>
                        <input type="checkbox" name="pori" id="pori" />

                    </div>

                    <div className="basis-1/5">
                        <label htmlFor="exg" className="inline-block w-40">Si es del extranjero:</label>
                        <input type="checkbox" name="exg" id="exg" />
                    </div>

                </div>
            </fieldset>
        </form>
    )
}
