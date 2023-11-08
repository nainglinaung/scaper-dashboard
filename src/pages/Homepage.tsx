import './Global.css';
import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import AuthProvider from '../providers/Auth';
import TableLayout from '../layouts/TableLayout'
import { QueryTable, TableData } from '../types/searchresult';
import SearchServiceClass from "../services/search.services";
import { useNavigate } from 'react-router';
import { useAlert } from '../hooks/useAlert';



function Home() {

  const [data, setData] = useState<TableData[]>([]);
  const navigate = useNavigate();
  const { handleClose, alert, setAlert } = useAlert();
  const [cookie, , removeCookie] = useCookies(['accessToken']);
  const [cursor, setCursor] = useState<QueryTable>({});
  const searchService = new SearchServiceClass(`Bearer ${cookie.accessToken}`);


  const OnFileUpload = (data: FormData) => {
    searchService.uploadCSV(data).then((response) => {
      if (response.message) {
        setAlert({message:response.message, showError:true})
      }
    })
  }

  const LoadData = useCallback(() => {

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
  console.log(alert)

  return (
    <AuthProvider>
      <TableLayout table={data} cursor={cursor} setCursor={setCursor} OnFileUpload={OnFileUpload} alert={alert} handleClose={handleClose} />
    </AuthProvider>
  );
}

export default Home;
