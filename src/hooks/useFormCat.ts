import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Categories, ModalIds } from "../types";

/** FUNCIÓN QUE CONTROLA LA SELECCIÓN DE FORMULARIO REUNE/REDECO */
const initialState = {
    modal: false,
    idModal: 0 as ModalIds,
    category: Categories.REUNE
}

interface UseFormCatReturn {
    category: Categories;
    modal: boolean;
    idModal: ModalIds;
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleModal: (id: ModalIds) => void;
    setModal: Dispatch<SetStateAction<boolean>>;
}

export const useFormCat = (): UseFormCatReturn => {
    
    const [state, setState] = useState(initialState)

    //Control de formulario
    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        setState((prev) => ({
            ...prev,
            category: parseInt(e.target.value, 10) as Categories
        }))
    }

    function handleModal(id: ModalIds) {
        setState((prev) => ({
            ...prev,
            modal: !prev.modal,
            idModal: id
        }))
    }

    const setModal: Dispatch<SetStateAction<boolean>> = (value) => {
        setState((prev) => ({
            ...prev,
            modal: typeof value === "function" ? value(prev.modal) : value,
        }));
    };

    return {
        ...state,
        handleChange,
        handleModal,
        setModal
    }
}