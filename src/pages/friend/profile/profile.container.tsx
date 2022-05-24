import React, { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { useLazyQuery, useMutation } from '@apollo/client';
import Profile from './profile';

function ProfileContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const zIndex = (rootStore.layoutStore.getCoverPage.indexOf('profile') + 1) * 100000;
  const userInfo = rootStore.loginStore.getUserInfo;
  const selectedFriend = rootStore.friendStore.getSelectedFriend;
  const findFriendTalk = rootStore.graphStore.getFindFriendTalk;
  const detailTalk = rootStore.graphStore.getDetailTalk;
  const rangeOfTalk = rootStore.talksStore.getRangeOfTalk;

  const [detailTalkMutation] = useMutation(detailTalk, {
    fetchPolicy: 'no-cache',
    onCompleted: (data) => rootStore.talksStore.setSelectedRoomFromProfile(data.detailTalk, selectedFriend),
  });

  const [findFriendTalkQuery] = useLazyQuery(findFriendTalk, {
    onCompleted: (data) => {
      detailTalkMutation({ variables: { talkID: data.findFriendTalk.id, from: 0, to: rangeOfTalk } });
    },
  });

  const onProfileClose = () => {
    rootStore.layoutStore.popCoverPage();
    rootStore.friendStore.setSelectedFriend('');
  };
  const onTalk = () => {
    rootStore.layoutStore.pushCoverPage('room');
    findFriendTalkQuery({ variables: { userName: [userInfo.userName, selectedFriend.userName] } });
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
  return <Profile zIndex={zIndex} userInfo={userInfo} selectedFriend={selectedFriend} onEvent={onEvent} />;
}

export default ProfileContainer;
