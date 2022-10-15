// import logo from './logo.svg';
import './App.css';
import Nav from './nav.js'
import './nav.css';
import Login from './login.js';
import './login.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Stage2 from './components/Stage2/Stage2';

function App() {
  return (
       <div>
         <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tele-calling" element={<Dashboard />} />
        <Route  path='/sales-assistant' element={<Stage2/>} ></Route>
      </Routes>
       </div>
     
  );
}

export default App;
