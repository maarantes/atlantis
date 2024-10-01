import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        </Routes>
    </Router>
  );
}