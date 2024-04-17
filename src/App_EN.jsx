import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/EN/Home";
import Privacidad from "./pages/EN/Privacidad";
import Terminos from "./pages/EN/Terminos";
import Error404 from "./pages/EN/Error404";
import Chat from "./pages/ES/Chat";
import Login from "./pages/ES/Login";
import Form from "./pages/ES/form";

function App() { 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacidad />} /> 
        <Route path="/terms" element={<Terminos />} />
        <Route path="/registro" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
