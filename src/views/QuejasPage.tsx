
import { useFormCat } from "@/hooks/useFormCat";
import { Categories, ModalIds } from "../types";

import ReuneForm from "@/components/reune/ReuneForm";
import ModalButton from "@/components/ui/ModalButton";
import RedecoForm from "@/components/redeco/RedecoForm";
import ModalEditarDir from "@/components/shared/modals/ModalEditarDir";
import ModalNoCliente from "@/components/shared/modals/ModalNoCliente";
import ModalRequest from "@/components/shared/modals/ModalRequest";

export default function IndexPage() {

  // Hook personalizado para manejar el estado de categoría y modal
  const { category, handleChange, handleModal, modal, idModal, setModal } = useFormCat()

  // Objeto para formularios de los modales
  const ModalForms = {
    [ModalIds.REGISTRO_NO_CLIENTE]: <ModalNoCliente setModal={setModal} />,
    [ModalIds.EDITAR_DIRECCION]: <ModalEditarDir setModal={setModal} />,
  };

  return (
    <>
      <main className="p-2 md:p-8 bg-slate-50 rounded-2xl w-11/12 md:w-9/12 mx-auto relative">

        <form className="flex justify-center bg-teal-500 rounded-2xl shadow-lg">
          <select
            name="empresa"
            value={category}
            onChange={handleChange}
            className="w-4/5 lg:w-1/4 my-10 text-center bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          >
            <option value={Categories.REUNE}>REUNE</option>
            <option value={Categories.REDECO}>REDECO</option>
          </select>
        </form>

        <nav className="py-12 flex justify-around items-center flex-wrap gap-6 lg:gap-12">

          <ModalButton
            onClick={() => handleModal(ModalIds.REGISTRO_NO_CLIENTE)}
            text='Registro Para No Clientes'
          />

          <ModalButton
            onClick={() => handleModal(ModalIds.EDITAR_DIRECCION)}
            text='Editar dirección'
          />

        </nav>

        {category === Categories.REUNE ? <ReuneForm /> : <RedecoForm />}

        <ModalRequest />

      </main>

      {modal && ModalForms[idModal]}



    </>
  )
}
