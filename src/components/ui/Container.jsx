// src/components/ui/Container.jsx
import React from 'react';

// Composant container réutilisable pour structurer le contenu
const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;
