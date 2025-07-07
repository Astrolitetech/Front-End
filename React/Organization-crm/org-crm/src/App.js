// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CRMContent from "./pages/CRMContent";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import MilkProduction from "./pages/MilkProduction";
import Welcome from "./pages/Welcome";
import Inventory from "./pages/Inventory";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="body">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="app">
          <Sidebar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/crm" element={<CRMContent />} />
              <Route path="/milk-production" element={<MilkProduction />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/settings" element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
