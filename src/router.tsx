import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import Layout from "./layouts/Layout";
import LoginPage from "./views/LoginPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}></Route>
                <Route element={<Layout />}>
                    <Route path="/inicio" element={<IndexPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
