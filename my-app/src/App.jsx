import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Mens from "./pages/Mens";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
