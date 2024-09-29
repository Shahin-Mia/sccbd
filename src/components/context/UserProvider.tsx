import { createContext, useState, ReactNode, useEffect } from 'react';
import { User } from '../../../http/users';
import { decryptData, encryptData } from '../../lib/cryptoUtils';

interface User {
    username: string;
    profile_image: string;
    email: string;
    role: string;
    api_key: string;
}

interface UserContextType {
    user: User | null;
    login: (userData: { email: string, password: string }) => any;
    logout: () => void;
}

const initialContextValues: UserContextType = {
    user: null,
    login: () => { },
    logout: () => { }
}

export const UserContext = createContext<UserContextType>(initialContextValues);

interface UserProviderProps {
    children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const data = sessionStorage.getItem("encrypted_data");
        if (data) {
            const user = decryptData(data);
            setUser(user);
            console.log(user)
        }
    }, [])

    const login = async (userData: { email: string, password: string }) => {
        const data = await User.loginUser(userData);

        if (data.status === "error" && data.hasOwnProperty("message")) {
            return data.message;
        }

        setUser(data.user);
        sessionStorage.setItem("encrypted_data", encryptData(data.user));
        window.location.href = "/dashboard";
    };

    const logout = () => {
        setUser(null);
        sessionStorage.clear();
        if (window.location.pathname.match(/dashboard/)) {
            window.location.href = "/login"
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};


export default UserProvider