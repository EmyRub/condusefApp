import { searchModal } from "../types"
import { RefObject, useRef } from 'react';


//Describe lo que pasa en el reducer
export type ModalActions =
    { type: 'open-modal', payload: { event: React.MouseEvent, category: number } } |
    { type: 'close-modal' }
// { type: 'click-outside', payload: { event: React.MouseEvent } }


// Lo que se devuelve
export type ModalState = {
    modalState: searchModal
    //modalRef: RefObject<HTMLDivElement>
}

export const initialState: ModalState = {

    modalState: {
        id: null as number | null,
        modal: false
    },
    // modalRef: useRef<HTMLDivElement>(null)
}

export const modalReducer = (
    state: ModalState = initialState,
    action: ModalActions

) => {

    if (action.type === 'open-modal') {

        console.log(state)
        action.payload.event.preventDefault()

        return {
            ...state,
            modalState: { id: action.payload.category, modal: true }
        }
    }

    if (action.type === 'close-modal') {

        if (state.modalState.modal) {

        }

        return{
            ...state
        }
    }


    return state

}