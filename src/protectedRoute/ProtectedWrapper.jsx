import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedWrapper() {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedWrapper;
