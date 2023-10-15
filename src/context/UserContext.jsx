import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      
      fetchUserData(token);
    } else {
      
      setUser(null);
      setLoading(false);
    }
  }, []);

  const fetchUserData = (token) => {
    const apiUrl = '/user';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    fetch(apiUrl, { headers })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          throw new Error('Request failed');
        }
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  const state = {
    user,
    loading,
    error,
  };

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
