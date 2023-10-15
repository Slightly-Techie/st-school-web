import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userRole, setUserRole] = useState(false);
  const navigate = useNavigate()
  const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL



  const login = async (email, password) => {
    try {
      const data = await handleSubmit(email, password);
      if (data.token) {
        setToken(data.token);
        setUserRole(data.role);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userRole', data.role);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUserRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    navigate('/')
    
  };

  const isAuthenticated = !!token;

  const state = {
    isAuthenticated,
    userRole,
    login,
    logout,
  };

  const handleSubmit = async (email, password) => {
    const url = `${apiUrl}/login`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw new Error(data.message);
          });
        }
      });
  };

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  );
}
