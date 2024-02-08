import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomeDashboard } from "pages/home-dashboard";
import PrivateRoutes from "./routes/private-routes";
import { Login } from "pages/login";

export function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path={"/"} element={<HomeDashboard />} />
                </Route>
                <Route path={"/login"} element={<Login />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}