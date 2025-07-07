import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Header.css";
import logo from '../assets/logo.jpg';
import { Bell, CircleUser, Moon, Sun } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="header">
      <div className="left" onClick={handleClick}>
        <img src={logo} alt="logo" className="logo" />
        <h2>Dairy Farm</h2>
      </div>

      <div className="mid">
        <input type="text" placeholder="Search..." className="search-box" />
      </div>

      <div className="right">
        <Bell className="header-icon" />
        <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <Sun className="header-icon" /> : <Moon className="header-icon" />}
        </div>
        <CircleUser className="header-icon" />
      </div>
    </div>
  );
};

export default Header;
