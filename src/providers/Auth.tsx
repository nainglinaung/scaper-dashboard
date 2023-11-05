import React,{useEffect,ReactNode} from 'react'

import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';

interface Props {
    children?: ReactNode
    // any props that come into the component
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
            <div {...props}>{children}</div>

   )

}

export default Auth