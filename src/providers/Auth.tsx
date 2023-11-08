import React, { useEffect, ReactNode } from 'react'
import Navbar from '../layouts/Navbar';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';

interface Props {
    children?: ReactNode
}

const Auth = ({ children, ...props }: Props) => {
    const [cookie] = useCookies(['accessToken']);
    const navigate = useNavigate();
    useEffect(() => {
        if (!cookie.accessToken) {
            navigate('/login');
        }
    }, []);

    return (
        <div {...props}>
            <Navbar />
            {children}</div>

    )

}

export default Auth