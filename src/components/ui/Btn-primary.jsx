// src/components/ui/Button.jsx
import React from 'react';

// Composant bouton réutilisable
// Supporte une prop "className" pour personnaliser le style
const Button = ({ type = 'button', label, onClick, className = '' }) => {
  return (
    <button type={type} className={`py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;