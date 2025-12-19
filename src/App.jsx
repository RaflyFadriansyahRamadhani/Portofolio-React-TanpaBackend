import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import AppFoother from "./components/Foother";
import Home from "./pages/Home";
import Porto from "./pages/Porto";
import Contact from "./pages/Contact";
import Homeevent from "./pages/portofolio/Homeevent";
import Tokobunga from "./pages/portofolio/Tokobunga";
import Zakatinfak from "./pages/portofolio/Zakatinfak";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <AppNavbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/porto" element={<Porto />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portofolio/homeevent" element={<Homeevent />} />
            <Route path="/portofolio/tokobunga" element={<Tokobunga />} />
            <Route path="/portofolio/zakatinfak" element={<Zakatinfak />} />
          </Routes>
        </main>

        <AppFoother />
      </div>
    </Router>
  );
}

export default App;
