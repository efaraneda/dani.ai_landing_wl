import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/ES/Home";
import Privacidad from "./pages/ES/Privacidad";
import Terminos from "./pages/ES/Terminos";
import Error404 from "./pages/ES/Error404";
import ConsejeroRelaciones from "./pages/ES/Relationship-Counselor";
import Consejero from "./pages/ES/Counselor";

function App() { 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evaluacion" element={<Home />} />
        <Route path="/privacidad" element={<Privacidad />} /> 
        <Route path="/terminos" element={<Terminos />} /> 
        <Route path="/relationship-counselor" element={<ConsejeroRelaciones />} />
        <Route path="/consejera" element={<Consejero />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
