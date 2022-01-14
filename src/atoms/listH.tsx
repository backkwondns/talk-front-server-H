import { List } from '@mui/material';
import React from 'react';
import { atomsInterface } from 'src/interfaces';

function ListH(props: atomsInterface.listInterface): JSX.Element {
  const { children } = props;
  return <List {...props}>{children}</List>;
}

export default ListH;
