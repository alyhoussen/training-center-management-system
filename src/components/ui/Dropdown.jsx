// src/components/ui/Dropdown.jsx
import React from 'react';

// Composant dropdown réutilisable
const Dropdown = ({ options = [], name, value, onChange }) => {
  return (
    <select name={name} className="dropdown" value={value} onChange={onChange}>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
