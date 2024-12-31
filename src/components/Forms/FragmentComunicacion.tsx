import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { searchCat, SearchCategory } from "../../types";
import SearchButton from "../SearchButton";
import { useSearchBox } from "../../hooks/useSearchBox";

interface SearchBoxProps {
  modalRef: React.RefObject<HTMLDivElement>,
  activeSearch: { id: number | null, modal: boolean },
  handleCloseSearch: () => void,
}

export default function FragmentComunicacion({ modalRef, activeSearch, handleCloseSearch, }: SearchBoxProps) {

  const { handleOpenSearch } = useSearchBox()
  return (

    <fieldset className='p-6 lg:p-12'>

      <legend className='w-full md:w-1/2 lg:px-4'>Datos de Comunicación</legend>

      <div className="flex justify-between flex-wrap gap-y-16 gap-x-2">

        <div className="basis-full lg:basis-44">
          <label htmlFor="mes" className="w-full lg:w-12 text-center lg:text-left">Mes:</label>
          <input id="mes" type="number" className="w-full lg:w-32" readOnly disabled />
        </div>

        <div className="basis-full lg:basis-72">
          <label htmlFor="FReg" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Fecha de Registro:</label>
          <input type="date" name="FReg" id="FReg" className="w-full lg:w-36 text-center" />
        </div>

        <div className="basis-full lg:basis-72">
          <label htmlFor="FeAtn" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Fecha de Atención</label>
          <input type="date" name="FeAtn" id="FeAtn" className="w-full lg:w-36 text-center" />
        </div>

        <div className="basis-full lg:basis-72">
          <label htmlFor="eReg" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Estado de registro</label>

          <select name="eReg" id="eReg" className="w-full lg:w-36 text-center">
            <option value="">Concluido</option>
          </select>
        </div>

        <div className="basis-full lg:basis-72">
          <label htmlFor="nAtn" className="w-full lg:w-36 text-center lg:text-left mb-2 lg:mb-0">Nivel de Atención:</label>

          <select name="nAtn" id="nAtn" className="w-full lg:w-36 text-center">
            <option value="">Vía Eletrónica</option>
          </select>
        </div>

        <div className="basis-full lg:basis-64">
          <label htmlFor="queja" className="w-full lg:w-28 text-center lg:text-left mb-2 lg:mb-0">Tipo de Queja</label>

          <select name="queja" id="queja" className="w-full lg:w-36 text-center">
            <option value="">Consulta</option>
          </select>
        </div>

        <div className="basis-full lg:basis-72">
          <label htmlFor="nProd" className="w-full lg:w-40 text-center lg:text-left mb-2 lg:mb-0">Número de Producto:</label>

          <select name="nProd" id="nProd" className="w-full lg:w-32 text-center">
            <option value="">14653216</option>
          </select>
        </div>

        <div className="basis-full lg:basis-72">
          <label htmlFor="foConduf" className="w-full lg:w-28 text-center lg:text-left">Folio condusef:</label>
          <input type="number" name="foConduf" id="foConduf" className="w-full lg:w-44" readOnly disabled />
        </div>

        <div className="basis-full lg:basis-56">
          <label htmlFor="FoAtn" className="w-full lg:w-32 text-center lg:text-left">Folio de Atención</label>
          <input type="number" name="FoAtn" id="FoAtn" className="w-full lg:w-24" readOnly disabled />
        </div>

        <div className="basis-full lg:basis-96 flex gap-1 flex-wrap justify-center lg:justify-start items-center">
          <label htmlFor="causa" className="w-12 text-center lg:text-left">Causa:</label>

          <div
            className='relative'
            onClick={(e) => handleOpenSearch(e, SearchCategory.Causa)}
          >
            <button
              className="bg-teal-400 hover:bg-teal-500 p-2 rounded-md shadow ">
              <MagnifyingGlassIcon className="w-4 text-white" />
            </button>

            {SearchCategory.Causa === activeSearch.id && activeSearch.modal && (
              <SearchButton
                label={searchCat.causa}
                modalRef={modalRef}
                activeSearch={activeSearch}
                handleCloseSearch={handleCloseSearch}
              />
            )}

          </div>

          <input type="number" name="causa" id="causa" className="w-full lg:w-72" readOnly disabled />
        </div>

        <div className="basis-full lg:basis-96">
          <label htmlFor="mCom" className="w-full lg:w-48 text-center lg:text-left mb-2 lg:mb-0">Medio de Comunicación:</label>

          <select name="mCom" id="mCom" className="w-full lg:w-48 text-center">
            <option value="">Correo Electrónico</option>
          </select>
        </div>
      </div>

    </fieldset>
  )
}
