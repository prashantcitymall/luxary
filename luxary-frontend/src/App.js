import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { UserProvider } from './context/UserContext';
import Header from './components/Header/Header';
import Home from './pages/Home';
import ListProperty from './pages/ListProperty';
import TouristPlaceDetails from './pages/TouristPlaceDetails';
import GlobalStyle from './styles/globalStyles';
import { styled } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#F90C71',
    },
    background: {
      default: 'transparent',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const GradientWrapper = styled(Box)`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #F90C71, #30001A);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

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
            <GlobalStyle />
            <CssBaseline />
            <GradientWrapper />
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
