// src/pages/DashboardUser.jsx

import React, { useState } from "react";
import Navbar from "../components/NavbarAdmin";
import EditJadwal from "../components/EditJadwal";
import EditKereta from "../components/EditKereta";
import LihatPeta from "../components/LihatPeta";
import EditProfil from "../components/EditProfil";

function Dashboard() {
  const [showEditJadwal, setShowEditJadwal] = useState(true);
  const [showEditKereta, setShowEditKereta] = useState(false);
  const [showLihatPeta, setShowLihatPeta] = useState(false);
  const [showEditProfil, setShowEditProfil] = useState(false);

  const toggleEditJadwal = () => {
    setShowEditJadwal(!showEditJadwal);
    setShowLihatPeta(false); 
    setShowEditKereta(false);
    setShowEditProfil(false);
  };

  const toggleLihatPeta = () => {
    setShowLihatPeta(!showLihatPeta);
    setShowEditJadwal(false); 
    setShowEditKereta(false);
    setShowEditProfil(false);
  };

  const toggleEditKereta = () => {
    setShowEditKereta(!showEditKereta);
    setShowEditJadwal(false); 
    setShowLihatPeta(false);
    setShowEditProfil(false);
  };

  const toggleEditProfil = () => {
    setShowEditProfil(!showEditProfil)
    setShowEditJadwal(false);
    setShowEditKereta(false);
    setShowLihatPeta(false);
  }
  

  return (
    <div className="flex-1">
      <Navbar toggleLihatPeta={toggleLihatPeta} toggleEditJadwal={toggleEditJadwal} toggleEditKereta={toggleEditKereta} toggleEditProfil={toggleEditProfil}/>
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold text-white mb-4">Admin Dashboard</h1>
        {showEditJadwal && <EditJadwal />}
        {showEditKereta && <EditKereta />}
        {showLihatPeta && <LihatPeta />}
        {showEditProfil && <EditProfil/>}
      </div>
    </div>
  );
}

export default Dashboard;
