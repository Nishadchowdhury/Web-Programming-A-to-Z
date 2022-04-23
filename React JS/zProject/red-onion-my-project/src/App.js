import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <>
      <Header/>
     <Routes>

      <Route path='/' element={<Home  />} />

     </Routes>

    </>
  );
}

export default App;
