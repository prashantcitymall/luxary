import React, { createContext, useContext, useState, useEffect } from 'react';

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('customer');

  useEffect(() => {
    const savedMode = localStorage.getItem('userMode');
    setMode(savedMode === 'manager' ? 'manager' : 'customer');
  }, []);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    localStorage.setItem('userMode', newMode);
  };

  return (
    <ModeContext.Provider value={{ mode, handleModeChange }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}; 