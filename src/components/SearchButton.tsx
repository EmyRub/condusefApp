import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";

interface SearchBoxProps {
    label: string,
    modalRef: React.RefObject<HTMLDivElement>,
    activeSearch: { id: number | null, modal: boolean },
    handleCloseSearch: () => void
}

export default function SearchButton({ label, modalRef, activeSearch, handleCloseSearch }: SearchBoxProps) {

    // Cierra el modal si se hace clic fuera de este
    useEffect(() => {

        handleCloseSearch()
        console.log(modalRef)

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
