// src/pages/DashboardUser.jsx
import React from "react";
import Navbar from "../components/NavbarUser";
import EditJadwal from "../components/EditJadwal";

function Dashboard() {
  return (
    <div className="flex-1">
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
        {/* <EditJadwal />
        Konten lainnya */}
      </div>
    </div>
  );
}

export default Dashboard;
