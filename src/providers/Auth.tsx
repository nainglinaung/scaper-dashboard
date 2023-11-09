import React, { useEffect, ReactNode, useState } from 'react'
import Navbar from '../layouts/Navbar';
import { useCookies } from 'react-cookie';
import { useNavigate, useLocation } from 'react-router';
import { UserService } from '../services/user.service';
import { Credentials } from '../types/credentials';
import { AppContext, TaskContextProps } from '../context/AppContext';
import { useSearch } from '../hooks/useSearch'
interface Props {
    children?: ReactNode
}


const guestPages = [
    '/login',
    '/register',
];

export const AuthProvider = ({ children }: Props) => {
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const location = useLocation();
    
    const handleLogin = async (credentials: Credentials) => {
        return UserService.login(credentials).then(({ accessToken }) => {
            setCookie("accessToken", accessToken);
            navigate('/')
        })
    }

    const handleRegister  = async (credentials: Credentials) => {
        return UserService.register(credentials).then(({ accessToken }) => {
            setCookie("accessToken", accessToken);  
            navigate('/')
        })
    }


    const {uploadFile,loadData} = useSearch(cookie.accessToken)

    
    const logout = () => {
        removeCookie("accessToken", { path: '/' });
        navigate('/login')
    }
    



    const value: TaskContextProps = { handleLogin,logout,handleRegister,uploadFile,loadData };

    const navigate = useNavigate();

    useEffect(() => {
        
        if (cookie.accessToken) {
            setIsLogin(true)
        }

        if (!guestPages.includes(location.pathname) && !cookie.accessToken) {
            navigate('/login');
        } 

        if (guestPages.includes(location.pathname) && cookie.accessToken) {
            navigate('/');
        }

      
    }, [cookie.accessToken, location.pathname, navigate]);


    return (
        <AppContext.Provider value={value}>
            {isLogin && <Navbar />}
            {children}
        </AppContext.Provider>
    )

}


// export default Auth