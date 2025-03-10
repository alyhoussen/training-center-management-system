// src/components/ui/Input.jsx
import React from 'react';

// Composant input réutilisable
const Input = ({ type = 'text', name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
