
export default function RedecoForm() {
    return (

        <form autoComplete="on" data-formulario>

            <fieldset className="flex justify-between items-center flex-wrap gap-12">

                <div className="basis-1/2">
                    <label htmlFor="ente" className="w-32">Número del ente:</label>
                    <input type="number" name="ente" id="ente" className="w-2/6" readOnly disabled />
                </div>

                <div className="basis-1/3">
                    <label htmlFor="sucur" className="w-16">Sucursal:</label>
                    <input type="number" name="sucur" id="sucur" className="w-2/6" readOnly disabled />
                </div>

            </fieldset>

            <fieldset>

                <legend className='w-1/2'>Datos de la persona</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-1/2">
                        <label htmlFor="cliente" className="w-36">Nombre del Cliente:</label>
                        <input type="text" name="cliente" id="cliente" className="w-8/12" readOnly disabled />
                    </div>

                    <div className="basis-5/12">
                        <label htmlFor="tel" className="w-20">Teléfono:</label>
                        <input type="tel" name="tel" id="tel" className="w-9/12" readOnly disabled />
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="email" className="w-16">Correo:</label>
                        <input type="email" name="email" id="email" className="w-3/4" readOnly disabled />
                    </div>

                    <div className="basis-1/5">
                        <label htmlFor="age" className="w-12">Edad:</label>
                        <input type="number" name="age" id="age" className="w-1/2" readOnly disabled />
                    </div>

                    <div className="basis-1/5 flex gap-3 items-center">
                        <label htmlFor="sex" className="w-12">Sexo:</label>

                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="m" readOnly disabled />
                            <label htmlFor="m">M</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" name="sex" id="h" readOnly disabled />
                            <label htmlFor="h">H</label>
                        </div>
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="typePer" className="w-36">Tipo de Persona:</label>

                        <select name="typePer" id="typePer" className="w-1/2" disabled>
                            <option value="">Física</option>
                        </select>
                    </div>

                    <div className="basis-1/5">
                        <label htmlFor="pori" className="w-12">PORI:</label>
                        <input type="checkbox" name="pori" id="pori" />
                    </div>
                </div>
            </fieldset>

            <fieldset>

                <legend className='w-1/2'>Datos de Comunicación</legend>

                <div className="flex justify-between flex-wrap gap-y-16 gap-x-2">

                    <div className="basis-1/4">
                        <label htmlFor="mes" className="w-12">Mes:</label>
                        <input id="mes" type="number" className="w-4/6" readOnly disabled />
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="FReg" className="w-36">Fecha de Registro:</label>
                        <input type="date" name="FReg" id="FReg" className="w-1/2" />
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="FeAtn" className="w-36">Fecha de Atención</label>
                        <input type="date" name="FeAtn" id="FeAtn" className="w-1/2" />
                    </div>

                    <div className="basis-1/3">
                        <label htmlFor="eReg" className="w-36">Estado de registro</label>

                        <select name="eReg" id="eReg" className="w-1/2">
                            <option value="">Concluido</option>
                        </select>
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="nAtn" className="w-36">Nivel de Atención:</label>

                        <select name="nAtn" id="nAtn" className="w-1/2">
                            <option value="">Vía Eletrónica</option>
                        </select>
                    </div>

                    <div className="basis-1/4">
                        <label htmlFor="queja" className="w-28">Tipo de Queja</label>

                        <select name="queja" id="queja" className="w-5/12">
                            <option value="">Consulta</option>
                        </select>
                    </div>

                    <div className="basis-1/3">
                        <label htmlFor="nProd" className="w-40">Número de Producto:</label>

                        <select name="nProd" id="nProd" className="w-5/12" disabled>
                            <option value="">12584302</option>
                        </select>
                    </div>
                    
                    <div className="basis-2/6">
                        <label htmlFor="foConduf" className="w-28">Folio condusef:</label>
                        <input type="number" name="foConduf" id="foConduf" className="w-3/5" readOnly disabled />
                    </div>
                    
                    <div className="basis-1/4">
                        <label htmlFor="FoAtn" className="w-32">Folio de Atención</label>
                        <input type="number" name="FoAtn" id="FoAtn" className="w-1/3" readOnly disabled />
                    </div>
                    

                    <div className="basis-1/2">
                        <label htmlFor="mCom" className="w-48">Medio de Comunicación:</label>

                        <select name="mCom" id="mCom" className="w-1/2">
                            <option value="">Correo Electrónico</option>
                        </select>
                    </div>

                    <div className="basis-5/12">
                        <label htmlFor="causa" className="w-12">Causa:</label>
                        <input type="number" name="causa" id="causa" className="w-10/12" readOnly disabled />
                    </div>

                </div>
            </fieldset>

            <fieldset>

                <legend className='w-1/2'>Datos de la institución</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

                    <div className="basis-full">
                        <label htmlFor="inst" className="w-46">Nombre de la institución:</label>
                        <input id="inst" type="text" className="w-4/5" readOnly disabled />
                    </div>

                    <div className="basis-1/2">
                        <label htmlFor="sect" className="w-14">Sector:</label>
                        <input type="text" name="sect" id="sect" className="w-4/5" readOnly disabled />
                    </div>

                    <div className="basis-1/3">
                        <label htmlFor="cp" className="w-8">C.P.</label>
                        <input type="text" name="cp" id="cp" className="w-4/5" readOnly disabled />
                    </div>

                    <div className="basis-1/3">
                        <label htmlFor="edo" className="w-14">Estado:</label>
                        <input type="text" name="edo" id="edo" className="w-4/5" readOnly disabled />
                    </div>

                    <div className="basis-1/3">
                        <label htmlFor="muni" className="w-20">Municipio:</label>
                        <input type="text" name="muni" id="muni" className="w-3/5" readOnly disabled />
                    </div>

                    <div className="basis-1/4">
                        <label htmlFor="loc" className="w-20">Localidad:</label>
                        <input type="text" name="loc" id="loc" className="w-3/5" readOnly disabled />
                    </div>

                    <div className="basis-2/5">
                        <label htmlFor="tyLoc" className="w-28">Tipo Localidad:</label>
                        <input type="text" name="tyLoc" id="tyLoc" className="w-1/2" readOnly disabled />
                    </div>

                    <div className="basis-1/3">
                        <label htmlFor="col" className="w-16">Colonia:</label>
                        <input type="text" name="col" id="col" className="w-4/6" readOnly disabled />
                    </div>

                    
                    <select name="" id="" className="basis-1/4">
                        <option value="">Ninguno</option>
                    </select>

                </div>

            </fieldset>
        </form>
    )
}
