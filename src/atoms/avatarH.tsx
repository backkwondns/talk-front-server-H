import React from 'react';
import { atomsInterface } from 'src/interfaces';
import { Person } from '@mui/icons-material';
import { Avatar } from '@mui/material';

function AvatarH(props: atomsInterface.avatarInterface): JSX.Element {
  const { content } = props;
  if (!content) {
    return (
      <Avatar {...props}>
        <Person />
      </Avatar>
    );
  }
  return <Avatar {...props} src={content} />;
}

export default AvatarH;
