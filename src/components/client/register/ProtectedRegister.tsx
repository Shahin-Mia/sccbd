import { Navigate } from 'react-router-dom';
import { decryptData } from '../../../lib/cryptoUtils';
import RegisterForm from './RegisterForm';


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

const ProtectedRegister = () => {
    return isAuthenticated() ? <Navigate to="/" /> : <RegisterForm />;
};

export default ProtectedRegister;
