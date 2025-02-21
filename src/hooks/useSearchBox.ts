import {  useEffect } from "react";
import { useGlobal } from "./useGlobal";

interface useSearchProps {
    modalRef: React.RefObject<HTMLDivElement>
}

export const useSearchBox = ({ modalRef }: useSearchProps) => {

    const { state, dispatch } = useGlobal();

    const handleClickOutside = (event: MouseEvent) => {

        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            dispatch({ type: 'modal-close' })
        }
    };

    useEffect(() => {

        if (state.modalStateG.modalState.modal) {

            document.addEventListener("mousedown", handleClickOutside);

        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [state.modalStateG.modalState.modal])

}