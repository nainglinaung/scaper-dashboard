import React,{useEffect} from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
function Logout() {

    const [,,removeCookie] = useCookies(['accessToken']);
    const navigate = useNavigate()
    useEffect(() => {
        removeCookie("accessToken",{path:'/'});
        navigate('/login')
    },[])
  return (
    <div>Logout</div>
  )
}

export default Logout