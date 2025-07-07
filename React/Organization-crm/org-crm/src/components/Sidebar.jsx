import React from "react";
import "../styles/Sidebar.css";
import { NavLink } from 'react-router-dom';
import { Home, Users, GalleryVerticalEnd, Archive, ChartNoAxesCombined, Settings, HelpCircle } from "lucide-react";

const menuItems = [
  { label: 'Dashboard', to: '/dashboard', icon: <Home className="sidebar-icon" /> },
  { label: 'CRM', to: '/crm', icon: <Users className="sidebar-icon" /> },
  { label: 'Milk Production', to: '/milk-production', icon: <GalleryVerticalEnd className="sidebar-icon" /> },
  { label: 'Inventory', to: '/inventory', icon: <Archive className="sidebar-icon" /> },
  { label: 'Cattle Management', to: '/cattle-management', icon: <Users className="sidebar-icon" /> },
  { label: 'Reports', to: '/reports', icon: <ChartNoAxesCombined className="sidebar-icon" /> },
  { label: 'Settings', to: '/settings', icon: <Settings className="sidebar-icon" /> },
  { label: 'Help & Support', to: '/help', icon: <HelpCircle className="sidebar-icon" /> },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="menu-label">Menu</h3>
      <nav className="menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className="nav-link"
            activeclassname="active">
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="support-box">
        <p className="support-title">Need Help?</p>
        <p className="support-subtitle">Contact our support team for assistance.</p>
      </div>
    </div >
  );
};

export default Sidebar;
