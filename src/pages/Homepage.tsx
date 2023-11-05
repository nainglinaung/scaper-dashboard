import { Link } from 'react-router-dom';
import './Global.css';

import Auth from './Auth';

function App() {

  return (
    <Auth>    <h1 className="text-3xl font-bold">
    Hello world!  you can log out in <Link to="/logout">here</Link>
    </h1>
      </Auth>
  );
  
   
}

export default App;
