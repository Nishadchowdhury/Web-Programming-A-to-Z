import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
