import './Global.css';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import AuthProvider from '../providers/Auth';
import TableLayout from '../layouts/TableLayout'
import Navbar from '../layouts/navbar';
import { TableData } from '../types/table';
import SearchServiceClass from "../services/search.services";
import { useNavigate } from 'react-router';


function Home() {

  const [data, setData] = useState<TableData[]>([]);
  const navigate = useNavigate()
  const [cookie, , removeCookie] = useCookies(['accessToken']);
  useEffect(() => {

    const searchService = new SearchServiceClass(`Bearer ${cookie.accessToken}`);
    searchService.list().then((data) => {
      setData(data)
    }).catch((error) => {
      if (error.message === 'HTTP status 401') {
        removeCookie("accessToken", { path: '/' });
        navigate('/login')
      }

    })

  }, [cookie])


  return (
    <AuthProvider>
      <Navbar />
      <TableLayout table={data} />
    </AuthProvider>
  );
}

export default Home;
