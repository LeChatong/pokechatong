import {Navigate, Outlet, useLocation} from 'react-router-dom';
import AuthenticationService from './services/authentication-service';

const PrivateRoute = () => {
    const location = useLocation();
    const isAuthenticated = AuthenticationService.isAuthenticated;
    if(!isAuthenticated) {
        return <Navigate to="/login" state={{from: location}} replace />;
    }
    return <Outlet />;
};

export default PrivateRoute;