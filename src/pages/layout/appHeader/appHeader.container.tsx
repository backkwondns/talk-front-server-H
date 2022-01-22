import React, { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import AppHeader from './appHeader';

function AppHeaderContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const currentLocation = rootStore.layoutStore.getCurrentLocation;
  const userInfo = rootStore.loginStore.getUserInfo;
  const onAvatar = () => {
    console.log('avatar Button');
  };

  return <AppHeader currentLocation={currentLocation} userInfo={userInfo} onAvatar={onAvatar} />;
}

export default AppHeaderContainer;
