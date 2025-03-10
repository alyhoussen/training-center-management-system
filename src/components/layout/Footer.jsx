// src/components/layout/Footer.jsx
import React from 'react';
import '../../styles/layout.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Centre de Formation. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
