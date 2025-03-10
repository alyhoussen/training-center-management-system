// src/pages/Dashboard.jsx
import React from 'react';
import Card from '../components/ui/Card';
import '../styles/pages.css';

const Dashboard = () => {
  // Affiche des statistiques globales via des cartes
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
