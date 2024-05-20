import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Mens from "./pages/Mens";
import Footer from "./components/Footer"
import Header from "./components/Header";
import Donate from "./pages/Donate";
import Volunteering from "./pages/Volunteering";
// import Impacts from "./pages/Impacts";
import SocialLinks from "./components/SocialLinks";
import Gallery from "./pages/Gallery";
import Admin from "./pages/Admin";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar />
      <SocialLinks/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/volunteering" element={<Volunteering />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
