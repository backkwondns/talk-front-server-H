import React, { useContext } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import FriendAddContainer from 'src/pages/layout/appHeader/friendAdd/friendAdd.container';
import { Box } from '@mui/material';
import AppHeader from './appHeader';

function AppHeaderContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const currentLocation = rootStore.layoutStore.getCurrentLocation;
  const userInfo = rootStore.loginStore.getUserInfo;
  const search = rootStore.layoutStore.getSearch;
  const openSearch = rootStore.layoutStore.getOpenSearch;
  const onAvatar = () => {
    console.log('avatar Button');
  };

  const onSearch = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    rootStore.layoutStore.setOpenSearch(event.currentTarget);
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    rootStore.layoutStore.setSearch(event.currentTarget.value);
  };

  const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(event);
    }
  };

  const onReset = () => {
    rootStore.layoutStore.setSearch('');
  };

  const onFriendAddBar = () => {
    rootStore.layoutStore.toggleOpenFriendAddBar();
  };

  const onTalkAdd = () => {
    console.log('talk add');
  };

  const onEvent = {
    onAvatar,
    onSearch,
    onChangeSearch,
    onPressEnter,
    onReset,
    onFriendAddBar,
    onTalkAdd,
  };

  return (
    <Box>
      <AppHeader
        currentLocation={currentLocation}
        userInfo={userInfo}
        openSearch={openSearch}
        search={search}
        onEvent={onEvent}
      />
      <FriendAddContainer />
    </Box>
  );
}

export default observer(AppHeaderContainer);
