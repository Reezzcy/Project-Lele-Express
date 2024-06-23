import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import DashboardUser from "./pages/DashboardUser";
import DashboardAdmin from "./pages/DashboardAdmin";
import FormTiket from "./components/FormTiket";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboardUser" element={<DashboardUser />} />
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/FormTiket" element={<FormTiket />} /> 
      </Routes>
    </Router>
  );
}

export default App;