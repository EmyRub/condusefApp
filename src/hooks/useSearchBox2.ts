import {  useEffect } from "react";
import { useModal } from "./useModal";


interface useSearchProps {
    modalRef: React.RefObject<HTMLDivElement>
}

export const useSearchBox2 = ({ modalRef }: useSearchProps) => {

    const { state, dispatch } = useModal();

    const handleClickOutside = (event: MouseEvent) => {

        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            dispatch({ type: 'close-modal' })
        }
    };

    useEffect(() => {

        if (state.modalState.modal) {

            document.addEventListener("mousedown", handleClickOutside);

        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [state.modalState.modal])

}