/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { login, logout, register } from "../api/auth-api";
import { AuthContext, useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();
    
    const loginHandler = async (email, password) => {

        const {password: _, ...authData} = await login(email, password);

        changeAuthState(authData);
      
        return authData;
    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const {password: _, ...authData} = await register(email, password);

        changeAuthState(authData);

        return authData;
    };

    return registerHandler;
};

export const useLogout = () => {
    const { logout: localLogout } = useAuthContext();

    const logoutHandler = async () => {
        localLogout();
        await logout();
    };
    return logoutHandler;
};