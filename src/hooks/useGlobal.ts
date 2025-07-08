import { useContext } from "react"
import { GlobalContext } from "@/context/GlobalContext"

export const useGlobal = () => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error('useGlobal must be used within a globalProvider')
    }
    return context
}