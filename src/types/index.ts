import { datacausaForm, dataClientForm, dataDirectionForm, noClientForm } from "./zod"

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

export const entes = [
    { clave: '01', NOM_CoEnt: 'persona1' },
    { clave: '02', NOM_CoEnt: 'truasente' },
    { clave: '03', NOM_CoEnt: 'comida' },
]

export const usuariosData: dataClientForm[] = [
    {
        CVE_SEXO: 'M',
        NOM_CoEnt: 'Panfilo 1',
        NUM_EDAD: 23,
        NUM_Tlfno: 8823719217,
        TIP_Corre: 'correo@correo.com',
        TIP_ENTE: 1,
        NUM_ENTE: 1
    },
    {
        CVE_SEXO: 'M',
        NOM_CoEnt: 'juanita 1',
        NUM_EDAD: 96,
        NUM_Tlfno: 882219217,
        TIP_Corre: 'corraeo@correo.com',
        TIP_ENTE: 2,
        NUM_ENTE: 2
    },
    {
        CVE_SEXO: 'H',
        NOM_CoEnt: 'mancracio',
        NUM_EDAD: 27,
        NUM_Tlfno: 8823719217,
        TIP_Corre: 'correo@correo.com',
        TIP_ENTE: 1,
        NUM_ENTE: 3
    },
]

export const sucursalesData: dataDirectionForm[] = [
    {
        NUM_CPOS: 56,
        NUM_LOCAL: 45,
        NUM_ENTFE: 5,
        NUM_MUNI: 2,
        CVE_SUCUR: 89,
        NOM_SUCUR: 'pantitlan'
    },
    {
        NUM_CPOS: 56,
        NUM_LOCAL: 45,
        NUM_ENTFE: 5,
        NUM_MUNI: 2,
        CVE_SUCUR: 89,
        NOM_SUCUR: 'benito'
    },
    {
        NUM_CPOS: 56,
        NUM_LOCAL: 45,
        NUM_ENTFE: 5,
        NUM_MUNI: 2,
        CVE_SUCUR: 89,
        NOM_SUCUR: 'rosa'
    },
]

export const causaData: datacausaForm[] = [
    {
        TIP_CAUSA: 'lo dejo la novia',
        NUM_CAUSA: 1
    }
]
/**================================================================ */
export interface searchModal {
    id: number | null,
    modal: boolean,
}


