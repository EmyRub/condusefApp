import { reuneForm } from "@/types/zod"


export type reuneStateProps = {
    reuneData: reuneForm
}

export const reuneInitialState: reuneStateProps = {

    reuneData: {
        ente: 54,
        sucursal: 6,
        cliente: 'Juan Perez',
        email: 'prueba@grudis.com',
        telefono: 77712458,
        age: 38,
        typePer: 'fisica',
        genero: 'femenino',
        pori: false,
        mes: 5,
        nProdn: '45797676',
        nProdS: '1',
        fecReg: new Date('2024-02-03').toISOString(),
        fecAtn: '',
        folAtn: '22',
        folConduf: 'RDUA-23',
        queja: 'reclamo',
        edoReg: 'pendiente',
        nvlAtn: '2',
        medioCmn: 'web',
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
        inst: 'Instito de Crédito bla bla',
        sector: 'Credito y Finanzas',
        cp: 2487,
        colNumber: 4,
        colName: '2',
        edoNumber: 13,
        edoName: '2',
        muniNumber: 14,
        muniName: '2',
        locNumber: 2,
        locName: '2',
        tyLocNumber: 2,
        tyLocName: '2',

    }
}

export type reuneActions =
    { type: 'client-add', payload: { newClient: reuneForm } } |
    { type: 'client-update', payload: { field: string, value: any } } |
    { type: 'client-get' }


export const reuneReducer = (
    state: reuneStateProps = reuneInitialState,
    action: reuneActions

): reuneStateProps => {


    if (action.type === 'client-add') {
        console.log(action.payload.newClient)
    }

    if (action.type === 'client-update') {
        return {
            ...state,
            reuneData: { ...state.reuneData, [action.payload.field]: action.payload.value }
        }
    }

    if (action.type === 'client-get') {

        return {
            ...state
        }

    }



    return state
}