import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
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
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-property" element={<ListProperty />} />
          </Routes>
        </LocalizationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
