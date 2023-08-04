import Login from './components/loginpage/login.js';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Stage2 from './components/Stage2/Stage2';
import Stage3 from './components/Stage3/Stage3';
import Stage4 from './components/Stage4/Stage4';

function App() {
  return (
       <div>
         <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tele-calling" element={<Dashboard />} />
        <Route  path='/sales-assistant' element={<Stage2/>} ></Route>
        <Route path='/bussiness-manager' element={<Stage3/>} ></Route>
        <Route path='/sales-specalist' element={<Stage4/>} ></Route>
      </Routes>
       </div>
     
  );
}

export default App;
