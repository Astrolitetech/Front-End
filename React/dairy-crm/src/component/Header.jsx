import React from 'react';
import '../styles/header.css';
import logo from '../assets/logo.jpg';

const Header = ({ title }) => {
    return (
        <header className='header'>
            <img src={logo} className='logo-header' />
            <h1 className='title'>{title}</h1>
        </header>
    );
};

export default Header;
