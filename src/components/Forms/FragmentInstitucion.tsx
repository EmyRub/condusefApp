
export default function FragmentInstitucion() {
    return (

        <fieldset className='p-6 lg:p-12 lg:basis-1/2'>

            <legend className='w-full md:w-1/2 lg:px-4'>Datos de la institución</legend>

            <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

                <div className="basis-full">
                    <label htmlFor="inst" className="w-full lg:w-1/5 text-center lg:text-left mb-2">Nombre de la institución:</label>
                    <input id="inst" type="text" className="w-full lg:w-4/5" readOnly disabled />
                </div>

                <div className="basis-full lg:basis-4/6">
                    <label htmlFor="sect" className="w-full lg:w-14 text-center lg:text-left mb-2">Sector:</label>
                    <input type="text" name="sect" id="sect" className="w-full lg:w-4/5" readOnly disabled />
                </div>

                <div className="basis-full lg:basis-48">
                    <label htmlFor="cp" className="w-full lg:w-8 text-center lg:text-left mb-2">C.P.</label>
                    <input type="text" name="cp" id="cp" className="w-full lg:w-32" readOnly disabled />
                </div>

                <div className="basis-full lg:basis-60">
                    <label htmlFor="edo" className="w-full lg:w-14 text-center lg:text-left mb-2">Estado:</label>
                    <input type="text" name="edo" id="edo" className="w-full lg:w-36" readOnly disabled />
                </div>

                <div className="basis-full lg:basis-60">
                    <label htmlFor="muni" className="w-full lg:w-20 text-center lg:text-left mb-2">Municipio:</label>
                    <input type="text" name="muni" id="muni" className="w-full lg:w-36" readOnly disabled />
                </div>

                <div className="basis-full lg:basis-60">
                    <label htmlFor="loc" className="w-full lg:w-20 text-center lg:text-left mb-2">Localidad:</label>
                    <input type="text" name="loc" id="loc" className="w-full lg:w-36" readOnly disabled />
                </div>

                <div className="basis-full lg:basis-64">
                    <label htmlFor="tyLoc" className="w-full lg:w-28 text-center lg:text-left mb-2">Tipo Localidad:</label>
                    <input type="text" name="tyLoc" id="tyLoc" className="w-full lg:w-36" readOnly disabled />
                </div>

                <div className="basis-full lg:basis-1/2 lg:flex gap-2 items-center">
                    <label htmlFor="col" className="w-full lg:w-16 text-center lg:text-left">Colonia:</label>
                    <input type="text" name="col" id="col" className="w-full lg:w-12 mb-2" readOnly disabled />
                    <select name="" id="" className="w-full lg:w-72 text-center">
                        <option value="">Ninguno</option>
                    </select>
                </div>

            </div>

        </fieldset>
    )
}
