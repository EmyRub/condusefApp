import './form.module.css';

export default function ReuneForm() {
    return (
        <form autoComplete="on" data-formulario>

            <fieldset className="flex justify-between items-center flex-wrap gap-10 md:gap-12 p-6 lg:p-12">

                <div className="basis-full lg:basis-1/2">
                    <label htmlFor="ente" className="w-full lg:w-32 text-center lg:text-left">Número del ente:</label>
                    <input type="number" name="ente" id="ente" className="w-full lg:w-1/2" readOnly disabled />
                </div>

                <div className="basis-full lg:basis-2/5">
                    <label htmlFor="sucur" className="w-full lg:w-16 text-center xl:text-left">Sucursal:</label>
                    <input type="number" name="sucur" id="sucur" className="w-full lg:w-3/5" readOnly disabled />
                </div>

                <div className="basis-full lg:basis-1/2">
                    <label htmlFor="recl" className="w-full lg:w-56 text-center">¿El reclamo o Aclaración es de objeto monetario?</label>
                    <input type="checkbox" name="recl" id="recl" className='w-full lg:w-1/5' />
                </div>

                <div className="basis-full lg:basis-2/5">
                    <label htmlFor="rever" className="w-full lg:w-16 text-center xl:text-left">Rever:</label>
                    <input type="checkbox" name="rever" id="rever" className='w-full lg:w-1/6' />
                </div>

            </fieldset>

            <fieldset className='p-6 lg:p-12'>

                <legend className='w-full md:w-1/2 xl:px-4'>Datos de la persona</legend>

                <div className="flex justify-between flex-wrap gap-y-10 gap-x-2">

                    <div className="basis-full">
                        <label htmlFor="cliente" className="w-full lg:w-36 text-center lg:text-left">Nombre del Cliente:</label>
                        <input type="text" name="cliente" id="cliente" className="w-full lg:w-3/4" readOnly disabled />
                    </div>
                    
                    <div className="basis-full lg:basis-1/2">
                        <label htmlFor="email" className="w-full lg:w-16 text-center lg:text-left">Correo:</label>
                        <input type="email" name="email" id="email" className="w-full lg:w-3/4" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="tel" className="w-full lg:w-20 text-center xl:text-left">Teléfono:</label>
                        <input type="tel" name="tel" id="tel" className="w-full lg:w-3/5" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-1/5">
                        <label htmlFor="age" className="w-full lg:w-12 text-center lg:text-left">Edad:</label>
                        <input type="number" name="age" id="age" className="w-full lg:w-1/2" readOnly disabled />
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

                    <div className="basis-full lg:basis-1/2">
                        <label htmlFor="typePer" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Tipo de Persona:</label>

                        <select name="typePer" id="typePer" className="w-full lg:w-1/2 text-center lg:text-left">
                            <option value="">Física</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="pori" className="w-full lg:w-12 text-center lg:text-left">PORI:</label>
                        <input type="checkbox" name="pori" id="pori" className='lg:w-12 w-full' />

                    </div>

                    <div className="basis-full lg:basis-1/2">
                        <label htmlFor="exg" className="w-full lg:w-40 text-center lg:text-left">Si es del extranjero:</label>
                        <input type="checkbox" name="exg" id="exg" className='w-full lg:w-12' />
                    </div>

                </div>
            </fieldset>

            <fieldset className='p-6 xl:p-12'>

                <legend className='w-full md:w-1/2 xl:px-4'>Datos de Comunicación</legend>

                <div className="flex justify-between flex-wrap gap-y-16 gap-x-2">

                    <div className="basis-full lg:basis-1/4">
                        <label htmlFor="mes" className="w-full lg:w-12 text-center lg:text-left">Mes:</label>
                        <input id="mes" type="number" className="w-full lg:w-4/6" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-2/6">
                        <label htmlFor="FReg" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Fecha de Registro:</label>
                        <input type="date" name="FReg" id="FReg" className="w-full lg:w-1/2 text-center" />
                    </div>

                    <div className="basis-full lg:basis-2/6">
                        <label htmlFor="FeAtn" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Fecha de Atención</label>
                        <input type="date" name="FeAtn" id="FeAtn" className="w-full lg:w-1/2 text-center" />
                    </div>

                    <div className="basis-full lg:basis-1/3">
                        <label htmlFor="eReg" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Estado de registro</label>

                        <select name="eReg" id="eReg" className="w-full lg:w-1/2 text-center">
                            <option value="">Concluido</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-2/6">
                        <label htmlFor="nAtn" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Nivel de Atención:</label>

                        <select name="nAtn" id="nAtn" className="w-full lg:w-1/2 text-center">
                            <option value="">Vía Eletrónica</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-1/4">
                        <label htmlFor="queja" className="w-full lg:w-28 text-center lg:text-left mb-2 lg:mb-0">Tipo de Queja</label>

                        <select name="queja" id="queja" className="w-full lg:w-5/12 text-center">
                            <option value="">Consulta</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-1/3">
                        <label htmlFor="nProd" className="w-full lg:w-40 text-center lg:text-left mb-2 lg:mb-0">Número de Producto:</label>

                        <select name="nProd" id="nProd" className="w-full lg:w-5/12 text-center">
                            <option value="">14653216</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-2/6">
                        <label htmlFor="foConduf" className="w-full lg:w-28 text-center lg:text-left">Folio condusef:</label>
                        <input type="number" name="foConduf" id="foConduf" className="w-full lg:w-3/5" readOnly disabled />
                    </div>

                    <div className="basis-full lg:basis-1/4">
                        <label htmlFor="FoAtn" className="w-full lg:w-32 text-center lg:text-left">Folio de Atención</label>
                        <input type="number" name="FoAtn" id="FoAtn" className="w-full lg:w-1/3" readOnly disabled />
                    </div>


                    <div className="basis-full lg:basis-1/2">
                        <label htmlFor="mCom" className="w-full lg:w-48 text-center lg:text-left mb-2 lg:mb-0">Medio de Comunicación:</label>

                        <select name="mCom" id="mCom" className="w-full lg:w-1/2 text-center">
                            <option value="">Correo Electrónico</option>
                        </select>
                    </div>

                    <div className="basis-full lg:basis-5/12">
                        <label htmlFor="causa" className="w-full lg:w-12 text-center lg:text-left">Causa:</label>
                        <input type="number" name="causa" id="causa" className="w-full lg:w-10/12" readOnly disabled />
                    </div>

                </div>

            </fieldset>

            <div className="flex gap-2 justify-between items-start mb-8">

                <fieldset className="basis-1/2">

                    <legend className='w-11/12'>Datos Generales</legend>

                    <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

                        <div className="basis-full">
                            <label htmlFor="fnot" className="w-2/5">Fecha de Notificación:</label>
                            <input type="date" name="fnot" id="fnot" className="w-3/5" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="freso" className="w-2/5">Fecha de Resolución:</label>
                            <input type="date" name="freso" id="freso" className="w-3/5" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="tre" className="w-2/5">Tipo de Resolución:</label>
                            <select name="tre" id="tre" className="w-3/5">
                                <option value=""></option>
                            </select>
                        </div>

                    </div>
                </fieldset>

                <fieldset className="basis-1/2">
                    <legend className="w-11/12">Datos del Reclamo por Abono</legend>
                    <div className="flex justify-between flex-wrap gap-y-10 gap-x-1">

                        <div className="basis-full">
                            <label htmlFor="montRe" className="w-1/2">Monto Reclamado:</label>
                            <input type="number" name="montRe" id="montRe" className="w-1/2" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="fAbon" className="w-1/2">Fecha de Abono:</label>
                            <input type="date" name="fAbon" id="fAbon" className="w-1/2" />
                        </div>

                        <div className="basis-full">
                            <label htmlFor="mAbo" className="w-1/2">Monto Abonado:</label>
                            <input type="number" name="mAbo" id="mAbo" className="w-1/2" />
                        </div>
                    </div>
                </fieldset>

            </div>

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
