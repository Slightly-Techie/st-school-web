import React, { createContext, useContext, useState } from "react";
import { verifyAndExtractUser, getToken, removeToken } from "../utils/helpers";
import { toast } from "react-hot-toast";


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(false);

  React.useEffect(() => {
    const token = getToken
    if (token) {
      try {
        const getUser = verifyAndExtractUser(token);
        setUser(getUser);
        setIsAuthenticated(true);
      } catch (err) {
        setUser(null);
        setIsAuthenticated(false);
        removeToken();
        toast.error("invalid or exprired token");
      }
    }
    
  }, [isAuthenticated]);


  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    removeToken()
  }

  const state = {
    isAuthenticated,
    userRole,
    user,
    setUser,
    setIsAuthenticated,
    logout
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}
