import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useSearchBox } from "../hooks/useSearchBox";
import { useEffect } from "react";

interface SearchBoxProps {
    label: string
}

export default function SearchButton({ label }: SearchBoxProps) {

    const { modalRef, activeSearch, handleCloseSearch } = useSearchBox()

        // Cierra el modal si se hace clic fuera de este
        useEffect(() => {

            handleCloseSearch()
    
        }, [activeSearch.modal])

    return (

        <article
            ref={modalRef}
            className="bg-slate-50 p-6 rounded-md shadow absolute top-0 left-1/2 -translate-x-2/3 lg:left-8 lg:-translate-x-8 w-96">

            <div className="border-teal-500 border-2 mb-6 flex">
                <MagnifyingGlassIcon className="bg-teal-500 w-8 text-white inline-block" />
                <input type="search" name="search" id="search" placeholder="Ej" className="px-2 border-none" />
            </div>

            <table className="w-full border-2">
                <thead className="bg-teal-600">
                    <tr>
                        <th className="text-white">Clave</th>
                        <th className="text-white">{label}</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Esperanza Gallitos de la Pradera</td>
                    </tr>
                </tbody>
            </table>
        </article>

    )
}
