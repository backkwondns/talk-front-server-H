import React, { useContext } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import Friends from './friends';

function FriendsContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const userInfo = rootStore.loginStore.getUserInfo;
  const friendList = rootStore.friendStore.getFriendList;
  const search = rootStore.layoutStore.getSearch;
  const findFriend = rootStore.graphStore.getFindFriend;
  const newFriend = rootStore.friendStore.getNewFriend;
  const { loading, error } = useQuery(findFriend, {
    variables: {
      userName: userInfo.userName,
    },
    onCompleted: (friends) => {
      rootStore.friendStore.setFriendList(friends.findFriend);
    },
  });

  if (error) {
    toast.error(error.message);
  }
  return (
    <Friends newFriend={newFriend} userInfo={userInfo} friendList={friendList} search={search} loading={loading} />
  );
}

export default observer(FriendsContainer);
