
export default function RedecoForm() {
    return (

        <form autoComplete="on" data-formulario>

            <fieldset className="flex justify-between items-center flex-wrap gap-12 md:gap-12 p-6 lg:p-12">

                <div className="basis-full lg:basis-1/2">
                    <label htmlFor="ente" className="w-full lg:w-32 text-center lg:text-left">Número del ente:</label>
                    <input type="number" name="ente" id="ente" className="w-full lg:w-1/2" readOnly disabled />
                </div>

                <div className="basis-full lg:basis-2/5">
                    <label htmlFor="sucur" className="w-full lg:w-16 text-center xl:text-left">Sucursal:</label>
                    <input type="number" name="sucur" id="sucur" className="w-full lg:w-3/5" readOnly disabled />
                </div>

            </fieldset>

            <fieldset className='p-6 lg:p-12'>

                <legend className='w-full md:w-1/2 xl:px-4'>Datos de la persona</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-full">
                        <label htmlFor="cliente" className="w-full lg:w-36 text-center lg:text-left">Nombre del Cliente:</label>
                        <input type="text" name="cliente" id="cliente" className="w-full lg:w-3/4" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-64">
                        <label htmlFor="tel" className="w-full lg:w-20 text-center lg:text-left mb-2">Teléfono:</label>
                        <input type="tel" name="tel" id="tel" className="w-full lg:w-36" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-1/2">
                        <label htmlFor="email" className="w-full lg:w-16 text-center lg:text-left mb-2">Correo:</label>
                        <input type="email" name="email" id="email" className="w-full lg:w-80" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-32">
                        <label htmlFor="age" className="w-full lg:w-12 text-center lg:text-left mb-2">Edad:</label>
                        <input type="number" name="age" id="age" className="w-full lg:w-20" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-1/5 flex gap-3 items-center justify-center lg:justify-start">
                        <label htmlFor="sex" className="lg:w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="m" readOnly disabled />
                            <label htmlFor="m">M</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="h" readOnly disabled />
                            <label htmlFor="h">H</label>
                        </div>
                    </div>

                    <div className="basis-full lg:basis-80">
                        <label htmlFor="typePer" className="w-full lg:w-36 text-center lg:text-left mb-2">Tipo de Persona:</label>

                        <select name="typePer" id="typePer" className="w-full lg:w-36 text-center lg:text-left" disabled>
                            <option value="">Física</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-32">
                        <label htmlFor="pori" className="w-full lg:w-12 text-center lg:text-left mb-2">PORI:</label>
                        <input type="checkbox" name="pori" id="pori" className='lg:w-12 w-full' />
                    </div>
                </div>
            </fieldset>

            <fieldset className='p-6 lg:p-12'>

                <legend className='w-full md:w-1/2 lg:px-4'>Datos de Comunicación</legend>

                <div className="flex justify-between flex-wrap gap-y-16 gap-x-2">

                    <div className="basis-full lg:basis-44">
                        <label htmlFor="mes" className="w-full lg:w-12 text-center lg:text-left">Mes:</label>
                        <input id="mes" type="number" className="w-full lg:w-32" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-72">
                        <label htmlFor="FReg" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Fecha de Registro:</label>
                        <input type="date" name="FReg" id="FReg" className="w-full lg:w-36 text-center" />
                    </div>

                    <div className="basis-full lg:basis-72">
                        <label htmlFor="FeAtn" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Fecha de Atención</label>
                        <input type="date" name="FeAtn" id="FeAtn" className="w-full lg:w-36 text-center" />
                    </div>

                    <div className="basis-full lg:basis-72">
                        <label htmlFor="eReg" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Estado de registro</label>

                        <select name="eReg" id="eReg" className="w-full lg:w-36 text-center">
                            <option value="">Concluido</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-72">
                        <label htmlFor="nAtn" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Nivel de Atención:</label>

                        <select name="nAtn" id="nAtn" className="w-full lg:w-36 text-center">
                            <option value="">Vía Eletrónica</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-64">
                        <label htmlFor="queja" className="w-full lg:w-28 text-center lg:text-left mb-2 lg:mb-0">Tipo de Queja</label>

                        <select name="queja" id="queja" className="w-full lg:w-36 text-center">
                            <option value="">Consulta</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-72">
                        <label htmlFor="nProd" className="w-full lg:w-40 text-center lg:text-left mb-2 lg:mb-0">Número de Producto:</label>

                        <select name="nProd" id="nProd" className="w-full lg:w-32 text-center">
                            <option value="">14653216</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-72">
                        <label htmlFor="foConduf" className="w-full lg:w-28 text-center lg:text-left">Folio condusef:</label>
                        <input type="number" name="foConduf" id="foConduf" className="w-full lg:w-44" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-56">
                        <label htmlFor="FoAtn" className="w-full lg:w-32 text-center lg:text-left">Folio de Atención</label>
                        <input type="number" name="FoAtn" id="FoAtn" className="w-full lg:w-24" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-72">
                        <label htmlFor="causa" className="w-full lg:w-12 text-center lg:text-left">Causa:</label>
                        <input type="number" name="causa" id="causa" className="w-full lg:w-48" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-96">
                        <label htmlFor="mCom" className="w-full lg:w-48 text-center lg:text-left mb-2 lg:mb-0">Medio de Comunicación:</label>

                        <select name="mCom" id="mCom" className="w-full lg:w-48 text-center">
                            <option value="">Correo Electrónico</option>
                        </select>
                    </div>
                </div>
            </fieldset>

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
        </form>
    )
}
