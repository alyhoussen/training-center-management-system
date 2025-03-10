// src/components/layout/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiBook, FiCreditCard, FiBell } from 'react-icons/fi';
import '../../styles/layout.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/"><FiHome /><span>Accueil</span></Link></li>
        <li><Link to="/students"><FiUser /><span>Élèves</span></Link></li>
        <li><Link to="/teachers"><FiBook /><span>Enseignants</span></Link></li>
        <li><Link to="/payments"><FiCreditCard /><span>Paiements</span></Link></li>
        <li><Link to="/notifications"><FiBell /><span>Notifications</span></Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
