import { ChangeEvent, useState } from "react";
import RedecoForm from "../components/Forms/RedecoForm";
import ReuneForm from "../components/Forms/ReuneForm";
import RegistroNoCliente from "../components/Forms/NoClienteForm";
import EditarDirForm from "../components/Forms/EditarDirForm";


export default function IndexPage() {

  const [category, setCategory] = useState(1)
  const [formClient, setFormClient] = useState(false)
  const [formDirection, setFormDirection] = useState(false)


  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = parseInt(e.target.value, 10); // Aseguramos que sea un número
    setCategory(selectedCategory);
  }

  const handleModal = (id: number) => {
    id === 1 ? setFormClient(true) : setFormDirection(true)
  }

  return (
    <>
      <main className="p-2 md:p-8 bg-slate-50 rounded-2xl w-11/12 md:w-9/12 mx-auto relative">

        <form className="flex justify-center bg-teal-500 rounded-2xl shadow-lg">
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

        <nav className="py-12 flex justify-around items-center flex-wrap gap-6 lg:gap-12">

          <button
            onClick={() => handleModal(1)}
            className="bg-teal-500 px-8 py-3 rounded-2xl text-white hover:bg-teal-700 uppercase font-bold w-11/12 md:w-80 shadow-lg">Registro Para No Clientes</button>

          <button
            onClick={() => handleModal(2)}
            className="bg-teal-500 px-8 py-3 rounded-2xl text-white hover:bg-teal-700 uppercase font-bold w-11/12 md:w-80 shadow-lg">Editar dirección</button>

        </nav>

        {category === 1 ? <ReuneForm /> : <RedecoForm />}

      </main>

      {formClient && (<RegistroNoCliente />)}
      {formDirection && (<EditarDirForm />)}

    </>
  )
}
