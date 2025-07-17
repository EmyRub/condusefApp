import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchBox } from "@/hooks/useSearchBox";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { datacausaForm, dataClientForm, dataDirectionForm, searchKey } from "@/types/zod";

interface SearchBoxProps {
    label: string,
    data: dataClientForm[] | dataDirectionForm[] | datacausaForm[]
}

export default function SearchButton({ label, data }: SearchBoxProps) {

    const { register } = useForm()
    const [keysData, setKeysData] = useState<searchKey[]>([])

    const modalRef = useRef<HTMLDivElement>(null);
    useSearchBox({ modalRef })

    const filterData = () => {

        const filterData = data.forEach(item => {

            const keys = Object.keys(item)

            keys.forEach(key => {

                switch (key) {

                    case 'NUM_ENTE':
                        const user = item as dataClientForm
                        setKeysData([{
                            ID_KEY: user.NUM_ENTE,
                            CONTENT: user.NOM_CoEnt
                        }])
                        break;

                    case 'CVE_SUCUR':
                        const sucur = item as dataDirectionForm
                        setKeysData([{
                            ID_KEY: sucur.CVE_SUCUR,
                            CONTENT: sucur.NOM_SUCUR
                        }])
                        break;

                    case 'TIP_CAUSA':
                        const causa = item as datacausaForm
                        setKeysData([{
                            ID_KEY: causa.NUM_CAUSA,
                            CONTENT: causa.TIP_CAUSA
                        }])
                        break;
                }
            })

        })

    }

    useEffect(() => {
        filterData()
    }, [data])

    // console.log(Object.keys(data[0]))

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
                        <tr key={key.ID_KEY}>
                            <td><button>{key.ID_KEY}</button></td>
                            <td><button>{key.CONTENT}</button></td>
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
