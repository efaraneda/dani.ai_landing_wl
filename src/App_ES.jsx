import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/ES/Chat";
import Login from "./components/Olivia/AuthPage/LogInForm";
import "./VisbyRoundCF-Regular.woff";
import Form from "./pages/ES/form";
import Home from "./pages/ES/Home";
import Registro from "./pages/ES/Login";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

