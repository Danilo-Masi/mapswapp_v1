import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Globe from "./pages/Globe";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/globe" element={<Globe />} />
        <Route path="/success" element={<Success />} />
        {/* 
        <Route path="/cancel" element={<Cancel />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;