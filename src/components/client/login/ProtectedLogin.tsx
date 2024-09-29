import { Navigate } from 'react-router-dom';
import Login from './Login';
import { decryptData } from '../../../lib/cryptoUtils';


const isAuthenticated = () => {
    const data = sessionStorage.getItem('encrypted_data');
    if (data) {
        const user = decryptData(data);
        if (user.hasOwnProperty("email") && user.hasOwnProperty("api_key")) {
            return true;
        }

        return false;
    }

};

const ProtectedLogin = () => {
    return isAuthenticated() ? <Navigate to="/" /> : <Login />;
};

export default ProtectedLogin;
