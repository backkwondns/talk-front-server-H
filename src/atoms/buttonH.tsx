import React from 'react';
import { Button } from '@mui/material';
import { atomsInterface } from 'src/interfaces';

function ButtonH(props: atomsInterface.buttonInterface): JSX.Element {
  const { content } = props;
  return <Button {...props}>{content}</Button>;
}

export default ButtonH;
