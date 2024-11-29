
export default function ReuneForm() {
    return (
        <form autoComplete="on" className="p-8 bg-slate-50 rounded-2xl">

            <select name="empresa" id="empresa">
                <option value="reune" selected>REUNE</option>
                <option value="redeco">REDECO</option>
            </select>

            <fieldset className="flex">
                <div>
                    <label htmlFor="ente">N° de ente</label>
                    <p></p>
                    <button></button>
                </div>

                <div>
                    <label htmlFor="suc">Sucursal</label>
                    <p></p>
                    <button></button>
                </div>
            </fieldset>

            <fieldset>
                <label htmlFor="">Nombre del Cliente</label>
                <label htmlFor="">Teléfono</label>
                <label htmlFor="">Correo</label>
                <div className="flex gap-3 items-center">
                    <label htmlFor="exg">Si es extranjero</label>
                    <input type="checkbox" name="exg" id="exg" />
                </div>
            </fieldset>

            <fieldset>
                <legend>Datos de la persona</legend>
                <div className="">
                    <label htmlFor="type">Tipo de Persona</label>
                    <select name="type" id="type"></select>
                </div>

                <div className="">
                    <label htmlFor="age">Edad</label>
                    <span id="age">00</span>
                </div>

                <div className="flex gap-3 items-center">
                    <label>Sexo</label>

                    <div className="flex gap-1">
                        <input type="radio" name="sex" id="m" />
                        <label htmlFor="m">M</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="radio" name="sex" id="h" />
                        <label htmlFor="h">H</label>
                    </div>
                </div>
            </fieldset>

            <fieldset className="p-12 border-teal-400 border-2 rounded-2xl">

                <legend className="w-1/2 py-2 px-4 text-center bg-teal-300 rounded-full uppercase font-bold text-stone-800">Datos de la institución</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">
                
                    <div className="basis-1/2">
                        <label htmlFor="inst" className="inline-block w-1/3">Nombre de la institución:</label>
                        <input id="inst" type="text" className="border-b-2 border-b-teal-300 inline-block w-2/3" readOnly disabled />
                    </div>

                    <div className="basis-5/12">
                        <label htmlFor="sect" className="inline-block w-1/5">Sector:</label>
                        <input type="text" name="sect" id="sect" className="border-b-2 border-b-teal-300 inline-block w-4/5" readOnly disabled />
                    </div>

                    <div className="basis-1/3">
                        <label htmlFor="loc" className="inline-block w-1/5">Localidad:</label>
                        <input type="text" name="loc" id="loc" className="border-b-2 border-b-teal-300 w-4/5" readOnly disabled />
                    </div>

                    <div className="basis-3/12">
                        <label htmlFor="edo" className="inline-block w-1/5">Estado:</label>
                        <input type="text" name="edo" id="edo" className="border-b-2 border-b-teal-300 inline-block w-4/5" readOnly disabled />
                    </div>

                    <div className="basis-1/3">
                        <label htmlFor="muni" className="inline-block w-1/5">Municipio:</label>
                        <input type="text" name="muni" id="muni" className="border-b-2 border-b-teal-300 inline-block w-4/5" readOnly disabled />
                    </div>


                    <div className="basis-1/3">
                        <label htmlFor="tyLoc" className="inline-block w-1/4">Tipo Localidad:</label>
                        <input type="text" name="tyLoc" id="tyLoc" className="border-b-2 border-b-teal-300 inline-block w-9/12" readOnly disabled />
                    </div>


                    <div className="basis-3/12">
                        <label htmlFor="col" className="inline-block w-1/5">Colonia:</label>
                        <input type="text" name="col" id="col" className="border-b-2 border-b-teal-300 inline-block w-4/5" readOnly disabled />
                    </div>

                    <div className="basis-3/12">
                        <label htmlFor="cp" className="inline-block w-1/5">C.P.</label>
                        <input type="text" name="cp" id="cp" className="border-b-2 border-b-teal-300 inline-block w-4/5" readOnly disabled />
                    </div>

                    <select name="" id="">
                        <option value="">Ninguno</option>
                    </select>
                </div>

            </fieldset>

        </form>
    )
}
