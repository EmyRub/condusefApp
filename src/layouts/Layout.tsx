import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <>
            <main className="p-4 w-full bg-gradient-to-t from-cyan-500 to-slate-800">
                <Outlet />
            </main>

        </>
    )
}
