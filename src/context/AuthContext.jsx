// src/context/AuthContext.jsx
import React, { createContext, useState } from 'react';

// Contexte pour la gestion de l'authentification
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    // Implémentation simplifiée de la connexion (simulation)
    setUser({ email: credentials.email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
