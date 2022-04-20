import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Orders from './Components/Orders/Orders';
import RequirAuth from './Components/RequireAuth/RequirAuth';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        
        <Route path="/products" element={
          <RequirAuth>
            <Products />
          </RequirAuth>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={

          <RequirAuth>
            <Orders />
          </RequirAuth>

        } />

      </Routes>
    </div>
  );
}

export default App;
