import React, { useContext, useEffect, useState } from 'react';
import { accessTokenFunction } from 'src/libs';
import Router from 'src/router';
import { CircularProgress } from '@mui/material';
import { MobXProviderContext } from 'mobx-react';

function App() {
  const rootStore = useContext(MobXProviderContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', { method: 'POST', credentials: 'include' }).then(async (x) => {
      const { accessToken, userInfo } = await x.json();
      accessTokenFunction.setAccessToken(accessToken);
      rootStore.loginStore.setUserInfo(userInfo);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <CircularProgress />;
  }
  return <Router />;
}
export default App;
