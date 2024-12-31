import { searchModal } from "../types"

//Describe lo que pasa en el reducer
export type ActivityActions =
    { type: 'open-modal', payload: { category: number } } |
    { type: 'close-modal', payload: { category: number } }

type ActivityState = {
    modalState: searchModal
}

export const initialState: ActivityState = {

    modalState: {
        id: null as number | null,
        modal: false
    }
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions

) => {

    if (action.type === 'open-modal') {

        return {
            ...state,
        }
    }

    return state

}