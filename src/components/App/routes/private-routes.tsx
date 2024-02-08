import { Outlet } from "react-router-dom";

export function PrivateRoutes(): JSX.Element {
    return <Outlet />;

    // return (
    //     authService.accessToken ? <Outlet /> : <Navigate to="/login" />
    // );
}

export default PrivateRoutes;
