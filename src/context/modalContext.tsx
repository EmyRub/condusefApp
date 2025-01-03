import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { initialState, ModalActions, modalReducer, ModalState } from "../reducers/modalReducer"

type ModalContextProps = {
    state: ModalState;
    dispatch: Dispatch<ModalActions>;
}

type modalProviderProps = {
    children: ReactNode
}

//context.- Acción del estado global
//Se puede poner (null!) o ({} as modalContextProps) para quitar error
export const ModalContext = createContext<ModalContextProps>(null!)


//Provider.- donde vienen los datos => reducer
//children.- Hijos del componente
export const ModalProvider = ({ children }: modalProviderProps) => {

    const [state, dispatch] = useReducer(modalReducer, initialState)

    return (
        //Se coloca el modalContext con sintaxis de componente y se pasa state y dispatch, de esa forma al instanciar hay acceso a state y dispatch
        <ModalContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}