import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <>
            <main className="p-4 w-full">
                <Outlet />
            </main>

        </>
    )
}
