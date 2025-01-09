import React from "react";

type errorProps = {
    children: React.ReactNode,
    login?: boolean
}

export default function Error({ children, login }: errorProps) {

    return (
        <p className={login ? 'text-center text-white bg-rose-800 p-3 mb-3 rounded-3xl' : 'text-red-800 text-center my-2 text-sm'}>{children}</p>
    )
}
