import React from 'react';
import { IconButton } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function IconButtonH(props: atomsInterface.iconButtonInterface): JSX.Element {
  const { icon } = props;
  return <IconButton {...props}>{icon}</IconButton>;
}

export default IconButtonH;
