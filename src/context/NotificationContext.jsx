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
