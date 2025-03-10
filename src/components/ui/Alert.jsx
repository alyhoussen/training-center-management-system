// src/components/ui/Alert.jsx
import React from 'react';

// Composant d'alerte réutilisable
const Alert = ({ type = 'info', message }) => {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
};

export default Alert;
