import React,{useEffect,useContext} from 'react'
import { AppContext } from "../context/AppContext";

function Logout() {

  const { logout } = useContext(AppContext);
    useEffect(() => {
       logout()
    },[])
  return (
    <div></div>
  )
}

export default Logout