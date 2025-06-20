import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import ResourcesPage from "./Components/ResourcesPage";
import AddResourcePage from "./Components/AddResourceForm"; // Make sure this is the correct file

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><HomePage /><ResourcesPage /></>} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/add-resource" element={<AddResourcePage />} />
        <Route path="/add-resource/:type" element={<AddResourcePage />} />
      </Routes>
    </Router>
  );
}

export default App;
