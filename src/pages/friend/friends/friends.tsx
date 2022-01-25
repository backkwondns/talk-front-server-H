import { Box, Divider } from '@mui/material';
import React from 'react';
import { ListH } from 'src/atoms';
import { FriendListItemsH, Loading } from 'src/organisms';
import { friendInterface, layoutInterface } from 'src/interfaces';

function Friends(props: friendInterface.friendsInterface): JSX.Element {
  const { userInfo, friendList, search, loading } = props;
  return (
    <Box>
      <ListH disablePadding>
        <FriendListItemsH targetInfo={userInfo} divider={false} />
      </ListH>
      <Divider variant="middle" textAlign="left" sx={{ mt: 0.5 }}>
        Friend {friendList.length}
      </Divider>
      <ListH disablePadding>
        {!loading ? (
          friendList
            .filter((friend: layoutInterface.userInfoInterface) => friend.userName.includes(search))
            .map((value: layoutInterface.userInfoInterface) => {
              return <FriendListItemsH key={value.userName} targetInfo={value} />;
            })
        ) : (
          <Loading />
        )}
      </ListH>
    </Box>
  );
}

export default Friends;
