import React, { useContext, useEffect } from 'react';
import { accessTokenFunction } from 'src/libs';
import Router from 'src/router';
import { MobXProviderContext, observer } from 'mobx-react';
import { Loading } from './organisms';

function App() {
  const rootStore = useContext(MobXProviderContext);
  const loading = rootStore.layoutStore.getIsLoading;
  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', { method: 'POST', credentials: 'include' }).then(async (x) => {
      const { accessToken, userInfo } = await x.json();
      accessTokenFunction.setAccessToken(accessToken);
      rootStore.loginStore.setUserInfo(userInfo);
      rootStore.layoutStore.setIsLoading();
    });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return <Router />;
}
export default observer(App);
