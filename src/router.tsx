import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./views/QuejasPage";
import Layout from "./layouts/Layout";
import LoginPage from "./views/LoginPage";
import NewAcountPage from "./views/NewAcountPage";
import BgLogin from "./layouts/BgLogin";

export default function AppRouter() {
    return (
        <BrowserRouter basename="/condusefApp">
            <Routes>
                <Route element={<BgLogin/>}>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/newAcount" element={<NewAcountPage />}></Route>
                </Route>

                <Route element={<Layout />}>
                    <Route path="/quejas" element={<IndexPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
