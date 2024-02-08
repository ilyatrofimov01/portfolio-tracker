import { Navigate, Outlet } from "react-router-dom";
import authService from "services/auth/auth-service";

export function PrivateRoutes(): JSX.Element {

    return (
        authService.accessToken ? <Outlet /> : <Navigate to="/login" />
    );
}

export default PrivateRoutes;
