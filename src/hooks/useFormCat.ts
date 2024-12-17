import { ChangeEvent, useState } from "react";

export const useFormCat = () => {

    const [modal, setModal] = useState(false)
    const [idModal, setIdModal] = useState(0)
    const [category, setCategory] = useState(1)

    //Control de formulario
    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        const selectedCategory = parseInt(e.target.value, 10); // Aseguramos que sea un número
        setCategory(selectedCategory);
    }

    function handleModal(id: number) {
        setModal(!modal)
        setIdModal(id)
    }

    return {
        category,
        handleChange,
        handleModal,
        modal,
        setModal,
        idModal
    }
}