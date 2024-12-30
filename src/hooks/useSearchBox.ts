import { useRef, useState } from 'react';

export const useSearchBox = () => {

    const initialState = {
        id: null as number | null,
        modal: false
    }

    // Referencia al contenedor del modal
    const modalRef = useRef<HTMLDivElement>(null);
    const [activeSearch, setActiveSearch] = useState(initialState)

    const handleOpenSearch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, cat: number) => {
        e.preventDefault()

        setActiveSearch({
            id: cat,
            modal: true,
        });

        // id: prev.id === cat && prev.modal ? null : cat,
        // modal: prev.id !== cat || !prev.modal,
    }

    function handleCloseSearch() {
        console.log('desde hook')
        //Se activa unicamente cuando modal es true
        if (activeSearch.modal) {
            // Manda a llamar la función al dar clic
            document.addEventListener('mouseup', handleClickOutside);
        }

        return () => {
            // Por default quita el evento
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }

    const handleClickOutside = (event: MouseEvent) => {

        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setActiveSearch((prev) => ({
                ...prev,
                modal: false,
            }));
        }
    };


    return {
        modalRef,
        activeSearch,
        handleOpenSearch,
        handleCloseSearch
    }

}