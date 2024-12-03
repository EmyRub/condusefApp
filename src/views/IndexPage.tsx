import { ChangeEvent, useState } from "react";
import RedecoForm from "../components/Forms/RedecoForm";
import ReuneForm from "../components/Forms/ReuneForm";

export default function IndexPage() {

  const [category, setCategory] = useState(1)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = parseInt(e.target.value, 10); // Aseguramos que sea un número
    setCategory(selectedCategory);
  }

  return (
    <>
      <main className="p-8 bg-slate-50 rounded-2xl w-9/12 mx-auto">

        <form className="flex justify-center bg-teal-500 rounded-2xl mb-12">
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

        {category === 1 ? <ReuneForm /> : <RedecoForm />}

      </main>
    </>
  )
}
