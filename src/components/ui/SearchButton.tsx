import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchBox } from "@/hooks/useSearchBox";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { datacausaForm, dataClientForm, dataDirectionForm, searchKey } from "@/types/zod";
import { useGlobal } from "@/hooks/useGlobal";

interface SearchBoxProps {
    label: string,
    data: dataClientForm[] | dataDirectionForm[] | datacausaForm[]
}

export default function SearchButton({ label, data }: SearchBoxProps) {

    const { register } = useForm()
    const { dispatch } = useGlobal()
    const [keysData, setKeysData] = useState<searchKey[]>([])

    const modalRef = useRef<HTMLDivElement>(null);
    useSearchBox({ modalRef })

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
        dispatch({ type: 'modal-close' })
    }

    const filterData = () => {
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
        setKeysData(allResults)
    }

    useEffect(() => {
        filterData()
    }, [data])


    return (

        <article
            ref={modalRef}
            className="bg-slate-50 p-6 rounded-md shadow absolute top-0 left-1/2 -translate-x-2/3 lg:left-8 lg:-translate-x-8 w-96">

            <div className="border-teal-500 border-2 mb-6 flex">
                <MagnifyingGlassIcon className="bg-teal-500 w-8 text-white inline-block" />

                <input
                    type="search"
                    id="search"
                    placeholder="Ej"
                    className="px-2 border-none w-full"
                    {...register('search')}
                />
            </div>

            <table className="w-full border-2">

                <thead className="bg-teal-600">
                    <tr>
                        <th className="text-white">Clave</th>
                        <th className="text-white">{label}</th>
                    </tr>
                </thead>

                <tbody>
                    {keysData.length > 0 ? keysData.map(key => (
                        <tr
                            key={key.ID_KEY}
                            onClick={() => updateForm(key.ID_KEY)}
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
