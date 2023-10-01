import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import PoetrySearch from "./pages/PoetrySearch";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";

import Newsletter from "./pages/Newsletter";
// import components
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <NavBar />
          <Routes>
            <Route path="/" element={<PoetrySearch />}></Route>
            <Route path="Newsletter" element={<Newsletter />}></Route>

            <Route path="Contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
