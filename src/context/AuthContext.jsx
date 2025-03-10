import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Simule un utilisateur connecté par défaut
  const [user, setUser] = useState({ email: "user@example.com", name: "John Doe" });

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};