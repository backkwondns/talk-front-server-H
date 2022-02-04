import React, { useContext } from 'react';
import FriendAdd from 'src/pages/layout/appHeader/friendAdd/friendAdd';
import { MobXProviderContext, observer } from 'mobx-react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

function FriendAddContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const userInfo = rootStore.loginStore.getUserInfo;
  const friendSearchResult = rootStore.layoutStore.getFriendSearchResult;
  const openFriendAddBar = rootStore.layoutStore.getOpenFriendAddBar;
  const openFriendAdd = rootStore.layoutStore.getOpenFriendAdd;
  const searchFriend = rootStore.graphStore.getSearchFriend;
  const addFriend = rootStore.graphStore.getAddFriend;

  const [searchFriendMutation] = useMutation(searchFriend, {
    onError: () => {
      rootStore.layoutStore.setFriendSearchResult(false);
    },
    onCompleted: (data) => {
      rootStore.layoutStore.setFriendSearchResult(data.searchFriend);
    },
  });

  const [addFriendMutation] = useMutation(addFriend, {
    onError: (error) => {
      toast.error(error.message);
    },
    onCompleted: () => {
      rootStore.friendStore.setNewFriend(friendSearchResult);
    },
  });
  const onFriendAddBar = () => {
    rootStore.layoutStore.toggleOpenFriendAddBar();
    rootStore.layoutStore.setOpenFriendAdd('');
    rootStore.layoutStore.setFriendSearch('');
    rootStore.layoutStore.setFriendSearchResult(undefined);
  };

  const onFriendAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    const method = event.currentTarget.id;
    rootStore.layoutStore.setOpenFriendAdd(method);
  };

  const onFriendSearch = async () => {
    const value = rootStore.layoutStore.getFriendSearch;
    if (userInfo.email !== value || userInfo.userName !== value || userInfo.phoneNumber !== value)
      await searchFriendMutation({
        variables: {
          method: openFriendAdd,
          value,
          userName: userInfo.userName,
        },
      });
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    rootStore.layoutStore.setFriendSearch(event.currentTarget.value);
  };

  const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onFriendSearch().then();
    }
  };

  const onClickFriendAdd = async (event: React.MouseEvent<HTMLButtonElement>) => {
    rootStore.layoutStore.setFriendSearchResultDisable();
    await addFriendMutation({
      variables: {
        userName: userInfo.userName,
        friend: rootStore.layoutStore.getFriendSearchResult.userName,
      },
      refetchQueries: [rootStore.graphStore.findFriend],
    });
  };

  const onEvent = {
    onFriendAddBar,
    onFriendAdd,
    onFriendSearch,
    onChangeSearch,
    onPressEnter,
    onClickFriendAdd,
  };
  return (
    <FriendAdd
      openFriendAddBar={openFriendAddBar}
      openFriendAdd={openFriendAdd}
      friendSearchResult={friendSearchResult}
      onEvent={onEvent}
    />
  );
}

export default observer(FriendAddContainer);
