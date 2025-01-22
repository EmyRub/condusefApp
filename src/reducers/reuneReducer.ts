import { reuneDataType } from "../types"

export type reuneActions =
    { type: 'client-add', payload: { newClient: reuneDataType } } |
    { type: 'client-get' }

export type reuneStateProps = {
    reuneData: reuneDataType
}

export const reuneInitialState: reuneStateProps = {

    reuneData: {
        ente: 0,
        sucursal: 6,
        cliente: 'Juan Perez',
        email: 'prueba@grudis.com',
        telefono: 77712458,
        age: 18,
        typePer: 2,
        genero: 'femenino',      
        pori: false,
        mes: 5,
        fecReg: '',
        fecAtn: '',
        folAtn: '',
        folConduf: 0,
        queja: '',
        edoReg: '',
        nProd: 0,
        nProdS: '',
        nvlAtn: '',
        medioCmn: '',
        causa: '',
        rever: 0,
        recl: 0,
        exg: 0,
        fecNot: '',
        fecReso: '',
        typeRe: '',
        montRe: 0,
        fecAbo: '',
        montAbo: 0,
        inst: '',
        sector: '',
        cp: '',
        edo: '',
        muni: '',
        loc: '',
        tyLoc: '',
        col: ''
    }
}


export const reuneReducer = (
    state: reuneStateProps = reuneInitialState,
    action: reuneActions

): reuneStateProps => {


    if (action.type === 'client-add') {

    }

    if (action.type === 'client-get') {

        return {
            ...state
        }

    }


    return state
}