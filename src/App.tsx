import React, { useEffect, useState } from 'react';
import { setAccessToken } from 'src/libs/accessToken';
import Router from 'src/router';
import { CircularProgress } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', { method: 'POST', credentials: 'include' }).then(async (x) => {
      const { accessToken } = await x.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <CircularProgress />;
  }
  return <Router />;
}
export default App;
