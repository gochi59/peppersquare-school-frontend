import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarForSchool";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import NavbarForSchool from "./components/NavbarForSchool";

const App: React.FC = () => {
  return (
    <Router>
      <NavbarForSchool />
      <Routes>
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </Router>
  );
};

export default App;
