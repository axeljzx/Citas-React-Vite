import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Pacientes/Header";
import Pacientes from "./components/Pacientes/Pacientes";
function App() {
  return (
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path="/" element={<Pacientes />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
