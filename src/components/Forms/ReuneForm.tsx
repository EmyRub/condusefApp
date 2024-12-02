
export default function ReuneForm() {
    return (
        <form autoComplete="on" className="p-8 bg-slate-50 rounded-2xl w-9/12 mx-auto">

            <div className="flex justify-center bg-teal-500 rounded-2xl mb-12">
                <select name="empresa" id="empresa" className="w-1/4 my-10 text-center">
                    <option value="reune" selected>REUNE</option>
                    <option value="redeco">REDECO</option>
                </select>
            </div>

            <fieldset className="p-12 border-2 rounded-2xl mb-8 flex justify-center items-center flex-wrap gap-12">

                <button className="bg-teal-500 px-8 py-3 rounded-2xl text-white hover:bg-teal-700 uppercase font-bold">Para No Clientes</button>

                <button className="bg-teal-500 px-8 py-3 rounded-2xl text-white hover:bg-teal-700 uppercase font-bold">Editar dirección</button>

            </fieldset>

            <fieldset className="p-12 border-2 rounded-2xl mb-8 flex justify-between items-center flex-wrap gap-12">

                <div className="basis-1/2">
                    <label htmlFor="ente" className="inline-block w-32">Número del ente:</label>
                    <input type="number" name="ente" id="ente" className="border-b-2 border-b-teal-300 inline-block w-2/6" readOnly disabled />
                </div>

                <div className="basis-1/3">
                    <label htmlFor="sucur" className="inline-block w-16">Sucursal:</label>
                    <input type="number" name="sucur" id="sucur" className="border-b-2 border-b-teal-300 inline-block w-2/6" readOnly disabled />
                </div>


                <div className="basis-1/2">
                    <label htmlFor="recl" className="inline-block w-96">¿El reclamo o Aclaración es de objeto monetario?:</label>
                    <input type="checkbox" name="recl" id="recl" />
                </div>

                <div className="basis-1/3">
                    <label htmlFor="rever" className="inline-block w-16">Rever:</label>
                    <input type="checkbox" name="rever" id="rever" />
                </div>

            </fieldset>

            <fieldset className="p-12 border-teal-400 border-2 rounded-2xl mb-8">

                <legend className="w-1/2 py-2 px-4 text-center bg-teal-300 rounded-full uppercase font-bold text-teal-900">Datos de la persona</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-1/2">
                        <label htmlFor="cliente" className="inline-block w-36">Nombre del Cliente:</label>
                        <input type="text" name="cliente" id="cliente" className="border-b-2 border-b-teal-300 inline-block w-8/12" readOnly disabled />
                    </div>

                    <div className="basis-5/12">
                        <label htmlFor="tel" className="inline-block w-20">Teléfono:</label>
                        <input type="tel" name="tel" id="tel" className="border-b-2 border-b-teal-300 inline-block w-9/12" readOnly disabled />
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="email" className="inline-block w-16">Correo:</label>
                        <input type="email" name="email" id="email" className="border-b-2 border-b-teal-300 inline-block w-3/4" readOnly disabled />
                    </div>

                    <div className="basis-1/5">
                        <label htmlFor="age" className="inline-block w-12">Edad:</label>
                        <input type="number" name="age" id="age" className="border-b-2 border-b-teal-300 inline-block w-1/2" readOnly disabled />
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


            <fieldset className="p-12 border-teal-400 border-2 rounded-2xl mb-8">

                <legend className="w-1/2 py-2 px-4 text-center bg-teal-300 rounded-full uppercase font-bold text-teal-900">Datos de Comunicación</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-1/4">
                        <label htmlFor="mes" className="inline-block w-12">Mes:</label>
                        <input id="mes" type="number" className="border-b-2 border-b-teal-300 inline-block w-4/6" readOnly disabled />
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="FReg" className="inline-block w-36">Fecha de Registro:</label>
                        <input type="date" name="FReg" id="FReg" className="border-b-2 border-b-teal-300 inline-block w-1/2" />
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="FeAtn" className="inline-block w-36">Fecha de Atención</label>
                        <input type="date" name="FeAtn" id="FeAtn" className="border-b-2 border-b-teal-300 inline-block w-1/2" />
                    </div>

                    <div className="basis-1/4">
                        <label htmlFor="eReg" className="inline-block w-36">Estado de registro</label>

                        <select name="eReg" id="eReg" className="inline-block w-1/3">
                            <option value="">0</option>
                        </select>
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="nAtn" className="inline-block w-36">Nivel de Atención:</label>

                        <select name="nAtn" id="nAtn" className="inline-block w-1/2">
                            <option value="">Ninguno</option>
                        </select>
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="queja" className="inline-block w-28">Tipo de Queja</label>

                        <select name="queja" id="queja" className="inline-block w-1/2">
                            <option value="">Ninguno</option>
                        </select>
                    </div>

                    <div className="basis-1/4">
                        <label htmlFor="nProd" className="inline-block w-40">Número de Producto:</label>

                        <select name="nProd" id="nProd" className="w-1/4">
                            <option value="">0</option>
                        </select>
                    </div>

                    <div className="basis-2/6">
                        <label htmlFor="mCom" className="inline-block w-48">Medio de Comunicación:</label>

                        <select name="mCom" id="mCom" className="w-1/3">
                            <option value="">0</option>
                        </select>
                    </div>


                    <div className="basis-2/6">
                        <label htmlFor="FoAtn" className="inline-block w-32">Folio de Atención</label>
                        <input type="number" name="FoAtn" id="FoAtn" className="border-b-2 border-b-teal-300 inline-block w-2/5" readOnly disabled />
                    </div>


                    <div className="basis-5/12">
                        <label htmlFor="foConduf" className="inline-block w-28">Folio condusef:</label>
                        <input type="number" name="foConduf" id="foConduf" className="border-b-2 border-b-teal-300 inline-block w-4/6" readOnly disabled />
                    </div>

                    <div className="basis-1/2">
                        <label htmlFor="causa" className="inline-block w-12">Causa:</label>
                        <input type="number" name="causa" id="causa" className="border-b-2 border-b-teal-300 inline-block w-10/12" readOnly disabled />
                    </div>

                </div>

            </fieldset>

            <div className="flex gap-2 justify-between items-start mb-8">

                <fieldset className="p-12 border-teal-400 border-2 rounded-2xl basis-1/2">

                    <legend className="w-1/2 py-2 px-4 text-center bg-teal-300 rounded-full uppercase font-bold text-teal-900">Datos Generales</legend>

                    <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

                        <div className="basis-full">
                            <label htmlFor="fnot" className="inline-block w-2/5">Fecha de Notificación:</label>
                            <input type="date" name="fnot" id="fnot" className="border-b-2 border-b-teal-300 inline-block w-3/5" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="freso" className="inline-block w-2/5">Fecha de Resolución:</label>
                            <input type="date" name="freso" id="freso" className="border-b-2 border-b-teal-300 inline-block w-3/5" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="tre" className="inline-block w-2/5">Tipo de Resolución:</label>
                            <select name="tre" id="tre" className="w-3/5">
                                <option value=""></option>
                            </select>
                        </div>

                    </div>
                </fieldset>

                <fieldset className="p-12 border-teal-400 border-2 rounded-2xl basis-1/2">
                    <legend className="w-11/12 py-2 px-4 text-center bg-teal-300 rounded-full uppercase font-bold text-teal-900">Datos del Reclamo por Abono</legend>
                    <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

                        <div className="basis-full">
                            <label htmlFor="montRe" className="inline-block w-1/2">Monto Reclamado:</label>
                            <input type="number" name="montRe" id="montRe" className="border-b-2 border-b-teal-300 inline-block w-1/2" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="fAbon" className="inline-block w-1/2">Fecha de Abono:</label>
                            <input type="date" name="fAbon" id="fAbon" className="border-b-2 border-b-teal-300 inline-block w-1/2" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="mAbo" className="inline-block w-1/2">Monto Abonado:</label>
                            <input type="number" name="mAbo" id="mAbo" className="border-b-2 border-b-teal-300 inline-block w-1/2" />
                        </div>
                    </div>
                </fieldset>

            </div>

            <fieldset className="p-12 border-teal-400 border-2 rounded-2xl">

                <legend className="w-1/2 py-2 px-4 text-center bg-teal-300 rounded-full uppercase font-bold text-teal-900">Datos de la institución</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

                    <div className="basis-full">
                        <label htmlFor="inst" className="inline-block w-46">Nombre de la institución:</label>
                        <input id="inst" type="text" className="border-b-2 border-b-teal-300 inline-block w-4/5" readOnly disabled />
                    </div>

                    <div className="basis-1/3">
                        <label htmlFor="sect" className="inline-block w-14">Sector:</label>
                        <input type="text" name="sect" id="sect" className="border-b-2 border-b-teal-300 inline-block w-4/5" readOnly disabled />
                    </div>

                    <div className="basis-1/3">
                        <label htmlFor="cp" className="inline-block w-8">C.P.</label>
                        <input type="text" name="cp" id="cp" className="border-b-2 border-b-teal-300 inline-block w-4/5" readOnly disabled />
                    </div>

                    <select name="" id="" className="basis-1/4">
                        <option value="">Ninguno</option>
                    </select>

                    <div className="basis-1/3">
                        <label htmlFor="edo" className="inline-block w-14">Estado:</label>
                        <input type="text" name="edo" id="edo" className="border-b-2 border-b-teal-300 inline-block w-4/5" readOnly disabled />
                    </div>

                    <div className="basis-1/3">
                        <label htmlFor="muni" className="inline-block w-20">Municipio:</label>
                        <input type="text" name="muni" id="muni" className="border-b-2 border-b-teal-300 inline-block w-3/5" readOnly disabled />
                    </div>

                    <div className="basis-1/4">
                        <label htmlFor="loc" className="inline-block w-20">Localidad:</label>
                        <input type="text" name="loc" id="loc" className="border-b-2 border-b-teal-300 w-3/5" readOnly disabled />
                    </div>

                    <div className="basis-5/12">
                        <label htmlFor="tyLoc" className="inline-block w-28">Tipo Localidad:</label>
                        <input type="text" name="tyLoc" id="tyLoc" className="border-b-2 border-b-teal-300 inline-block w-4/6" readOnly disabled />
                    </div>

                    <div className="basis-1/2">
                        <label htmlFor="col" className="inline-block w-16">Colonia:</label>
                        <input type="text" name="col" id="col" className="border-b-2 border-b-teal-300 inline-block w-4/6" readOnly disabled />
                    </div>

                </div>

            </fieldset>

        </form>
    )
}
