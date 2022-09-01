
import './App.css';
import Register from './login/Register';
import Login from './login/Login';
import {  Routes,
  Route, Navigate } from 'react-router-dom';



  

const App= () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/Register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/' element={<Navigate to="/Register"/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
