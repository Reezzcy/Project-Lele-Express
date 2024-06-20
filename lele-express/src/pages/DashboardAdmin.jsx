// src/pages/DashboardUser.jsx

import React, { useState } from "react";
import Navbar from "../components/NavbarAdmin";
import EditJadwal from "../components/EditJadwal";
import EditKereta from "../components/EditKereta";
import LihatPeta from "../components/LihatPeta";

function Dashboard() {
  const [showEditJadwal, setShowEditJadwal] = useState(true);
  const [showEditKereta, setShowEditKereta] = useState(false);
  const [showLihatPeta, setShowLihatPeta] = useState(false);

  const toggleEditJadwal = () => {
    setShowEditJadwal(!showEditJadwal);
    setShowLihatPeta(false); // Pastikan LihatPeta dinonaktifkan saat EditJadwal ditekan
    setShowEditKereta(false)
  };

  const toggleLihatPeta = () => {
    setShowLihatPeta(!showLihatPeta);
    setShowEditJadwal(false); // Pastikan EditJadwal dinonaktifkan saat LihatPeta ditekan
    setShowEditKereta(false);
  };

  const toggleEditKereta = () => {
    setShowEditKereta(!showEditKereta);
    setShowEditJadwal(false); 
    setShowLihatPeta(false);
  };

  

  return (
    <div className="flex-1">
      <Navbar toggleLihatPeta={toggleLihatPeta} toggleEditJadwal={toggleEditJadwal} toggleEditKereta={toggleEditKereta}/>
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold text-white mb-4">Admin Dashboard</h1>
        {showEditJadwal && <EditJadwal />}
        {showEditKereta && <EditKereta />}
        {showLihatPeta && <LihatPeta />}
      </div>
    </div>
  );
}

export default Dashboard;
