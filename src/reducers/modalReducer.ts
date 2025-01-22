import { searchModal } from "../types"


//Describe lo que pasa en el reducer
export type ModalActions =
    { type: 'modal-open', payload: { event: React.MouseEvent, category: number } } |
    { type: 'modal-close' }

// Lo que se devuelve
export type ModalStateProps = {
    modalState: searchModal
}

export const modalInitialState: ModalStateProps = {

    modalState: {
        id: null as number | null,
        modal: false
    }
}

export const modalReducer = (
    state: ModalStateProps = modalInitialState,
    action: ModalActions

): ModalStateProps => {

    if (action.type === 'modal-open') {
        console.log('desde reducer')
        action.payload.event.preventDefault()

        return {
            ...state,
            modalState: { id: action.payload.category, modal: true }
        }
    }

    if (action.type === 'modal-close') {

        return {
            ...state,
            modalState: { id: null, modal: false }
        }
    }

    return state
}

