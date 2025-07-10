import { redecoForm, reuneForm } from "@/types/zod"


export type formStateProps = {
    reuneData: reuneForm,
    redecoData: redecoForm
}

export const formInitialState: formStateProps = {

    reuneData: {
        NUM_ENTE: 54,
        CVE_SUCUR: 6,

        NOM_CoEnt: 'Juan Perez',
        TIP_Corre: 'prueba@grudis.com',
        NUM_Tlfno: 77712458,
        NUM_EDAD: 38,
        TIP_ENTE: 2,
        CVE_SEXO: 'femenino',
        BAN_PORI: true,

        CVE_TRIM: 5,
        NUM_PRODU: '45797676',
        FEC_REGIS: new Date('2024-02-03'),
        FEC_ATEN: new Date('2024-02-03'),
        NUM_FOLIO: '22',
        NUM_FOCON: 'RDUA-23',
        CVE_Queja: 1,
        CVE_EDOCP: 2,
        CVE_NIVAT: 2,
        NUM_MEDRC: 1,
        TIP_CAUSA: 'Lo dejó el novio y esta despechado',

        BAN_MONET: true,
        BAN_REVER: false,
        BAN_OPEXT: true,

        FEC_NOTI: new Date('2025-04-03'),
        FEC_RESOL: new Date('2024-02-03'),
        TIP_RESOL: 2,

        MONT_RECLA: 3000,
        FEC_ABONO: new Date('2024-02-12'),
        MONT_ABOUS: 10000,

        NOM_INST: 'Instito de Crédito bla bla',
        NOM_SECT: 'Credito y Finanzas',
        NUM_CPOS: 4,
        NUM_COL: 2487,
        NUM_ENTFE: 13,
        NUM_MUNI: 14,
        NUM_LOCAL: 2,
        TIP_LOCAL: 2,
    },

    redecoData: {
        BAN_PORI: false,
        CVE_EDOCP: 3,
        CVE_NIVAT: 2,
        CVE_Queja: 2,
        CVE_SEXO: 'masculino',
        CVE_SUCUR: 1,
        CVE_TRIM: 5,
        FEC_ATEN: new Date('2024-02-12'),
        FEC_NOTI: new Date('2025-12-12'),
        FEC_REGIS: new Date('2024-07-12'),
        FEC_RESOL: new Date('2024-02-28'),
        NOM_CoEnt: 'Panfilo',
        NOM_INST: 'Cansados anonimos',
        NOM_SECT: 'sector explotación',
        NUM_COL: 2,
        NUM_CPOS: 24509,
        NUM_EDAD: 36,
        NUM_ENTE: 4,
        NUM_ENTFE: 1,
        NUM_FOCON: '20546l',
        NUM_FOLIO: '132hjkj',
        NUM_LOCAL: 3,
        NUM_MEDRC: 1,
        NUM_MUNI: 2,
        NUM_PRODU: 'yiy5646-o',
        NUM_Tlfno: 777651125,
        TIP_CAUSA: 'la ancianidad',
        TIP_Corre: 'correo@grudis.com',
        TIP_ENTE: 1,
        TIP_LOCAL: 2,
        TIP_RESOL: 4,
        NUM_QuPen: 2,
        NUM_IdPen: 254
    }
}

export type formActions =
    { type: 'client-add', payload: { newClient: reuneForm } } |
    { type: 'client-update', payload: { field: string, value: any } } |
    { type: 'client-get' }


export const formReducer = (
    state: formStateProps = formInitialState,
    action: formActions

): formStateProps => {


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