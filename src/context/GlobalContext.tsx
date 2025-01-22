import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { ModalActions, modalInitialState, modalReducer, ModalStateProps } from "../reducers/modalReducer"
import { reuneActions, reuneInitialState, reuneReducer, reuneState } from "../reducers/reuneReducer"


//Definir los tipos de estado y acciones combinados
type GlobalState = {
    modalStateG: ModalStateProps,
    reuneStateG: reuneState
}

type GlobalActions = ModalActions | reuneActions;

// Define las props del contexto
type GlobalContextProps = {
    state: GlobalState;
    dispatch: Dispatch<GlobalActions>;
}

// Define las props del proveedor
type GlobalProviderProps = {
    children: ReactNode
}

//context.- Acción del estado global
//Se puede poner (null!) o ({} as GlobalContextProps) para quitar error
export const GlobalContext = createContext<GlobalContextProps>(null!)


//Provider.- donde vienen los datos => reducer
//children.- Hijos del componente
export const GlobalProvider = ({ children }: GlobalProviderProps) => {

    // Configurar cada reducer
    const [modalStateG, modalDispatchG] = useReducer(modalReducer, modalInitialState)
    const [reuneStateG, reuneDispatchG] = useReducer(reuneReducer, reuneInitialState)

    //Combina los estados
    const state: GlobalState = {
        modalStateG,
        reuneStateG
    }

    // Combina los dispatchers
    const dispatch: Dispatch<GlobalActions> = (action) => {
        if ('type' in action) {
            if (action.type.startsWith('modal')) {
                modalDispatchG(action as ModalActions)
            } else if (action.type.startsWith('reune_')) {
                reuneDispatchG(action as reuneActions)
            }
        }
    }

    return (
        //Se coloca el GlobalContext con sintaxis de componente y se pasa state y dispatch, de esa forma al instanciar hay acceso a state y dispatch
        <GlobalContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}