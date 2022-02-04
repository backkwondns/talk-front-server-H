import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function Loading(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress size={100} />
    </Box>
  );
}

export default Loading;
