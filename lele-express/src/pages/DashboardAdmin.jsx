// src/pages/DashboardUser.jsx
import React from "react";
import Navbar from "../components/NavbarAdmin";
import EditJadwal from "../components/EditJadwal";
import Editkereta from "../components/EditKereta";
function Dashboard() {
  return (
    <div className="flex-1">
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold text-white mb-4">Admin Dashboard</h1>
        {/* <EditJadwal /> */}
        <Editkereta/>
        
      </div>
    </div>
  );
}

export default Dashboard;
