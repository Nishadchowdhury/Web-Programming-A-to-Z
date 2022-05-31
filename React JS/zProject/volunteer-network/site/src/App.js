import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home'
import { useEffect, useState } from "react";

function App() {




  return (
    <>

      <Routes>

        <Route path='/' element={<Home />} />
      </Routes>

    </>
  );
}

export default App;
