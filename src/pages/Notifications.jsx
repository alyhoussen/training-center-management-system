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
          <Card key={note.id} title={`Notification ${note.id}`} content={note.message} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
