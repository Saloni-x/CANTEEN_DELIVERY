import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            alert('Registration Successful');
            navigate('/login');
        } catch (err) {
            alert('Registration Failed');
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;