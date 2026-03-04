import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import WritePage from "./pages/writePage.jsx";
function App() {
    return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/WritePage" element={<WritePage/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;