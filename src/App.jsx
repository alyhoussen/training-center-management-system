import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Payments from "./pages/Payments";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar est en position fixe */}
        <Sidebar />

        {/* Container principal avec marge à gauche pour compenser le sidebar en desktop */}
        <div className="flex flex-col min-h-screen w-full md:ml-64">
          <Navbar />
          <main className="flex-1 p-5">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;