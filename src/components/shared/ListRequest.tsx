import { tableCondusef } from "@/types/zod";
import { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

export default function ListRequest() {
    const [db, setDb] = useState([])

    const columns: TableColumn<tableCondusef>[] = [

        {
            name: 'N°',
            selector: (row) => row.NUM_ENTE,
            sortable: true
        },
        {
            name: 'Nombre',
            selector: (row) => row.NOM_CoEnt,
            sortable: true
        },
        {
            name: 'Fecha Registro',
            selector: (row) => row.FEC_REGIS.toString(),
            sortable: true
        },
        {
            name: 'Folio Condusef',
            selector: (row) => row.NUM_FOCON,
            sortable: true
        },
        {
            name: 'Seleccionar',
            cell: (row, index) => (
                <input
                    type="checkbox"
                    // {...register(`reTransaction.${index}.seleccionado`, {
                    //     onChange: (e) => {
                    //         const checked = e.target.checked;

                    //         // Si el checkbox esta deshabilitado, se resetea la cantidad
                    //         if (!checked) {
                    //             setValue(`reTransaction.${index}.cantidad`, 1);
                    //         }

                    //         setValue(`reTransaction.${index}.seleccionado`, checked);
                    //         setValue(`reTransaction.${index}.idProducto`, row.idProducto);
                    //     }
                    // })}
                />
            )
        },

    ];
  
    return (

        <form>

            <fieldset className="flex justify-center gap-8 bg-teal-500 py-6 mb-8 ">
                <div className="flex gap-2 items-center">
                    <label className="text-white" htmlFor="todos">Todos</label>
                    <input type="radio" name="filtro" id="todos" />
                </div>

                <div className="flex gap-2">
                    <label className="text-white" htmlFor="consulta">Consulta</label>
                    <input type="radio" name="filtro" id="consulta" />
                </div>

                <div className="flex gap-2">
                    <label className="text-white" htmlFor="reclamo">Reclamo</label>
                    <input type="radio" name="filtro" id="reclamo" />
                </div>

                <div className="flex gap-2">
                    <label className="text-white" htmlFor="aclaracion">Aclaración</label>
                    <input type="radio" name="filtro" id="aclaracion" />
                </div>

            </fieldset>


            <DataTable
                columns={columns}
                data={db}
                pagination
                fixedHeader
                paginationPerPage={6}
            />

            <input
                type="submit"
                value="Enviar"
                className="inline-block max-w-60 mx-auto uppercase font-bold"
            />
        </form>

    )
}
