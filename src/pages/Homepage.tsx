import './Global.css';
import { useEffect, useState } from 'react';
import TableLayout from '../layouts/TableLayout'
import { QueryTable, TableData } from '../types/searchresult';
import { useAlert } from '../hooks/useAlert';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


function Home() {

  const [data, setData] = useState<TableData[]>([]);
  const { handleClose, alert, setAlert } = useAlert();
  const [cursor, setCursor] = useState<QueryTable>({});
  
  const {logout,uploadFile,loadData} = useContext(AppContext)

  const OnFileUpload = (data: FormData) => {
    uploadFile(data).then((response: { showError: boolean, message: string }) => {
      if (response.showError) {
        setAlert({message:response.message, showError:response.showError})
        }
    })
  }
 
  useEffect(() => {
    loadData(cursor).then((data: TableData[]) => {
      setData(data)
    }).catch((error: { message: string; }) => {
      if (error.message === 'HTTP status 401') {
        logout()
      }
    });
  }, [cursor, loadData, logout])
 

  return (
      <TableLayout table={data} cursor={cursor} setCursor={setCursor} OnFileUpload={OnFileUpload} alert={alert} handleClose={handleClose} />
  );
}

export default Home;
