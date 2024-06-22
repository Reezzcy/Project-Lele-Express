// src/pages/DashboardUser.jsx

import React, { useState } from "react";
import Navbar from "../components/NavbarUser";
import DaftarJadwal from "../components/DaftarJadwal";
import DaftarRiwayat from "../components/DaftarRiwayat";
import EditProfil from "../components/EditProfil";
import LihatPeta from "../components/LihatPeta";

function Dashboard() {
  const [showDaftarJadwal, setShowDaftarJadwal] = useState(true);
  const [showDaftarRiwayat, setShowDaftarRiwayat] = useState(false);
  const [showEditProfil, setShowEditProfil] = useState(false);
  const [showLihatPeta, setShowLihatPeta] = useState(false);

  const toggleDaftarJadwal = () => {
    setShowDaftarJadwal(!showDaftarJadwal);
    setShowLihatPeta(false); 
    setShowEditProfil(false);
    setShowDaftarRiwayat(false);
  };

  const toggleDaftarRiwayat = () => {
    setShowDaftarRiwayat(!showDaftarRiwayat);
    setShowLihatPeta(false); 
    setShowDaftarJadwal(false);
    setShowEditProfil(false);
  };

  const toggleEditProfil = () => {
    setShowEditProfil(!showEditProfil);
    setShowLihatPeta(false); 
    setShowDaftarJadwal(false);
    setShowDaftarRiwayat(false);
  };

  const toggleLihatPeta  = () => {
    setShowLihatPeta(!showLihatPeta);
    setShowDaftarJadwal(false); 
    setShowEditProfil(false);
    setShowDaftarRiwayat(false);
  };


  return (
    <div className="flex-1">
      <Navbar toggleDaftarJadwal={toggleDaftarJadwal} toggleDaftarRiwayat={toggleDaftarRiwayat} toggleEditProfil={toggleEditProfil} toggleLihatPeta={toggleLihatPeta}/>
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold text-white mb-4">UserDashboard</h1>
      {showDaftarJadwal && <DaftarJadwal/>}
      {showDaftarRiwayat && <DaftarRiwayat/>}
      {showEditProfil && <EditProfil/>}
      {showLihatPeta && <LihatPeta/>}
      </div>
    </div>
  );
}

export default Dashboard;
