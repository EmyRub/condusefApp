import { searchModal } from "../types"


//Describe lo que pasa en el reducer
export type ModalActions =
    { type: 'open-modal', payload: { event: React.MouseEvent, category: number } } |
    { type: 'close-modal' }

// Lo que se devuelve
export type ModalState = {
    modalState: searchModal
}

export const initialState: ModalState = {
    modalState: {
        id: null as number | null,
        modal: false
    }
}

export const modalReducer = (
    state: ModalState = initialState,
    action: ModalActions

): ModalState => {

    if (action.type === 'open-modal') {

        action.payload.event.preventDefault()

        return {
            ...state,
            modalState: { id: action.payload.category, modal: true }
        }
    }

    if (action.type === 'close-modal') {

        return {
            ...state,
            modalState: { id: null, modal: false }
        }
    }

    return state
}

