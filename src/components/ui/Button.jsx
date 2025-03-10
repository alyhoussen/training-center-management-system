// src/components/ui/Button.jsx
import React from 'react';

// Composant bouton réutilisable
// Supporte une prop "className" pour personnaliser le style
const Button = ({ type = 'button', label, onClick, className = '' }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
