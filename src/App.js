import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Router, Route,Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Userform from "./components/Userform";
import User from "./components/User";


function App() {
  return (
    <div className='App'>
      <Navbar/>
      
       <Routes>
      
     <Route path="/user" element={<User/>}/>
     <Route path="/" element={ <Userform/>}/>
     </Routes>
     
     </div>
  );
}

export default App;
