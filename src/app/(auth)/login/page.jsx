'use client'
import React, { useState } from 'react';
import { login } from '../services/authService'; 
import { useTranslation } from 'react-i18next'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { i18n } = useTranslation()
    const { t } = useTranslation()


    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');

        try {
            await login(email, password); 
            console.log('Login successful');
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Login</button>
            </form>
            <h1>{t('hello')}</h1>
            <p>{t('welcome')}</p>
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('vi')}>Tiếng Việt</button>
        </div>
    );
}

export default Login;
