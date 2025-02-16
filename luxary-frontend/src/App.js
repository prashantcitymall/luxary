import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { UserProvider } from './context/UserContext';
import Header from './components/Header/Header';
import Home from './pages/Home';
import ListProperty from './pages/ListProperty';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  React.useEffect(() => {
    // Add global styles to prevent unwanted touch behaviors
    document.body.style.overflowX = 'hidden';
    document.body.style.overscrollBehavior = 'none';
    document.body.style.touchAction = 'pan-y pinch-zoom';
    
    return () => {
      document.body.style.overflowX = '';
      document.body.style.overscrollBehavior = '';
      document.body.style.touchAction = '';
    };
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <UserProvider>
            <CssBaseline />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list-property" element={<ListProperty />} />
            </Routes>
          </UserProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
