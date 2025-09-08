import "./App.css";
import Footer from "./components/footer";
import Home from "./components/home";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Project from "./components/projects";
import { ThemeProvider } from "./contexts/ThemeContext";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Simulating API call delay

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
