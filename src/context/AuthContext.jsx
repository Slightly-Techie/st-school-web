import React, { createContext, useContext, useEffect, useState } from "react";
import { verifyAndExtractUser, getToken, removeToken, isTokenExpired } from "../utils/helpers";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = async () => {
    const token = getToken();

    if (token && !isTokenExpired()) {
      try {
        const extractedUser = await verifyAndExtractUser(token);
        setUser(extractedUser);
        setIsAuthenticated(true); 
      } catch (err) {
        setUser(null);
        setIsAuthenticated(false);
        removeToken();
        toast.error("Invalid or expired token");
      }
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const logout = () => {
    removeToken();
    setUser(null);
    setIsAuthenticated(false);
    
  };

  const state = {
    isAuthenticated,
    user,
    setUser,
    setIsAuthenticated,
    checkAuthStatus,
    logout,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}
