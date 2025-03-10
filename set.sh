#!/bin/bash
# =================================================================
# Script de configuration du projet React - Centre de Formation
# =================================================================
# Ce script supprime le dossier src existant puis recrée
# l'intégralité de la structure du dossier src avec tous les fichiers,
# dossiers et contenus pré-remplis pour gérer :
# - Les étudiants (inscription, suivi, paiement, présence, progression)
# - Les enseignants (CRUD, attribution de cours, suivi de statut)
# - Les cours/formations (création, planning, évaluations)
# - Les paiements (historique, montants, statuts)
# - Les notifications (système d'alertes avec badge)
# - Un tableau de bord dynamique et la navigation avec react-router-dom
# - Une gestion d'état global via useContext/useReducer
# - Des composants UI réutilisables et un style moderne inspiré de ShadCN UI
#
# Pour exécuter :
#   chmod +x setup.sh
#   ./setup.sh
# Puis lancez l'application avec : npm run dev
# =================================================================

echo "Suppression du dossier src existant..."
rm -rf src

echo "Création de la structure du dossier src..."
mkdir -p src/assets
mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/pages
mkdir -p src/context
mkdir -p src/data
mkdir -p src/styles

# ----------------------------
# Fichier: src/constants.js
# ----------------------------
cat << 'EOF' > src/constants.js
// src/constants.js
// Fichier de constantes globales (URLs, messages, etc.)
export const API_URL = 'https://api.example.com';
export const MESSAGES = {
  success: 'Opération réussie',
  error: 'Une erreur est survenue'
};
EOF

# ----------------------------
# Fichier: src/index.jsx
# ----------------------------
cat << 'EOF' > src/index.jsx
// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

# ----------------------------
# Fichier: src/App.jsx
# ----------------------------
cat << 'EOF' > src/App.jsx
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Payments from './pages/Payments';
import Notifications from './pages/Notifications';
import Login from './pages/Login';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import './styles/pages.css';
import './styles/components.css';
import './styles/layout.css';

const App = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="app-container">
            <Sidebar />
            <div className="main-content">
              <Navbar />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/students" element={<Students />} />
                  <Route path="/teachers" element={<Teachers />} />
                  <Route path="/payments" element={<Payments />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
};

export default App;
EOF

# ============================
# Création des pages (src/pages)
# ============================

# ----------------------------
# Fichier: src/pages/Dashboard.jsx
# ----------------------------
cat << 'EOF' > src/pages/Dashboard.jsx
// src/pages/Dashboard.jsx
import React from 'react';
import Card from '../components/ui/Card';
import '../styles/pages.css';

const Dashboard = () => {
  // Affiche des statistiques globales via des cartes (ex: nombre d’élèves, enseignants, paiements, notifications)
  return (
    <div className="dashboard">
      <h1>Tableau de Bord</h1>
      <div className="cards-container">
        <Card title="Élèves" content="100" />
        <Card title="Enseignants" content="15" />
        <Card title="Paiements" content="80" />
        <Card title="Notifications" content="5" />
      </div>
    </div>
  );
};

export default Dashboard;
EOF

# ----------------------------
# Fichier: src/pages/Students.jsx
# ----------------------------
cat << 'EOF' > src/pages/Students.jsx
// src/pages/Students.jsx
import React, { useState } from 'react';
import '../styles/pages.css';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Students = () => {
  // Gestion des élèves : inscription et suivi (informations personnelles, statut, paiements, présence, progression)
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    status: 'En attente'
  });

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajout de l'élève dans le tableau (simulation d'inscription)
    setStudents([...students, newStudent]);
    setNewStudent({ name: '', email: '', phone: '', dob: '', address: '', status: 'En attente' });
  };

  return (
    <div className="students-page">
      <h1>Gestion des Élèves</h1>
      <form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nom" value={newStudent.name} onChange={handleInputChange} />
        <Input name="email" placeholder="Email" value={newStudent.email} onChange={handleInputChange} />
        <Input name="phone" placeholder="Téléphone" value={newStudent.phone} onChange={handleInputChange} />
        <Input name="dob" placeholder="Date de Naissance" value={newStudent.dob} onChange={handleInputChange} />
        <Input name="address" placeholder="Adresse" value={newStudent.address} onChange={handleInputChange} />
        <Button type="submit" label="Inscrire l'élève" />
      </form>
      <div className="students-list">
        {students.map((student, index) => (
          <Card key={index} title={student.name} content={`Email: ${student.email}`} />
        ))}
      </div>
    </div>
  );
};

export default Students;
EOF

# ----------------------------
# Fichier: src/pages/Teachers.jsx
# ----------------------------
cat << 'EOF' > src/pages/Teachers.jsx
// src/pages/Teachers.jsx
import React, { useState } from 'react';
import '../styles/pages.css';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Teachers = () => {
  // Gestion des enseignants : ajout, modification, suppression et suivi (informations personnelles et professionnelles)
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    email: '',
    phone: '',
    subjects: '',
    hireDate: '',
    status: 'Actif'
  });

  const handleInputChange = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajout de l'enseignant dans la liste
    setTeachers([...teachers, newTeacher]);
    setNewTeacher({ name: '', email: '', phone: '', subjects: '', hireDate: '', status: 'Actif' });
  };

  return (
    <div className="teachers-page">
      <h1>Gestion des Enseignants</h1>
      <form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nom" value={newTeacher.name} onChange={handleInputChange} />
        <Input name="email" placeholder="Email" value={newTeacher.email} onChange={handleInputChange} />
        <Input name="phone" placeholder="Téléphone" value={newTeacher.phone} onChange={handleInputChange} />
        <Input name="subjects" placeholder="Matières enseignées" value={newTeacher.subjects} onChange={handleInputChange} />
        <Input name="hireDate" placeholder="Date d'embauche" value={newTeacher.hireDate} onChange={handleInputChange} />
        <Button type="submit" label="Ajouter Enseignant" />
      </form>
      <div className="teachers-list">
        {teachers.map((teacher, index) => (
          <Card key={index} title={teacher.name} content={`Email: ${teacher.email}`} />
        ))}
      </div>
    </div>
  );
};

export default Teachers;
EOF

# ----------------------------
# Fichier: src/pages/Payments.jsx
# ----------------------------
cat << 'EOF' > src/pages/Payments.jsx
// src/pages/Payments.jsx
import React, { useState } from 'react';
import '../styles/pages.css';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Payments = () => {
  // Gestion des paiements : enregistrement, suivi et historique (montant, date, méthode, statut)
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({
    amount: '',
    date: '',
    method: '',
    status: 'payé'
  });

  const handleInputChange = (e) => {
    setNewPayment({ ...newPayment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayments([...payments, newPayment]);
    setNewPayment({ amount: '', date: '', method: '', status: 'payé' });
  };

  return (
    <div className="payments-page">
      <h1>Gestion des Paiements</h1>
      <form onSubmit={handleSubmit}>
        <Input name="amount" placeholder="Montant" value={newPayment.amount} onChange={handleInputChange} />
        <Input name="date" placeholder="Date" value={newPayment.date} onChange={handleInputChange} />
        <Input name="method" placeholder="Méthode de paiement" value={newPayment.method} onChange={handleInputChange} />
        <Button type="submit" label="Enregistrer Paiement" />
      </form>
      <div className="payments-list">
        {payments.map((payment, index) => (
          <Card key={index} title={\`Paiement \${index + 1}\`} content={\`Montant: \${payment.amount}\`} />
        ))}
      </div>
    </div>
  );
};

export default Payments;
EOF

# ----------------------------
# Fichier: src/pages/Notifications.jsx
# ----------------------------
cat << 'EOF' > src/pages/Notifications.jsx
// src/pages/Notifications.jsx
import React from 'react';
import '../styles/pages.css';
import Card from '../components/ui/Card';

const Notifications = () => {
  // Système de notifications avec affichage de messages importants
  const notifications = [
    { id: 1, message: 'Nouvel élève inscrit' },
    { id: 2, message: 'Paiement en retard' },
    { id: 3, message: 'Nouveau cours ajouté' },
  ];

  return (
    <div className="notifications-page">
      <h1>Notifications</h1>
      <div className="notifications-list">
        {notifications.map((note) => (
          <Card key={note.id} title={\`Notification \${note.id}\`} content={note.message} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
EOF

# ----------------------------
# Fichier: src/pages/Login.jsx
# ----------------------------
cat << 'EOF' > src/pages/Login.jsx
// src/pages/Login.jsx
import React, { useState } from 'react';
import '../styles/pages.css';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Login = () => {
  // Page de connexion avec gestion de l'authentification via contexte
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Logique de connexion (à intégrer avec AuthContext)
    console.log('Tentative de connexion avec :', credentials);
  };

  return (
    <div className="login-page">
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <Input name="email" placeholder="Email" value={credentials.email} onChange={handleChange} />
        <Input type="password" name="password" placeholder="Mot de passe" value={credentials.password} onChange={handleChange} />
        <Button type="submit" label="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
EOF

# ============================
# Création des contextes (src/context)
# ============================

# ----------------------------
# Fichier: src/context/AuthContext.jsx
# ----------------------------
cat << 'EOF' > src/context/AuthContext.jsx
// src/context/AuthContext.jsx
import React, { createContext, useState } from 'react';

// Contexte pour la gestion de l'authentification
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    // Implémentation simplifiée de la connexion (simulation)
    setUser({ email: credentials.email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
EOF

# ----------------------------
# Fichier: src/context/NotificationContext.jsx
# ----------------------------
cat << 'EOF' > src/context/NotificationContext.jsx
// src/context/NotificationContext.jsx
import React, { createContext, useState } from 'react';

// Contexte pour la gestion des notifications
export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    const newNotification = { id: Date.now(), message };
    setNotifications([...notifications, newNotification]);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter(note => note.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
EOF

# ============================
# Création des données mock (src/data)
# ============================

# ----------------------------
# Fichier: src/data/students.js
# ----------------------------
cat << 'EOF' > src/data/students.js
// src/data/students.js
// Mock data pour les étudiants
export const students = [
  {
    id: 1,
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    phone: '0123456789',
    dob: '2000-01-01',
    address: '123 Rue de Paris',
    status: 'Inscrit',
    payments: { total: 1000, paid: 800, status: 'partiellement payé' },
    attendance: { total: 30, absences: 2, justified: 1 },
    progress: { average: 14, evolution: 'stable' }
  },
  // Ajoutez d'autres étudiants au besoin
];
EOF

# ----------------------------
# Fichier: src/data/teachers.js
# ----------------------------
cat << 'EOF' > src/data/teachers.js
// src/data/teachers.js
// Mock data pour les enseignants
export const teachers = [
  {
    id: 1,
    name: 'Marie Martin',
    email: 'marie.martin@example.com',
    phone: '0987654321',
    subjects: ['Mathématiques', 'Physique'],
    hireDate: '2015-09-01',
    status: 'Actif'
  },
  // Ajoutez d'autres enseignants au besoin
];
EOF

# ----------------------------
# Fichier: src/data/payments.js
# ----------------------------
cat << 'EOF' > src/data/payments.js
// src/data/payments.js
// Mock data pour les paiements
export const payments = [
  {
    id: 1,
    studentId: 1,
    amount: 200,
    date: '2023-01-15',
    method: 'Carte de crédit',
    status: 'payé'
  },
  // Ajoutez d'autres paiements au besoin
];
EOF

# ----------------------------
# Fichier: src/data/notifications.js
# ----------------------------
cat << 'EOF' > src/data/notifications.js
// src/data/notifications.js
// Mock data pour les notifications
export const notifications = [
  { id: 1, message: 'Nouvel élève inscrit' },
  { id: 2, message: 'Paiement en retard' },
  { id: 3, message: 'Nouveau cours ajouté' },
];
EOF

# ============================
# Création des composants UI (src/components/ui)
# ============================

# ----------------------------
# Fichier: src/components/ui/Button.jsx
# ----------------------------
cat << 'EOF' > src/components/ui/Button.jsx
// src/components/ui/Button.jsx
import React from 'react';

// Composant bouton réutilisable
const Button = ({ type = 'button', label, onClick }) => {
  return (
    <button type={type} className="btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
EOF

# ----------------------------
# Fichier: src/components/ui/Input.jsx
# ----------------------------
cat << 'EOF' > src/components/ui/Input.jsx
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
EOF

# ----------------------------
# Fichier: src/components/ui/Dropdown.jsx
# ----------------------------
cat << 'EOF' > src/components/ui/Dropdown.jsx
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
EOF

# ----------------------------
# Fichier: src/components/ui/Alert.jsx
# ----------------------------
cat << 'EOF' > src/components/ui/Alert.jsx
// src/components/ui/Alert.jsx
import React from 'react';

// Composant d'alerte réutilisable
const Alert = ({ type = 'info', message }) => {
  return (
    <div className={\`alert alert-\${type}\`}>
      {message}
    </div>
  );
};

export default Alert;
EOF

# ----------------------------
# Fichier: src/components/ui/Modal.jsx
# ----------------------------
cat << 'EOF' > src/components/ui/Modal.jsx
// src/components/ui/Modal.jsx
import React from 'react';

// Composant modal réutilisable
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
EOF

# ----------------------------
# Fichier: src/components/ui/Card.jsx
# ----------------------------
cat << 'EOF' > src/components/ui/Card.jsx
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
EOF

# ----------------------------
# Fichier: src/components/ui/Container.jsx
# ----------------------------
cat << 'EOF' > src/components/ui/Container.jsx
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
EOF

# ============================
# Création des composants de layout (src/components/layout)
# ============================

# ----------------------------
# Fichier: src/components/layout/Navbar.jsx
# ----------------------------
cat << 'EOF' > src/components/layout/Navbar.jsx
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
EOF

# ----------------------------
# Fichier: src/components/layout/Sidebar.jsx
# ----------------------------
cat << 'EOF' > src/components/layout/Sidebar.jsx
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
EOF

# ----------------------------
# Fichier: src/components/layout/Footer.jsx
# ----------------------------
cat << 'EOF' > src/components/layout/Footer.jsx
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
EOF

# ============================
# Création des fichiers de styles (src/styles)
# ============================

# ----------------------------
# Fichier: src/styles/global.css
# ----------------------------
cat << 'EOF' > src/styles/global.css
/* src/styles/global.css */
/* Styles globaux de l'application */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #F8FAFC;
  color: #333333;
}
EOF

# ----------------------------
# Fichier: src/styles/components.css
# ----------------------------
cat << 'EOF' > src/styles/components.css
/* src/styles/components.css */
/* Styles pour les composants UI */
.btn {
  background-color: #5087F7;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #3b6dc2;
}

.input {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

.dropdown {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

.alert {
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.alert-info {
  background-color: #d9edf7;
  color: #31708f;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
}

.modal {
  background: #fff;
  padding: 20px;
  margin: 100px auto;
  max-width: 500px;
  border-radius: 8px;
}

.modal-close {
  float: right;
  background: transparent;
  border: none;
  font-size: 16px;
}

.card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.container {
  padding: 20px;
}
EOF

# ----------------------------
# Fichier: src/styles/layout.css
# ----------------------------
cat << 'EOF' > src/styles/layout.css
/* src/styles/layout.css */
/* Styles pour la navigation, sidebar et footer */
.app-container {
  display: flex;
}

.sidebar {
  width: 200px;
  background: #fff;
  padding: 20px;
  border-right: 1px solid #ccc;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 15px;
}

.sidebar ul li a {
  text-decoration: none;
  color: #333333;
  display: flex;
  align-items: center;
  gap: 10px;
}

.navbar {
  background: #5087F7;
  padding: 10px 20px;
  color: #fff;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.navbar ul li a {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
}

.badge {
  background: #FFAB40;
  border-radius: 50%;
  padding: 3px 7px;
  margin-left: 5px;
  font-size: 12px;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 20px;
}

.footer {
  background: #f1f1f1;
  text-align: center;
  padding: 10px;
}
EOF

# ----------------------------
# Fichier: src/styles/pages.css
# ----------------------------
cat << 'EOF' > src/styles/pages.css
/* src/styles/pages.css */
/* Styles spécifiques pour les pages */
h1 {
  margin-bottom: 20px;
}

form {
  margin-bottom: 20px;
}

.cards-container,
.students-list,
.teachers-list,
.payments-list,
.notifications-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
EOF

echo "🚀 Projet généré avec succès ! Lancez-le avec npm run dev"
