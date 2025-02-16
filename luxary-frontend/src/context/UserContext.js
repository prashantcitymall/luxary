import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/auth';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeUser = async () => {
      // Check for stored user data on mount
      const storedUser = authService.getCurrentUser();
      if (storedUser) {
        try {
          // Set the token
          authService.setAuthToken(storedUser.token);
          
          // Fetch fresh user details
          const userDetailsResponse = await authService.getUserDetails();
          setUser(userDetailsResponse.data);
        } catch (error) {
          console.error('Error fetching user details:', error);
          // If there's an error, fall back to stored user data
          setUser(storedUser.user);
        }
      }
      setLoading(false);
    };

    initializeUser();
  }, []);

  const login = async (userData) => {
    try {
      authService.setAuthToken(userData.token);
      // Fetch fresh user details after login
      const userDetailsResponse = await authService.getUserDetails();
      setUser(userDetailsResponse.data);
    } catch (error) {
      console.error('Error fetching user details after login:', error);
      // Fall back to provided user data if fetch fails
      setUser(userData.user);
    }
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
