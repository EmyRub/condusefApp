import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function SearchBox() {
    return (
        
        <article className="bg-slate-50 p-6 rounded-md shadow">

            <div className="border-teal-500 border-2 mb-6 flex">
                <MagnifyingGlassIcon className="bg-teal-500 w-8 text-white inline-block" />
                <input type="search" name="search" id="search" placeholder="Ej" className="px-2 border-none" />
            </div>

            <table className="w-full border-2">
                <thead className="bg-teal-600">
                    <tr>
                        <th className="text-white">Clave</th>
                        <th className="text-white">Cliente</th>
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
