import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/auth';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = authService.getCurrentUser();
    if (storedUser) {
      setUser(storedUser.user);
      authService.setAuthToken(storedUser.token);
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData.user);
    authService.setAuthToken(userData.token);
  };

  const logout = () => {
    setUser(null);
    authService.logout();
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
