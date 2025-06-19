import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/logo.jpg';

// Lucide Icons
import { LayoutDashboard, Users, Milk, ThumbsUp, Package, Factory, ChevronRight, Truck, ShoppingCart, MessageSquareText, LockKeyhole, ChevronLeft, CircleUser } from 'lucide-react';

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);

    const menuItems = [
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Customers', path: '/customers', icon: <Users size={20} /> },
        { name: 'Milk Collection', path: '/milk', icon: <Milk size={20} /> },
        { name: 'Quality Check', path: '/quality', icon: <ThumbsUp size={20} /> },
        { name: 'Inventory', path: '/inventory', icon: <Package size={20} /> },
        { name: 'Production', path: '/production', icon: <Factory size={20} /> },
        { name: 'Supply', path: '/supply', icon: <Truck size={20} /> },
        { name: 'Sales', path: '/sales', icon: <ShoppingCart size={20} /> },
        { name: 'Feedback', path: '/feedback', icon: <MessageSquareText size={20} /> },
        { name: 'Access Control', path: '/access', icon: <LockKeyhole size={20} /> },
    ];

    return (
        <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
            <div>
                {expanded ? <div className='sidebar-header'><img src={logo} className='logo' alt='logo' /><CircleUser className='avatar.expanded' /></div> : <CircleUser className='avatar' />}
            </div>
            <nav className="nav-menu">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className="nav-link"
                        activeclassname="active"
                    >
                        <span className="icon">{item.icon}</span>
                        {expanded && <span className="label">{item.name}</span>}
                    </NavLink>
                ))}
            </nav>
            <div className="toggle-btn" onClick={() => setExpanded(!expanded)}>
                {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </div>
        </div>
    );
};

export default Sidebar;
