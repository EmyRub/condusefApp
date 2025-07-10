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


/**================================================================ */
export interface searchModal {
    id: number | null,
    modal: boolean,
}
