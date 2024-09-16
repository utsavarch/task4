import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("auth");
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const RouteProvider = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={<Dashboard />} />}
      />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default RouteProvider;
