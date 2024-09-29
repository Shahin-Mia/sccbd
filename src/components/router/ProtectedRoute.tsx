import { Navigate } from 'react-router-dom';
import DashboardLayout from '../admin/layout/DashboardLayout';
import { decryptData } from '../../lib/cryptoUtils';


const isAuthenticated = () => {
    const data = sessionStorage.getItem('encrypted_data');
    if (data) {
        const user = decryptData(data);
        if (user.hasOwnProperty("email") && user.hasOwnProperty("api_key")) {
            return true;
        }
    }

};

const ProtectedRoute = () => {
    return isAuthenticated() ? <DashboardLayout /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
