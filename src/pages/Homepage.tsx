import './Global.css';
import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import AuthProvider from '../providers/Auth';
import TableLayout from '../layouts/TableLayout'
import Navbar from '../layouts/navbar';
import { QueryTable, TableData } from '../types/table';
import SearchServiceClass from "../services/search.services";
import { useNavigate } from 'react-router';


function Home() {

  const [data, setData] = useState<TableData[]>([]);
  const navigate = useNavigate()
  const [cookie, , removeCookie] = useCookies(['accessToken']);
  const [cursor, setCursor] = useState<QueryTable>({ take: 1, skip: 0 });

  const LoadData = useCallback(() => {
    const searchService = new SearchServiceClass(`Bearer ${cookie.accessToken}`);
    searchService.list(cursor).then((data) => {
      setData(data)
    }).catch((error) => {
      if (error.message === 'HTTP status 401') {
        removeCookie("accessToken", { path: '/' });
        navigate('/login')
      }
    })
  }, [cookie.accessToken, cursor, navigate, removeCookie])


  useEffect(() => {
    LoadData()
  }, [cookie, setCursor, cursor, LoadData])


  return (
    <AuthProvider>
      <Navbar />
      <TableLayout table={data} setCursor={setCursor} cursor={cursor} />
    </AuthProvider>
  );
}

export default Home;
