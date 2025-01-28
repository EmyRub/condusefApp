// Opciones para el formulario
export enum Categories {
    REUNE = 1,
    REDECO = 2,
};

// Enum para modales
export enum ModalIds {
    REGISTRO_NO_CLIENTE = 1,
    EDITAR_DIRECCION = 2,
}

export enum SearchCategory {
    Cliente = 1,
    Sucursal = 2,
    Causa = 3
}

export enum searchCat {
    cliente = 'Cliente',
    sucursal = 'Sucursal',
    causa = 'Causa',
}

/**================================================================ */
export interface searchModal {
    id: number | null,
    modal: boolean,
}

export type noClient = {
    ente: string,
    name: string,
    email: string,
    phone: number,
    age: number,
    typePer: string,
    genre: number
}

export type DraftnoClient = Omit<noClient, 'ente'>

export type editDirection = {
    ente: string,
    cp: string,
    loc: string,
    edo: string,
    muni: string
}

export type DrafteditDirection = Omit<editDirection, 'ente'>

/**================================================================================ */
export type reuneDataType = {
    ente: number,
    sucursal: number,
    cliente: string,
    email: string,
    telefono: number,
    age: number,
    typePer: string,
    genero: string,
    pori: boolean,
    mes: number,
    nProdn: string,
    nProdS: string,

    fecReg: string,
    fecAtn: string,
    folAtn: string,
    folConduf: string,
    queja: string,
    edoReg: string,
    nvlAtn: string,
    medioCmn: string,
    causa: string,
    rever: boolean,
    recl: boolean,
    exg: boolean,
    fecNot: string,
    fecReso: string,
    typeRe: string,
    montRe: number,
    fecAbo: string,
    montAbo: number,
    inst: string,
    sector: string,
    cp: number,    
    colNumber: number,
    colName: string
    edoNumber: number,
    edoName: string,
    muniNumber: number,
    muniName: string,
    locNumber: number,
    locName: string,
    tyLocNumber: number,
    tyLocName: string,
}
