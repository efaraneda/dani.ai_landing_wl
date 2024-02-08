import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/ES/Home";
import Privacidad from "./pages/ES/Privacidad";
import Terminos from "./pages/ES/Terminos";
import Error404 from "./pages/ES/Error404";
import Planes from "./pages/ES/Planes";
import PlanesCL from "./pages/ES/PlanesCL";
import ConsejeroRelaciones from "./pages/ES/Relationship-Counselor";
import Consejero from "./pages/ES/Counselor";

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<Privacidad />} /> 
        <Route path="/terminos" element={<Terminos />} /> 
        <Route path="/planes" element={<Planes />} />
        <Route path="/planes/CL" element={<PlanesCL />} />
        <Route path="/relationship-counselor" element={<ConsejeroRelaciones />} />
        <Route path="/consejero" element={<Consejero />} />
        <Route path="/blog" element={<Navigate to="/blog" />} />
        <Route path="/wp-admin/install.php" element={<Navigate to="/wp-admin/install.php" />} />
        <Route path="/blog/wp-admin/install.php" element={<Navigate to="/blog/wp-admin/install.php" />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
