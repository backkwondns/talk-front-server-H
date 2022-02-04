import { AvatarH } from 'src/atoms';
import { ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { organismsInterface } from 'src/interfaces';

function FriendListItemsH(props: organismsInterface.friendListItemsInterface): JSX.Element {
  const { targetInfo, divider = true, onFriend } = props;
  const { userName, setting } = targetInfo;
  const { avatar, statusMessage } = setting;
  return (
    <ListItemButton key={userName} id={userName} sx={{ p: 1 }} divider={divider} onClick={onFriend}>
      <AvatarH sx={{ mr: 1 }} content={avatar} />
      <ListItemText
        primary={userName}
        secondary={statusMessage}
        secondaryTypographyProps={{
          sx: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
        }}
      />
    </ListItemButton>
  );
}

export default FriendListItemsH;
