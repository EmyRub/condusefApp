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
    typePer: number,
    genero: string,   
    pori: boolean,
    mes: number,
    fecReg: string,
    fecAtn: string,
    folAtn: string,
    folConduf: number,
    queja: string,
    edoReg: string,
    nProd: number,
    nProdS: string,
    nvlAtn: string,
    medioCmn: string,
    causa: string,
    rever: number,
    recl: number,
    exg: number,
    fecNot: string,
    fecReso: string,
    typeRe: string,
    montRe: number,
    fecAbo: string,
    montAbo: number,
    inst: string,
    sector: string,
    cp: string,
    edo: string,
    muni: string,
    loc: string,
    tyLoc: string,
    col: string
}
