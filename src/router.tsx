import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import Layout from "./layouts/Layout";
import LoginPage from "./views/LoginPage";
import NewAcountPage from "./views/NewAcountPage";
import BgLogin from "./layouts/BgLogin";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BgLogin/>}>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/newAcount" element={<NewAcountPage />}></Route>
                </Route>

                <Route element={<Layout />}>
                    <Route path="/inicio" element={<IndexPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
