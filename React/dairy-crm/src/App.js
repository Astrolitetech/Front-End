import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Dashboard from './pages/Dashboard';
import Milk from './pages/Milk';
import LoginPage from './pages/Login';
import Customers from './pages/Customers';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/milk" element={<Milk />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}  

export default App;