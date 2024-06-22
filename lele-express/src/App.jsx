import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Login from "./components/Login";
import Registration from "./components/Registration";
import DashboardUser from "./pages/DashboardUser";
import DashboardAdmin from "./pages/DashboardAdmin";
import FormTiket from "./components/FormTiket";
import "./index.css";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="flip" timeout={500}>
        <Routes location={location}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboardUser" element={<DashboardUser />} />
          <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
          <Route path="/FormTiket" element={<FormTiket />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
