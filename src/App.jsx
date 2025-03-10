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
