import { Navigate } from 'react-router-dom';
import GreetingPage from './GreetingPage';


const isSignedUp = () => {
    return !!localStorage.getItem("isSignedUp")

};

const ProtectedGreeting = () => {
    return isSignedUp() ? <GreetingPage /> : <Navigate to="/" />;
};

export default ProtectedGreeting;
