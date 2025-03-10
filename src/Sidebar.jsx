import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUserGraduate, FaChalkboardTeacher, FaCreditCard, FaBell, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Accueil", path: "/", icon: <FaHome /> },
  { name: "Élèves", path: "/students", icon: <FaUserGraduate /> },
  { name: "Enseignants", path: "/teachers", icon: <FaChalkboardTeacher /> },
  { name: "Paiements", path: "/payments", icon: <FaCreditCard /> },
  { name: "Notifications", path: "/notifications", icon: <FaBell /> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton Menu Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar - Desktop + Mobile */}
      <nav
        className={`bg-gradient-to-b from-blue-600 to-indigo-700 text-white w-64 h-screen p-5 fixed top-0 left-0 transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold text-center mb-8">Centre de Formation</h2>
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-white text-indigo-700 shadow-lg font-semibold"
                      : "hover:bg-indigo-600"
                  }`
                }
                onClick={() => setIsOpen(false)} // Fermer le menu après clic (mobile)
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-lg">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Fond semi-transparent pour fermer le menu en cliquant à côté */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;