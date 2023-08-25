import Home from './Pages/Home';
import { Swipe } from './Pages/Swipe';
import { Navbar } from './layouts/Navbar';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="*" element={<NotFound />}/> */}
      </Routes>

      {/* <Footer/> */}
    </Router>
  )
}
