import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/ES/Home";
import Privacidad from "./pages/ES/Privacidad";
import Terminos from "./pages/ES/Terminos";
import Error404 from "./pages/ES/Error404";

function App() { 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<Privacidad />} /> 
        <Route path="/terminos" element={<Terminos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
