// import logo from './logo.svg';
import './App.css';
import Nav from './nav.js'
import './nav.css';
import Login from './login.js';
import './login.css';
import { Routes, Route } from "react-router-dom";
import Stage3 from './components/Stage3/stage3'

function App() {
  return (
       <div>
        {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Nav />} />
      </Routes> */}
        <Stage3/>
       </div>
     
  );
}

export default App;
