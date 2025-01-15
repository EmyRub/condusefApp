import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./views/QuejasPage";
import Layout from "./layouts/Layout";
import NewAcountPage from "./views/NewAcountPage";
import BgLogin from "./layouts/BgLogin";
import { lazy, Suspense } from "react";

const LoginPage = lazy(() => import("./views/LoginPage"))

export default function AppRouter() {
    return (
        <BrowserRouter basename="/condusefApp">

            <Routes>

                <Route element={<BgLogin />}>

                    <Route path="/" element={
                        <Suspense fallback='Cargando...'>
                            <LoginPage />
                        </Suspense>
                    } />

                    <Route path="/newAcount" element={
                        <Suspense>
                            <NewAcountPage />
                        </Suspense>
                    } />
                </Route>

                <Route element={<Layout />}>
                    <Route path="/quejas" element={
                        <Suspense>
                            <IndexPage />
                        </Suspense>
                    } index />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
