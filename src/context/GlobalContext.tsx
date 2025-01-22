import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { ModalActions, modalInitialState, modalReducer, ModalState } from "../reducers/modalReducer"
import { reuneActions, reuneInitialState, reuneReducer, reuneState } from "../reducers/reuneReducer"


//Definir los tipos de estado y acciones combinados
type GlobalState = {
    modalState: ModalState,
    reuneState: reuneState
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
    const [modalState, modalDispatch] = useReducer(modalReducer, modalInitialState)
    const [reuneState, reuneDispatch] = useReducer(reuneReducer, reuneInitialState)

    // Combina los dispatchers
    const dispatch: Dispatch<GlobalActions> = (action) => {
        if ('type' in action) {
            if (action.type.startsWith('modal')) {
                modalDispatch(action as ModalActions)
            } else if (action.type.startsWith('reune_')) {
                reuneDispatch(action as reuneActions)
            }
        }
    }

    //Combina los estados
    const state: GlobalState = {
        modalState,
        reuneState
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