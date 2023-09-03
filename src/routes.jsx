import { About } from "./Pages/About";
import Home from "./Pages/Home";
import { Lost } from "./Pages/Lost";
import { Footer } from "./layouts/Footer";
import { Navbar } from "./layouts/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Lost />}/>
      </Routes>

      <Footer/>
    </Router>
  );
}
