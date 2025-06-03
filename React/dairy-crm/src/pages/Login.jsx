import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function LoginPage() {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Placeholder login logic
        if (loginId === "Hai" && password === "hello") {
            navigate('/dashboard'); // Redirect to dashboard
        } else {
            alert('Enter Login ID and Password');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="form-group">
                    <label>Login ID:</label>
                    <input
                        type="text"
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
