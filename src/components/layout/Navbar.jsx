// src/components/layout/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiBook, FiCreditCard, FiBell } from 'react-icons/fi';
import { NotificationContext } from '../../context/NotificationContext';
import '../../styles/layout.css';

const Navbar = () => {
  const { notifications } = useContext(NotificationContext);
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/"><FiHome /> Accueil</Link></li>
        <li><Link to="/students"><FiUser /> Élèves</Link></li>
        <li><Link to="/teachers"><FiBook /> Enseignants</Link></li>
        <li><Link to="/payments"><FiCreditCard /> Paiements</Link></li>
        <li>
          <Link to="/notifications">
            <FiBell /> Notifications
            {notifications.length > 0 && <span className="badge">{notifications.length}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
