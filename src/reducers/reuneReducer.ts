import { reuneData } from "../types"

export type reuneActions =
    { type: 'add-client', payload: { newClient: reuneData } } |
    { type: 'get-client' }

export type reuneState = {
    reuneData: reuneData[]
}

export const reuneInitialState: reuneState = {
    reuneData: []
}


export const reuneReducer = (
    state: reuneState = reuneInitialState,
    action: reuneActions

): reuneState => {


    if (action.type === 'add-client') {

    }

    if (action.type === 'get-client') {

    }


    return state
}