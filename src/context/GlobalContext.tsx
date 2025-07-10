import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { ModalActions, modalInitialState, modalReducer, ModalStateProps } from "../reducers/modalReducer"
import { formActions, formInitialState, formReducer, formStateProps } from "../reducers/formReducer"


//Definir los tipos de estado y acciones combinados
type GlobalState = {
    modalStateG: ModalStateProps,
    formStateG: formStateProps
}

type GlobalActions = ModalActions | formActions;

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
    const [formStateG, formDispatchG] = useReducer(formReducer, formInitialState)

    //Combina los estados
    const state: GlobalState = {
        modalStateG,
        formStateG
    }

    // Combina los dispatchers
    const dispatch: Dispatch<GlobalActions> = (action) => {
        //verifica si la acción tiene la propiedad type
        if ('type' in action) {
            if (action.type.startsWith('modal-')) {
                modalDispatchG(action as ModalActions)
            } else if (action.type.startsWith('client-')) {
                formDispatchG(action as formActions)
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