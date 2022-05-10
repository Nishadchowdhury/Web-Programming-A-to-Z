import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home'
import Header from './pages/Header/Header';

function App() {
  return (
    <>
     
     <Routes>
       
       <Route path='/' element={<Home/>} />
     </Routes>

    </>
  );
}

export default App;
