import './Global.css';
import { useEffect,useState } from 'react';
import { useCookies } from 'react-cookie';
import AuthProvider from '../providers/Auth';
import TableLayout  from '../layouts/TableLayout'
import Navbar from '../layouts/navbar';
import { TableData } from '../types/table';
import SearchServiceClass from "../services/search.services";


function Home() {

  const [cookie] = useCookies(["accessToken"]);
  const [data, setData] = useState<TableData[]>([]);
   
  
    useEffect(() => {
    
    const searchService = new SearchServiceClass(`Bearer ${cookie.accessToken}`);
    searchService.list().then((data) => {
      setData(data);
    })
   
  },[cookie])


  return (
    <AuthProvider> 
      <Navbar />
      <TableLayout table={data} />
    </AuthProvider>
  );
}

export default Home;
