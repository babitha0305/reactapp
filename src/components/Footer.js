import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ py: 2, backgroundColor: 'primary.main', color: 'white' }}>
      <Typography align="center">© 2023 My Layout</Typography>
    </Box>
  );
}

export default Footer;