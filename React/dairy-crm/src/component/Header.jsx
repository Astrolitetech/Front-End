import React, { useState } from 'react';
import { Search, X, Bell, Settings, CircleUser } from 'lucide-react';
import '../styles/header.css'; // Link your styles
import logo from '../assets/logo.jpg'; // Update with your CRM logo path

const Header = ({ title }) => {
    const [query, setQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        if (isSearchOpen) setQuery('');
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <header className="crm-header">
            <div className="header-left">
                <img src={logo} alt="CRM Logo" className="crm-logo" />
                <h1 className="crm-title">{title}</h1>
            </div>

            <div className="header-right">
                <div className="header-center">
                    <div className={`search-container ${isSearchOpen ? 'open' : ''}`}>
                        {isSearchOpen && (
                            <input
                                type="text"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="search-input"
                            />
                        )}
                        {isSearchOpen ? (
                            <X onClick={toggleSearch} className="search-icon" />
                        ) : (
                            <Search onClick={toggleSearch} className="search-icon" />
                        )}
                    </div>
                </div>
                <Bell className="icon" />
                <Settings className="icon" />
                <CircleUser className="icon" />
            </div>
        </header>
    );
};

export default Header;
