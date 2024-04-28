import { BrowserRouter, Routes, Route } from "react-router-dom";
import Evaluacion from "./pages/ES/Evaluacion";
import Privacidad from "./pages/ES/Privacidad";
import Terminos from "./pages/ES/Terminos";
import Chat from "./pages/ES/Chat";
import Login from "./pages/ES/Login";
import "../public/VisbyRoundCF-Regular.woff";
import Form from "./pages/ES/form";
import Home from "./pages/ES/Home";

function App() { 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evaluacion-psicologica" element={<Evaluacion />} />
        <Route path="/privacidad" element={<Privacidad />} /> 
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/registro" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

