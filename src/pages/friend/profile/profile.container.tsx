import React, { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import Profile from './profile';

function ProfileContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const userInfo = rootStore.loginStore.getUserInfo;
  const selectedFriend = rootStore.friendStore.getSelectedFriend;
  const onProfileClose = () => {
    rootStore.friendStore.setSelectedFriend('');
  };
  const onTalk = () => {
    console.log('talk');
  };

  const onCall = () => {
    console.log(`Call to ${rootStore.friendStore.getSelectedFriend.phoneNumber}`);
  };

  const onProfile = () => {
    console.log('move to Profile Edit');
  };

  const onEvent = {
    onProfileClose,
    onTalk,
    onCall,
    onProfile,
  };
  return <Profile userInfo={userInfo} selectedFriend={selectedFriend} onEvent={onEvent} />;
}

export default ProfileContainer;
