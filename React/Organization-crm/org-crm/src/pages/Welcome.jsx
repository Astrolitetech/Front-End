import React from 'react';
import logo from '../assets/logo.jpg';
import '../styles/Welcome.css';

function Welcome() {
    return (
        <div className="page-container">
            <img src={logo} alt="logo" className="welcome-logo" />

            <section className="about">
                <h1>Welcome to My Dairy Farm</h1>
                <p>Fresh. Natural. Local.</p>
                <h2>About Us</h2>
                <p>
                    At ower Dairy Farm, we are committed to providing fresh, organic milk and dairy products
                    straight from our pasture-raised cows. Our farm is family-owned and dedicated to
                    sustainable, ethical practices.
                </p>
            </section>
        </div>
    );
}

export default Welcome;
