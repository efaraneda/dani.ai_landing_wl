import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./VisbyRoundCF-Regular.woff";
import Home from "./pages/EN/Home";

function App() { 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

