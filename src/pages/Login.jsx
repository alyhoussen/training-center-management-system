// src/pages/Login.jsx
import React, { useState } from 'react';
import '../styles/pages.css';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Login = () => {
  // Page de connexion avec gestion de l'authentification via contexte
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Logique de connexion (à intégrer avec AuthContext)
    console.log('Tentative de connexion avec :', credentials);
  };

  return (
    <div className="login-page">
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <Input name="email" placeholder="Email" value={credentials.email} onChange={handleChange} />
        <Input type="password" name="password" placeholder="Mot de passe" value={credentials.password} onChange={handleChange} />
        <Button type="submit" label="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
