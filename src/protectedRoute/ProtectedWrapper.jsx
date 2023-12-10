import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../utils/Spinner";

function ProtectedWrapper() {
  const { isAuthenticated, checkAuthStatus } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      await checkAuthStatus();
      setIsLoading(false);
    };

    initializeAuth();
  }, [checkAuthStatus]);

  if (isLoading) {
    return <div className="flex align-center justify-center mt-16">
      <Spinner/>
    </div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedWrapper;
