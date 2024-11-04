import React from 'react';
import { Box, Typography } from '@mui/material';

function Body() {
  return (
    <Box sx={{ flex: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom>Welcome!</Typography>
      <Typography>This is the main content.</Typography>
    </Box>
  );
}

export default Body;