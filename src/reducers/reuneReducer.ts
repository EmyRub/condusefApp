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
        nProdn: 45797676,
        nProdS: 1,
        fecReg: new Date('2024-02-03').toISOString(),
        fecAtn: '',
        folAtn: 'c2390sdo',
        folConduf: 'jka32891',
        queja: 3,
        edoReg: 2,       
        nvlAtn: 2,
        medioCmn: '2',
        causa: 'Lo dejó el novio y esta despechado',
        rever: false,
        recl: true,
        exg: true,
        fecNot: '',
        fecReso: '',
        typeRe: '2',
        montRe: 3000,
        fecAbo: '',
        montAbo: 10000,
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