import React from 'react';
import logo from '../assets/logo.jpg';
import '../styles/Welcome.css';


import { Award, Users, Leaf, Truck, Calendar, Star, Phone, Mail } from 'lucide-react';

function Welcome() {
    return (
        <div className="page-container welcome-hero">
            <div className="welcome-header">
                <img src={logo} alt="logo" className="welcome-logo" />
                <h1 className="welcome-title">Welcome to My Dairy Farm</h1>
                <p className="welcome-tagline">Fresh. Natural. Local. <Leaf className="icon-leaf" /></p>
            </div>

            <section className="about">
                <h2>About Us</h2>
                <p>
                    At our Dairy Farm, we are committed to providing fresh, organic milk and dairy products
                    straight from our pasture-raised cows. Our farm is family-owned and dedicated to
                    sustainable, ethical practices.
                </p>
                <div className="about-highlights">
                    <div className="highlight"><Award size={32} /> <span>Certified Organic</span></div>
                    <div className="highlight"><Users size={32} /> <span>Family-Owned Since 1985</span></div>
                    <div className="highlight"><Truck size={32} /> <span>Fast Local Delivery</span></div>
                </div>
            </section>

            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="features-grid">
                    <div className="feature-card"><Star size={28} /> <h4>Premium Quality</h4><p>Only the best milk from healthy, pasture-raised cows.</p></div>
                    <div className="feature-card"><Leaf size={28} /> <h4>Eco-Friendly</h4><p>We use sustainable farming and packaging practices.</p></div>
                    <div className="feature-card"><Users size={28} /> <h4>Community Focused</h4><p>Supporting local farmers and families for decades.</p></div>
                    <div className="feature-card"><Calendar size={28} /> <h4>Daily Freshness</h4><p>Milk delivered within hours of milking, every day.</p></div>
                </div>
            </section>

            <section className="contact">
                <h2>Contact & Connect</h2>
                <div className="contact-info">
                    <div><Phone size={20} /> <span>+91 98765 43210</span></div>
                    <div><Mail size={20} /> <span>info@mydairyfarm.com</span></div>
                </div>
            </section>
        </div>
    );
}

export default Welcome;
