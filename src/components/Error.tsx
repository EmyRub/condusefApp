import React from "react";

export default function Error({ children }: { children: React.ReactNode }) {

    return (
        <p className="text-center text-white bg-rose-800  p-3 mb-3 rounded-3xl">{children}</p>
    )
}
