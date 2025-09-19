import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import AppFoother from "./components/Foother";
import Home from "./pages/Home";
import Porto from "./pages/Porto";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen ">
        <AppNavbar />
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/porto" element={<Porto />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <AppFoother />
      </div>
    </Router>
  );
}

export default App;
