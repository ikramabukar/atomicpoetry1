import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import PoetrySearch from "./pages/PoetrySearch";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newsletter";

// import components
import NavBar from "./components/NavBar";

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
        </div>
      </Router>
    </div>
  );
}

export default App;
