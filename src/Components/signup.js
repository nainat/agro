import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import App from '../App';

import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const root = ReactDOM.createRoot(document.getElementById('root'));


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {

            root.render(
                <React.StrictMode>
                  <BrowserRouter>
                  
                   <App/>
                  </BrowserRouter>
                </React.StrictMode>
              );
            
            
        }
    }

    return (
        <div className="signup-container">
            <img src="/images/logox.png" alt="Logo" className="signup-logo" />
            <div className="hello-text"><a href='#'>Login</a></div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder='Enter username'
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder='Enter email'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder='Enter password'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input 
                    type="password" 
                    id="confirm-password" 
                    placeholder='confirm password'
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                />

                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;


