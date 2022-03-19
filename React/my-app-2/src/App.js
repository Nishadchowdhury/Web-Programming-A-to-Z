import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import Test from './Components/Test/Test';

function App() {
 const countF = () => {
   console.log('Hello paichio bro');
 }
  return (
    <div className="App">
      <Menubar></Menubar>
    </div>
  );
}


  export default App;
  