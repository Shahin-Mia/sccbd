import { Navigate, useSearchParams } from 'react-router-dom';
import ResetForm from './ResetForm';


const isAuthenticated = () => {
    const [queryParams] = useSearchParams();
    const token = queryParams.get("token");

    if (!token) {
        return false;
    }

    return true;
};

const ProtectedResetForm = () => {
    return isAuthenticated() ? <ResetForm /> : <Navigate to="/" />;
};

export default ProtectedResetForm;
