import React from 'react';
import { atomsInterface } from 'src/interfaces';

function AvatarH(props: atomsInterface.avatarInterface): JSX.Element {
  const { children } = props;
  return <AvatarH {...props}>{children}</AvatarH>;
}

export default AvatarH;
