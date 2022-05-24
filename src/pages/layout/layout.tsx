import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { accessTokenFunction } from 'src/libs';
import { MobXProviderContext, observer } from 'mobx-react';
import ProfileContainer from 'src/pages/friend/profile/profile.container';
import RoomContainer from 'src/pages/talk/room/room.container';
import AppFooterContainer from './appFooter/appFooter.container';
import AppHeaderContainer from './appHeader/appHeader.container';

function Layout(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const currentLocation = rootStore.layoutStore.getCurrentLocation;
  const location = useLocation();
  if (!accessTokenFunction.getAccessToken()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (location.pathname.slice(1) !== currentLocation) {
    return <Navigate to={`/${currentLocation}`} state={{ from: location }} />;
  }

  const selectedFriend = rootStore.friendStore.getSelectedFriend;
  const selectedRoom = rootStore.talksStore.getSelectedRoom;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: 1, width: 1 }}>
      <AppHeaderContainer />
      <Box sx={{ height: 'calc(100vh - 120px)', overflow: 'auto' }}>
        <Outlet />
      </Box>
      <AppFooterContainer />
      {selectedFriend !== undefined ? <ProfileContainer /> : null}
      {selectedRoom ? <RoomContainer /> : null}
    </Box>
  );
}

export default observer(Layout);
