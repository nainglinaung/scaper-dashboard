import { Link } from 'react-router-dom';
import './Global.css';

import Auth from './Auth';
import TableLayout  from '../layouts/TableLayout'
import Navbar from '../layouts/navbar';
function App() {

  return (
    <Auth>
      {/* <h1 className="text-3xl font-bold">
    Hello world!  you can log out in <Link to="/logout">here</Link>
    </h1> */}
     
      <Navbar />
       <TableLayout />
      </Auth>
  );
  
   
}

export default App;
