import SearchBox from "./SearchBox";
import { useGlobal } from "@/hooks/useGlobal";
import { useSearchBox } from "@/hooks/useSearchBox";
import { useEffect, useRef, useState } from "react";
import { datacausaForm, dataClientForm, dataDirectionForm, searchKey } from "@/types/zod";

interface SearchModalProps {
    label: string,
    data: dataClientForm[] | dataDirectionForm[] | datacausaForm[]
}

export default function SearchModal({ label, data }: SearchModalProps) {

    const { dispatch } = useGlobal()
    const [tableData, setTableData] = useState<searchKey[]>([])
    const [filterSearch, setFilterSearch] = useState<searchKey[]>([])

    const modalRef = useRef<HTMLDivElement>(null);
    useSearchBox({ modalRef })

    const categoryData = () => {
        const allResults: searchKey[] = []

        data.forEach(item => {
            const keys = Object.keys(item)

            keys.forEach(key => {
                switch (key) {
                    case 'NUM_ENTE':
                        const user = item as dataClientForm
                        allResults.push({
                            ID_KEY: user.NUM_ENTE,
                            CONTENT: user.NOM_CoEnt
                        })
                        break;

                    case 'CVE_SUCUR':
                        const sucur = item as dataDirectionForm
                        allResults.push({
                            ID_KEY: sucur.CVE_SUCUR,
                            CONTENT: sucur.NOM_SUCUR
                        })
                        break;

                    case 'TIP_CAUSA':
                        const causa = item as datacausaForm
                        allResults.push({
                            ID_KEY: causa.NUM_CAUSA,
                            CONTENT: causa.TIP_CAUSA
                        })
                        break;
                }
            })

        })
        setTableData(allResults)
        setFilterSearch(allResults)
    }

    const updateForm = (id: number) => {
        const keys = Object.keys(data[0])

        keys.forEach(key => {
            switch (key) {
                case 'NUM_ENTE':
                    const users = data as dataClientForm[]
                    const activeUser = users.find(user => user.NUM_ENTE === id)
                    if (activeUser) {
                        Object.entries(activeUser).forEach(([key, value]) => {
                            dispatch({ type: 'form-update', payload: { field: key, value: value } })
                        })
                    }
                    break;

                case 'CVE_SUCUR':
                    const sucursales = data as dataDirectionForm[]
                    const activeSucur = sucursales.find(sucur => sucur.CVE_SUCUR === id)

                    if (activeSucur) {
                        Object.entries(activeSucur).forEach(([key, value]) => {
                            dispatch({ type: 'form-update', payload: { field: key, value: value } })
                        })
                    }
                    break;

                case 'TIP_CAUSA':
                    const causa = data as datacausaForm[]
                    const activeCausa = causa.find(causa => causa.NUM_CAUSA === id)

                    if (activeCausa) {
                        dispatch({ type: 'form-update', payload: { field: 'TIP_CAUSA', value: activeCausa.TIP_CAUSA } })
                    }
                    break;
            }

        })

    }

    useEffect(() => {
        categoryData()
    }, [data])


    return (

        <article
            ref={modalRef}
            className="bg-slate-50 p-6 rounded-md shadow absolute top-0 left-1/2 -translate-x-2/3 lg:left-8 lg:-translate-x-8 w-96 z-50">

            <SearchBox label={label} tableData={tableData} setFilterSearch={setFilterSearch} />

            <table className="w-full border-2">

                <thead className="bg-teal-600">
                    <tr>
                        <th className="text-white">Clave</th>
                        <th className="text-white">{label}</th>
                    </tr>
                </thead>

                {/** OnMouseDown, se usa en vez de click para que se cierre el modal */}
                <tbody>
                    {filterSearch.length > 0 ? filterSearch.map(key => (
                        <tr
                            key={key.ID_KEY}
                            onMouseDown={() => {
                                updateForm(key.ID_KEY)
                                dispatch({ type: 'modal-close' })
                            }}
                            className="hover:bg-teal-100 hover:cursor-pointer"
                        >
                            <td>{key.ID_KEY}</td>
                            <td>{key.CONTENT}</td>
                        </tr>
                    )) :
                        <tr>
                            <td>-</td>
                            <td>No hay resultados</td>
                        </tr>
                    }
                </tbody>
            </table>

        </article>

    )
}
