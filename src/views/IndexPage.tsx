import { ChangeEvent, useState } from "react";
import RedecoForm from "../components/Forms/RedecoForm";
import ReuneForm from "../components/Forms/ReuneForm";
import RegistroNoCliente from "../components/RegistroNoCliente";


export default function IndexPage() {

  const [category, setCategory] = useState(1)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = parseInt(e.target.value, 10); // Aseguramos que sea un número
    setCategory(selectedCategory);
  }

  return (
    <>
      <main className="p-8 bg-slate-50 rounded-2xl w-9/12 mx-auto relative">

        <form className="flex justify-center bg-teal-500 rounded-2xl">
          <select
            name="empresa"
            value={category}
            onChange={handleChange}
            className="w-1/4 my-10 text-center bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          >
            <option value={1}>REUNE</option>
            <option value={2}>REDECO</option>
          </select>
        </form>

        <nav className="py-12 flex justify-around items-center flex-wrap gap-12">

          <button className="bg-teal-500 px-8 py-3 rounded-2xl text-white hover:bg-teal-700 uppercase font-bold min-w-64">Registro Para No Clientes</button>

          <button className="bg-teal-500 px-8 py-3 rounded-2xl text-white hover:bg-teal-700 uppercase font-bold min-w-64">Editar dirección</button>

        </nav>

        <RegistroNoCliente />

        {category === 1 ? <ReuneForm /> : <RedecoForm />}

      </main>
    </>
  )
}
