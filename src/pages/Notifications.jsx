import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Nouvelle mise à jour disponible', read: false },
    { id: 2, message: 'Le paiement de John Doe a été effectué', read: true },
    { id: 3, message: 'Les résultats des examens sont publiés', read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleAddNotification = (message) => {
    setNotifications([
      ...notifications,
      { id: notifications.length + 1, message, read: false },
    ]);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h1>

      {/* Ajouter une notification */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ajouter une Notification</h2>
        <input
          type="text"
          placeholder="Message de la notification"
          className="input input-bordered w-full mb-4 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value) {
              handleAddNotification(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>

      {/* Liste des notifications */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Liste des Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`p-4 rounded-lg ${notification.read ? 'bg-gray-200' : 'bg-blue-100'} flex justify-between items-center`}
            >
              <span>{notification.message}</span>
              {!notification.read && (
                <button
                  className="text-sm text-blue-500 hover:text-blue-700"
                  onClick={() => markAsRead(notification.id)}
                >
                  Marquer comme lu
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;