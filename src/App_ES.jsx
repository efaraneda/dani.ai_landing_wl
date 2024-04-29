import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/ES/Chat";
import Login from "./pages/ES/Login";
import "./VisbyRoundCF-Regular.woff";
import Form from "./pages/ES/form";
import Home from "./pages/ES/Home";

function App() { 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

