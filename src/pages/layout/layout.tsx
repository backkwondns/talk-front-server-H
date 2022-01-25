import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { accessTokenFunction } from 'src/libs';
import AppHeaderContainer from './appHeader/appHeader.container';
import AppFooterContainer from './appFooter/appFooter.container';

function Layout(): JSX.Element {
  const location = useLocation();
  if (!accessTokenFunction.getAccessToken()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: 1, width: 1 }}>
      <AppHeaderContainer />
      <Box sx={{ minHeight: 'calc(100vh - 120px)' }}>
        <Outlet />
      </Box>
      <AppFooterContainer />
    </Box>
  );
}

export default Layout;
