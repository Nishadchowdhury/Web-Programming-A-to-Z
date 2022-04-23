import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import OrderReviwe from './Components/OrderReviwe/OrderReviwe';
import Grandpa from './Components/Grandpa/Grandpa';

function App() {
  return (
    <div className='App'>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/orderreviwe" element={<OrderReviwe   />} />
        <Route path='grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
