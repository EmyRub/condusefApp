import { useEffect, useState } from "react";
import { tableCondusef, tableCondusefFilter } from "@/types/zod";
import { condusefData } from "@/types/index";
import DataTable, { TableColumn } from "react-data-table-component";


export default function ListRequest() {
    const [db, setDb] = useState(condusefData)
    const [category, setCategory] = useState(1)

    const columns: TableColumn<tableCondusef>[] = [

        {
            name: 'N° ENTE',
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

    const filterResults = () => {
        let newDB: tableCondusefFilter[] = condusefData

        switch (category) {

            case 2:
                newDB = newDB.filter(cat => cat.CAT_FOCON === 1)
                break;

            case 3:
                newDB = newDB.filter(cat => cat.CAT_FOCON === 2)
                break;

            case 4:
                newDB = newDB.filter(cat => cat.CAT_FOCON === 3)
                break;

            default:
                newDB = condusefData
                break;
        }

        setDb(newDB)
     
    }

    useEffect(() => {
        filterResults()
    }, [category])

    return (

        <form>

            <fieldset className="flex justify-center gap-8 bg-teal-500 py-6 mb-8 ">
                <div className="flex gap-2 items-center">
                    <label className="text-white" htmlFor="todos">Todos</label>
                    <input
                        id="todos"
                        type="radio"
                        name="category"
                        value={1}
                        checked={category === 1}
                        onChange={(e) => setCategory(Number(e.target.value))}
                    />
                </div>

                <div className="flex gap-2">
                    <label className="text-white" htmlFor="consulta">Consulta</label>
                    <input
                        id="consulta"
                        type="radio"
                        name="category"
                        value={2}
                        onChange={(e) => setCategory(Number(e.target.value))}
                    />
                </div>

                <div className="flex gap-2">
                    <label className="text-white" htmlFor="reclamo">Reclamo</label>
                    <input
                        id="reclamo"
                        type="radio"
                        name="category"
                        value={3}
                        onChange={(e) => setCategory(Number(e.target.value))}
                    />
                </div>

                <div className="flex gap-2">
                    <label className="text-white" htmlFor="aclaracion">Aclaración</label>
                    <input
                        id="aclaracion"
                        type="radio"
                        name="category"
                        value={4}
                        onChange={(e) => setCategory(Number(e.target.value))}
                    />
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
