import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function SearchBox() {
    return (
        <article className="bg-slate-50 p-6 rounded-md shadow">

            <div className="bg-teal-100 mb-6">
                <MagnifyingGlassIcon className="w-8 text-white inline-block" />
                <input type="search" name="search" id="search" placeholder="Ej" />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Clave</th>
                        <th>Cliente</th>
                    </tr>
                </thead>
            </table>
        </article>
    )
}
