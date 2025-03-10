// src/components/ui/Card.jsx
import React from 'react';

// Composant carte réutilisable pour afficher des informations
const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
