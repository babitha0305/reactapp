import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Body />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;