import './App.css';
import { Route, Routes } from 'react-router';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';
import UpdateUser from './Components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='user/add' element={<AddUser />} />
        <Route path='/update/:id' element={<UpdateUser />} />

      </Routes>
    </div>
  );
}

export default App;
