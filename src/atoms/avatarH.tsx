import React from 'react';
import { atomsInterface } from 'src/interfaces';
import { Person } from '@mui/icons-material';
import { Avatar } from '@mui/material';

function AvatarH(props: atomsInterface.avatarInterface): JSX.Element {
  const { content, isLetter, id } = props;
  if (!content) {
    return (
      <Avatar id={id} {...props}>
        <Person />
      </Avatar>
    );
  }
  if (isLetter) {
    return <Avatar {...props}>{content}</Avatar>;
  }
  return <Avatar {...props} src={content} />;
}

export default AvatarH;
