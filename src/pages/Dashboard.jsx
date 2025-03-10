import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaCreditCard, FaBell } from "react-icons/fa";

const Dashboard = () => {
  // Exemple de statistiques à afficher
  const stats = [
    { title: "Étudiants", value: 120, icon: <FaUserGraduate /> },
    { title: "Enseignants", value: 15, icon: <FaChalkboardTeacher /> },
    { title: "Paiements", value: 80, icon: <FaCreditCard /> },
    { title: "Notifications", value: 5, icon: <FaBell /> },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tableau de Bord</h1>

      {/* Grille des indicateurs clés */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <div className="bg-indigo-600 text-white p-4 rounded-full">
              <span className="text-3xl">{stat.icon}</span>
            </div>
            <div>
              <p className="text-gray-500">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section additionnelle (exemple d'un graphique ou d'une performance) */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance des Paiements</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Place ici un composant de graphique ou d'autres indicateurs */}
          <p className="text-gray-500">[Graphique ou indicateurs ici...]</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;