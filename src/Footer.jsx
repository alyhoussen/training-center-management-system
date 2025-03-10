import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold">Centre de Formation</h2>
          <p className="text-sm">Gérez vos formations en toute simplicité</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white text-sm">
            Mentions légales
          </a>
          <a href="#" className="hover:text-white text-sm">
            Politique de confidentialité
          </a>
          <a href="#" className="hover:text-white text-sm">
            Contact
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-xs">
        © {new Date().getFullYear()} Centre de Formation. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;